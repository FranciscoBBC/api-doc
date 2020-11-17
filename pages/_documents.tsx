import React from 'react';
import Document, { Html, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="pt">
          <Head>
            <meta charSet="utf-8" />
          </Head>
          <body>
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
