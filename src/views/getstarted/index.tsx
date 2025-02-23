
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
        <main className="container mx-auto px-6 py-10 ">
          <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Getting Started Guide</h2>
            <Accordion type="single" defaultValue="step1">
              <AccordionItem value="step1">
                <AccordionTrigger className="text-xl font-bold">Step 1: Get a Wallet</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    The first step to interacting with the Solana blockchain is to set up a wallet.
                    A wallet will allow you to store your SOL tokens and interact with various dApps
                    (decentralized applications) and NFTs. We recommend starting with one of these
                    wallets:
                  </p>
                    <ul className="list-disc pl-5 mt-3 text-xl">
                    <li>
                      <a
                      href="https://solflare.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                      >
                      Solflare Wallet (Recommended)
                      </a>
                    </li>
                    <li>
                      <a
                      href="https://tor.us/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                      >
                      Torus Wallet
                      </a>
                    </li>
                    </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2">
                <AccordionTrigger className="text-xl font-bold">Step 2: Fund Your Wallet</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    Once you have your wallet set up, you&apos;ll need to fund it with SOL tokens,
                    which are used for transactions on the Solana blockchain. You can purchase
                    SOL from trusted cryptocurrency exchanges like:
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-xl">
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
                  <p className="mt-4 text-xl">
                  lternatively, you can purchase SOL directly within the Solflare Wallet using the Onramper Widget by following these steps:
                  </p>
                  <ul className="list-decimal pl-5 mt-3 text-xl">
                  <li>Open the Solflare Wallet app.</li>
                    <li>Click on the &quot;Buy&quot; button.</li>
                    <li>Select &quot;Solana SOL&quot; option.</li>
                    <li>Choose the Onramper Widget as your payment method.</li>
                    <li>Enter the amount of USD to SOL you want to purchase.</li>
                    <li>Follow the prompts to complete the purchase through Onramper.</li>
                    <li>Once the transaction is confirmed, the SOL will be credited to your wallet.</li>
                    <li>Check your wallet balance to ensure the SOL has been added.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3">
                <AccordionTrigger className="text-xl font-bold">Step 3: Start Exploring</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    Now that your wallet is set up and funded, you&apos;re ready to return to the home page and connect your wallet to claim your Candibar Collection NFTs. Start your journey and secure your piece of this exclusive collection today!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </main>
      </div>
    </div>
  );
};
