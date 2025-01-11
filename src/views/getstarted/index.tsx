
import { FC } from "react";

export const GetStartedView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
 <div className="min-h-screen text-white">
      {/* Header */}
      <div className="py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Getting Started with Solana Wallet</h1>
          <p className="mt-2 text-lg">
            Follow these simple steps to embark on your journey with Solana and NFTs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Getting Started Guide</h2>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Step 1: Get a Wallet</h3>
            <p>
              The first step to interacting with the Solana blockchain is to set up a wallet.
              A wallet will allow you to store your SOL tokens and interact with various dApps
              (decentralized applications) and NFTs. We recommend starting with one of these
              wallets:
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>
                <a
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  Phantom Wallet (Recommended)
                </a>
              </li>
              <li>
                <a
                  href="https://solflare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  Solflare Wallet
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Step 2: Fund Your Wallet</h3>
            <p>
              Once you have your wallet set up, you’ll need to fund it with SOL tokens,
              which are used for transactions on the Solana blockchain. You can purchase
              SOL from trusted cryptocurrency exchanges like:
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>
                <a
                  href="https://www.coinbase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  Coinbase
                </a>
              </li>
              <li>
                <a
                  href="https://www.binance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  Binance
                </a>
              </li>
              <li>
                <a
                  href="https://www.kraken.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  Kraken
                </a>
              </li>
              <li>
                <a
                  href="https://ftx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  FTX
                </a>
              </li>
            </ul>
            <p className="mt-4">
              You can also visit the{" "}
              <a
                href="https://solana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                official Solana website
              </a>{" "}
              to learn more about its ecosystem.
            </p>
          </section>

          <section>
          <h3 className="text-2xl font-semibold mb-4">Step 3: Start Exploring</h3>
          <p>
            Now that your wallet is set up and funded, you&apos;re ready to return to the home page and connect your wallet to access the 2025 Snake Collection NFTs. Start your journey and claim your piece of this exclusive collection today!
          </p>
        </section>
        </article>
      </main>
    </div>
    </div>
  );
};
