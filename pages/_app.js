import "../styles/globals.css";
import Head from "next/head";
import StateProvider from "./Context/StateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link href='https://fonts.googleapis.com/css?family=Open Sans Condensed:300' rel='stylesheet'></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <StateProvider>
      <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;
