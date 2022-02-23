import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EREM Coronel João Francisco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="../..//logo-erem.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
