import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Nextjs</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Um boilerplate simples para se iniciar projetos com o create-next-app"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
