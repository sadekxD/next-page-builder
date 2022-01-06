import "../styles/globals.css";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
