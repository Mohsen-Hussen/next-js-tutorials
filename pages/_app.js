import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/layout.css";

export default function App({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<>
			<Head>
				<title>First Next Js Poriject</title>
				<meta
					name="description"
					content="Awesome course from Codevolution channel"
				/>
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
