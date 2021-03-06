extern crate fcm;
extern crate argparse;
extern crate futures;
extern crate tokio_core;
#[macro_use] extern crate serde_derive;

use argparse::{ArgumentParser, Store};
use fcm::{MessageBuilder, Client};

#[derive(Serialize)]
struct CustomData {
    message: &'static str,
}

fn main() {
    let mut device_token = String::new();
    let mut api_key = String::new();

    {
        let mut ap = ArgumentParser::new();
        ap.set_description("A simple FCM notification sender");
        ap.refer(&mut device_token).add_option(&["-t", "--device_token"], Store, "Device token");
        ap.refer(&mut api_key).add_option(&["-k", "--api_key"], Store, "API key");
        ap.parse_args_or_exit();
    }

    let mut core = tokio_core::reactor::Core::new().unwrap();
    let handle = core.handle();
    let client = Client::new(&handle).unwrap();

    let data = CustomData {
        message: "howdy",
    };

    let mut builder = MessageBuilder::new(api_key.as_ref(), device_token.as_ref());
    builder.data(&data).unwrap();

    let work = client.send(builder.finalize());

    match core.run(work) {
        Ok(response) => println!("Sent: {:?}", response),
        Err(error) => println!("Error: {:?}", error),
    };
}
