import Head from "next/head";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Font Awesome 6 for React & Node logos */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;