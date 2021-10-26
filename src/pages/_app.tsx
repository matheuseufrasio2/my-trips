import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />

        <meta
          name="description"
          content="A simple project to show my favorite spots on the world"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
