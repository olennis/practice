import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>next practice</title>
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
