
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
            <Accordion type="single" >
              <AccordionItem value="firewall-settings">
                <AccordionTrigger className="text-xl font-bold">Firewall & Norton Configuration</AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl">
                    If you are experiencing issues with images or content being blocked, ensure that the following URLs are allowed through your firewall:
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-xl">
                    <li>https://entire-wagon-fix.quicknode-ipfs.com/*</li>
                    <li>https://bark-single-melted.quicknode-ipfs.com/*</li>
                    <li>https://arweave.net/*</li>
                    <li>https://solscan.io/*</li>
                    <li>https://explorer.solana.com/*</li>
                  </ul>
                  <p className="text-xl font-bold mt-5">Norton Firewall Configuration</p>
                  <p className="text-xl">Follow these steps to allow the necessary URLs through Norton Firewall:</p>
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
            </Accordion>

          </article>
        </main>
      </div>
    </div>
  );
};
