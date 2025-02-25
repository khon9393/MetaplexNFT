
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
export const GetStartedView: FC = ({ }) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="min-h-screen text-white">
        {/* Header */}
        <div className="py-6">
          <div className="container mx-auto text-center">
            <h1 
             className="text-center text-4xl p-4 md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 mb-4"
            // className="text-4xl font-bold"
            
            >Getting Started with Solana Wallet</h1>
            <p className="mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 mb-4">
              Follow these simple steps to embark on your journey with Solana and NFTs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10 ">
          <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-yellow-500 mb-4">Getting Setup with a Wallet</h2>
            <Accordion type="single" collapsible={true} defaultValue="step1">
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

              {/* <AccordionItem value="step3">
                <AccordionTrigger className="text-xl font-bold">Step 3: Start Exploring</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    Now that your wallet is set up and funded, you&apos;re ready to return to the home page and connect your wallet to claim your Candibar Collection NFTs. Start your journey and secure your piece of this exclusive collection today!
                  </p>
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>
          </article>

            <article className="prose prose-invert prose-lg max-w-3xl mx-auto py-10 mt-10">
            <h2 className="text-3xl font-bold mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-yellow-500 mb-4">Platform Guide Launch Pad</h2>
            <Accordion type="single" collapsible={true} defaultValue="step1">
              <AccordionItem value="step1">
                <AccordionTrigger className="text-xl font-bold">Step 1: Get Candi NFTs</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    Candi NFTs are essential for accessing the Candibar platform. 
                    They grant you entry to exclusive features, rewards, and the vibrant Candibar community. 
                    Additionally, they can be exchanged for official Candibar tokens, which can be used to purchase items in the Candibar marketplace. 
                    You can mint them directly from our website here:
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                    <li>
                      <Link href="/Candi" className="text-blue-300 hover:underline">
                        2025 Candi Collection NFTs
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2">
                <AccordionTrigger className="text-xl font-bold">Step 2: Swap Candi NFTs for Candibar Tokens</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    Once you have your Candi NFTs, you can swap them for Candibar tokens. 
                    These tokens are used for transactions within the Candibar ecosystem and can be traded on various exchanges in the near future. 
                    To swap your Candi NFTs for Candibar tokens, follow these steps:
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                    <li>Go to the <Link href="/nftswap" className="text-blue-300 hover:underline">Candibar Swap Page</Link>.</li>
                    <li>Connect your wallet by clicking on the &quot;Select Wallet&quot; button.</li>
                    <li>Choose the Candi NFTs you want to swap from your wallet.</li>
                    <li>Confirm the swap transaction to receive your Candibar tokens.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3">
                <AccordionTrigger className="text-xl font-bold">Step 3: Redeem or Swap NFTs in the Marketplace</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl mt-4">
                    After swapping your Candi NFTs for Candibar tokens, you can redeem them for exclusive items in the Candibar marketplace or swap them for other NFTs. 
                    The marketplace features a variety of items, including limited-edition NFTs, collectibles, and more. 
                    Additionally, you can redeem your Candibar tokens for exclusive Candibar collection NFTs, including the Candi-inspired Zodiac collection. 
                    To redeem or swap your NFTs, follow these steps:
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                    <li>Connect your wallet by clicking on the &quot;Select Wallet&quot; button.</li>
                    <li>Choose the Zodiac NFTs you want to redeem from your wallet.</li>
                    <li>Confirm the redemption transaction to receive your exclusive Zodiac NFTs.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </main>
      </div>
    </div>
  );
};
