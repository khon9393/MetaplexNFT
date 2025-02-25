import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candibar NFTs - Buy, Trade, Sell, NFT, Candibar Tokens",
  description: "Candibar NFTs - Buy, Trade, and Sell Unique Digital Assets | Candibar Tokens Marketplace | Discover Rare NFTs, Collectibles, and Digital Art | Secure and Fast Transactions | Join the Candibar Community Today",
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
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
