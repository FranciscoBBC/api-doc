import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>api doc</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
