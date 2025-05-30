
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
            
            >Getting Started with Candibar Platform and Solana</h1>
            <h4 className="mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 mb-4">
              Follow these simple steps to embark on your journey with Solana blockchain and Candibar NFTs.
            </h4>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10 ">
          <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-yellow-500 mb-4">Getting Setup with a Wallet</h2>
            <Accordion type="single" collapsible={true}>
              <AccordionItem value="step1">
                <AccordionTrigger className="text-xl font-bold">Step 1: Get a Wallet</AccordionTrigger>
                <AccordionContent>
                  <h3 className="text-xl">
                    The first step to interacting with the Solana blockchain is to set up a wallet.
                    A wallet will allow you to store your SOL tokens and interact with various dApps
                    (decentralized applications) and NFTs. We recommend starting with one of these
                    wallets:
                  </h3>
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
                  <h3 className="text-xl">
                    Once you have your wallet set up, you&apos;ll need to fund it with SOL tokens,
                    which are used for transactions on the Solana blockchain. You can purchase
                    SOL directly within the Solflare Wallet using the Onramper Widget by following these steps:
                  </h3>
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
                  <h3 className="mt-4 text-xl">
                    Alternatively, you can purchase SOL from trusted cryptocurrency exchanges like:
                    </h3>
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>

            <article className="prose prose-invert prose-lg max-w-3xl mx-auto py-10 mt-10">
            <h2 className="text-3xl font-bold mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-yellow-500 mb-4">Platform Guide Launch Pad</h2>
            <h6 className="text-1xl mb-4">
              Note: All transactions will require a small amount of Solana (SOL) tokens to cover network fees.
            </h6>
            <Accordion type="single" collapsible={true}>
            <AccordionItem value="step1">
              <AccordionTrigger className="text-xl font-bold">Step 1: Purchase and Exchange Candibar Tokens</AccordionTrigger>
              <AccordionContent>
                <h2 className="text-xl mt-4">
                To begin using the Candibar platform, you need to acquire Candibar tokens. These tokens can be purchased and exchanged on various platforms. Follow these steps to get started:
                </h2>
                <div className="text-md md:text-lg font-medium py-2 text-gray-300">
                <span>Purchase and exchange CANDIBAR/SOL on platforms like </span> 
                <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Raydium </a>, 
                <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Dexscreener </a>, 
                <a href="https://jup.ag/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Jupiter </a>, or directly via the 
                <a href="https://solflare.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Solflare wallet </a>.
                </div>
                <ul className="list-disc pl-5 mt-3 text-xl">
                <li>Ensure your wallet is set up and funded with SOL tokens.</li>
                <li>Visit one of the recommended platforms to exchange SOL for Candibar tokens.</li>
                <li>Follow the platform&apos;s instructions to complete the transaction.</li>
                <li>Once the transaction is confirmed, the Candibar tokens will be credited to your wallet.</li>
                </ul>
              </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="step2">
                <AccordionTrigger className="text-xl font-bold">Step 2: Redeem Candibar Tokens for NFTs in the Marketplace</AccordionTrigger>
                <AccordionContent>
                  <h2 className="text-xl mt-4">
                  After swapping your Candi NFTs for Candibar tokens, you can use them to acquire exclusive items in the Candibar marketplace or swap them for other NFTs. 
                  The marketplace offers a variety of items, including limited-edition NFTs, collectibles, and more. 
                  Additionally, you can use your Candibar tokens to obtain exclusive Candibar collection NFTs, such as the Candi-inspired Zodiac collection. 
                  To redeem or swap your NFTs, follow these steps:
                  </h2>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                  <li>Connect your wallet by clicking on the &quot;Select Wallet&quot; button.</li>
                  <li>Go to the <Link href="/AstrologyZodiac" className="text-blue-300 hover:underline">Zodiac collection Page</Link>.</li>
                  <li>Select the Zodiac NFTs you want to acquire using your Candibar tokens.</li>
                  <li>Confirm the transaction to receive your exclusive Zodiac NFTs.</li>
                  </ul>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step3">
                <AccordionTrigger className="text-xl font-bold">Step 3: See Candibar Platform Asset Guide (CPAG)</AccordionTrigger>
                <AccordionContent>
                  <h2 className="text-xl">
                    The Candibar Platform Asset Guide (CPAG) provides a comprehensive overview of all assets available within the Candibar ecosystem. 
                    This includes NFTs, tokens, and other digital assets that can be traded or utilized on the platform. 
                    To explore the CPAG, go here:
                  </h2>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                  <li><Link href="/CPAG" className="text-blue-300 hover:underline">Candibar Platform Asset Guide Page</Link>.</li>
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
