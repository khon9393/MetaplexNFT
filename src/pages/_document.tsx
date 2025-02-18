import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candibarnft.com",
  description: "Candibar NFT Marketplace",
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
