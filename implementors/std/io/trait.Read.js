(function() {var implementors = {};
implementors["bytes"] = [{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/buf/struct.Reader.html\" title=\"struct bytes::buf::Reader\">Reader</a>&lt;B&gt;",synthetic:false,types:["bytes::buf::reader::Reader"]},];
implementors["hyper_tls"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"hyper_tls/enum.MaybeHttpsStream.html\" title=\"enum hyper_tls::MaybeHttpsStream\">MaybeHttpsStream</a>&lt;T&gt;",synthetic:false,types:["hyper_tls::stream::MaybeHttpsStream"]},];
implementors["mio"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>",synthetic:false,types:["mio::net::tcp::TcpStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>",synthetic:false,types:["mio::net::tcp::TcpStream"]},];
implementors["native_tls"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"native_tls/struct.TlsStream.html\" title=\"struct native_tls::TlsStream\">TlsStream</a>&lt;S&gt;",synthetic:false,types:["native_tls::TlsStream"]},];
implementors["openssl"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslStream.html\" title=\"struct openssl::ssl::SslStream\">SslStream</a>&lt;S&gt;",synthetic:false,types:["openssl::ssl::SslStream"]},];
implementors["tokio_core"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_core::net::tcp::TcpStream"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_core::net::tcp::TcpStream"]},{text:"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt;",synthetic:false,types:["tokio_core::reactor::poll_evented::PollEvented"]},{text:"impl&lt;'a, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["tokio_core::reactor::poll_evented::PollEvented"]},];
implementors["tokio_io"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::codec::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt;",synthetic:false,types:["tokio_io::length_delimited::FramedWrite"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadHalf.html\" title=\"struct tokio_io::io::ReadHalf\">ReadHalf</a>&lt;T&gt;",synthetic:false,types:["tokio_io::split::ReadHalf"]},];
implementors["tokio_tls"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt;",synthetic:false,types:["tokio_tls::TlsStream"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
