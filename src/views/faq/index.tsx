

import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import phatomblock1 from "../../../public/phantom/Screenshot 2025-02-02 052714.png";
import phatomblock2 from "../../../public/phantom/Screenshot 2025-02-02 052809.png";
import Link from "next/link";

export const FAQView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="min-h-screen text-white">
        {/* Header */}
        <div className="py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">FAQ</h1>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10 ">
          <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Fequently Asked Questions</h2>
            <Accordion type="single" collapsible defaultValue="Phaonm-Request-block" >
              <AccordionItem value="Phaonm-Request-block"></AccordionItem>
              <AccordionItem value="Phaonm-Request-block">
                <AccordionTrigger className="text-xl font-bold">Phantom Wallet Request block</AccordionTrigger>
                <AccordionContent>
                  <div className="text-xl">
                    <h4>
                      Due to ongoing issues with Phantom Wallet blocking minting requests, we recommend using <strong>Solflare Wallet</strong> for a smoother and more reliable minting experience. Solflare provides a hassle-free transaction process, making it the preferred choice for minting.
                    </h4>
                    <h4>
                      We appreciate your understanding and support as we strive to offer the best possible user experience.
                    </h4>  </div>

                  <h2 className="text-xl font-bold">Messages may look like this:</h2>
                  <div className="flex flex-wrap space-x-4">
                    <div className="w-full sm:w-auto">
                      <Image src={phatomblock1} alt="Phatomblock1" />
                    </div>
                    <div className="w-full sm:w-auto">
                      <Image src={phatomblock2} alt="Phatomblock2" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="firewall-settings">
                <AccordionTrigger className="text-xl font-bold">Firewall & Norton Configuration</AccordionTrigger>
                <AccordionContent>
                  <h1 className="text-xl">
                    If you are experiencing issues with images or content being blocked, ensure that the following URLs are allowed through your firewall:
                  </h1>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                    <li>https://entire-wagon-fix.quicknode-ipfs.com/*</li>
                    <li>https://bark-single-melted.quicknode-ipfs.com/*</li>
                    <li>https://arweave.net/*</li>
                    <li>https://solscan.io/*</li>
                    <li>https://explorer.solana.com/*</li>
                    <li>https://core.metaplex.com/*</li>
                  </ul>
                  <h1 className="text-xl font-bold mt-5">Norton Firewall Configuration</h1>
                  <h1 className="text-xl">Follow these steps to allow the necessary URLs through Norton Firewall:</h1>
                  <ol className="list-decimal pl-5 mt-3 text-xl">
                    <li>Open <strong>Norton</strong> and go to <strong>Settings</strong>.</li>
                    <li>Click on <strong>Firewall</strong>.</li>
                    <li>Navigate to the <strong>Program Control</strong> tab.</li>
                    <li>Click <strong>Add</strong> to create a new rule.</li>
                    <li>Enter the URL or domain to allow (e.g., <em>https://entire-wagon-fix.quicknode-ipfs.com/*</em>).</li>
                    <li>Choose <strong>Allow</strong> as the action.</li>
                    <li>Click <strong>OK</strong> to save the rule.</li>
                    <li>Repeat for each URL listed above.</li>
                    <li>Restart your browser and check if the issue is resolved.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              {/* <AccordionItem value="view-nft-phantom">
                <AccordionTrigger className="text-xl font-bold">If Not Able To View Your NFT In Phantom Wallet</AccordionTrigger>  <AccordionContent>
                  <p className="text-xl">
                    If you can't see your NFTs in the Phantom wallet, visit&nbsp;
                    <Link href="https://core.metaplex.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                      Metaplex Core
                    </Link>
                    &nbsp;and click on the "Connect Wallet" button. This will allow you to connect your Phantom wallet and view your NFTs.
                  </p>
                  <p className="text-xl">
                    If you are still having issues, you can also try using the <strong>Solana Explorer</strong> to check your wallet balance and transactions.&nbsp;
                    <Link href="https://explorer.solana.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                      Solana Explorer
                    </Link>
                    &nbsp;is a blockchain explorer for the Solana network that allows you to view your wallet balance, transaction history, and other information.
                  </p>
                  <p className="text-xl">
                    If you are still having issues, you can also try using the <strong>Solscan</strong> to check your wallet balance and transactions.&nbsp;
                    <Link href="https://solscan.io" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                      Solscan
                    </Link>
                    &nbsp;is a blockchain explorer for the Solana network that allows you to view your wallet balance, transaction history, and other information.
                  </p>
                </AccordionContent>
              </AccordionItem> */}


            </Accordion>
          </article>
        </main>
      </div>
    </div>
  );
};
