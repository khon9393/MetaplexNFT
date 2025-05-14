import { FC, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';
import solanaLogo from "../../public/logos/solanaLogo.png";
import metaplexLogo from "../../public/logos/metaplex-logo.png";
import Link from 'next/link';
import candibarQRcode from "../../public/logos/candibarQRcode.png";
import { SolCalcDrawer } from './candibar/SolCalcDrawer';
import JupAg from "../../public/logos/jupiter-logo.webp";
import dexscreener from "../../public/logos/dex-screener-icon-filled-256.png";
import raydium from "../../public/logos/Raydium-Logo-min.png";

export const Footer: FC = () => {
  return (
    <div className="flex">
      <footer className="border-t-2 border-[#141414] bg-black hover:text-white w-screen">
        <div className="ml-12 py-12 mr-12">
       
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
            <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
              <div className='flex flex-row ml-1'>
                <SolCalcDrawer />
              </div>
              <div className="disclaimer-container text-gray-400 p-2">

                <h1 className="disclaimer-title">Legal Disclaimer</h1>
                <Accordion type="single">
                  {/* Accordion Item: No Investment Advice */}
                  <AccordionItem value="no-investment-advice">
                    <AccordionTrigger>No Investment Advice</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        The content on this website, including information about Candibar
                        Crypto and NFTs, is provided for{" "}
                        <strong>fun, entertainment, and educational purposes only</strong>
                        . It is not intended to provide financial, investment, or legal
                        advice. Any decisions you make based on the content of this
                        website are your sole responsibility.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accordion Item: No Liability */}
                  <AccordionItem value="no-liability">
                    <AccordionTrigger>No Liability</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        We hold no liability for any loss, damage, or harm resulting from
                        the use of this website or participation in Candibar Crypto and
                        NFTs. By accessing or using this site, you agree that you are
                        engaging with the platform at your own risk.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accordion Item: Not a Financial Product */}
                  <AccordionItem value="not-a-financial-product">
                    <AccordionTrigger>Not a Financial Product</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Candibar Crypto and NFTs are not financial products or securities.
                        They are designed solely as a form of digital entertainment and
                        creativity. This website does not facilitate or encourage
                        investment activity or speculative trading.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accordion Item: Educational Purpose Only */}
                  <AccordionItem value="educational-purpose-only">
                    <AccordionTrigger>Educational Purpose Only</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Any references to cryptocurrency, blockchain technology, or NFTs
                        are intended to educate and inform users about these technologies.
                        This website does not guarantee the accuracy, completeness, or
                        reliability of its content.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accordion Item: Age and Jurisdiction */}
                  <AccordionItem value="age-and-jurisdiction">
                    <AccordionTrigger>Age and Jurisdiction</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        This platform is intended for users who are legally permitted to
                        access cryptocurrency and NFT-related content in their respective
                        jurisdictions. It is the user&apos;s responsibility to ensure
                        compliance with local laws and regulations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accordion Item: Changes to this Disclaimer */}
                  <AccordionItem value="changes-to-disclaimer">
                    <AccordionTrigger>Changes to this Disclaimer</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        We reserve the right to update or modify this disclaimer at any
                        time without prior notice. Continued use of the website
                        constitutes acceptance of the updated terms.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="p-3">
                <Link href="/privacypolicy">
                  Privacy&nbsp;Policy
                </Link>
              </div>

              <div className="p-3">
                <Link href="/termofservice">
                  Term&nbsp;of&nbsp;Service
                </Link>
              </div>
            </div>

            <div className="mb-6 items-center col-span-2 mx-auto max-w-screen-lg space-y-4">

              <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>

                <Link href="/">
                  <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500">

                    Candibar
                  </h1>
                  <span
                    className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 "
                  >Where Digital Art and Sugar Converge
                  </span>
                </Link>


                <div className="font-normal mb-2.5 p-5 text-sm">
                  {["candibarnft.com", "candibarnft.io"].map((domain) => (
                    <div key={domain} className="mb-2">
                      <a href={`https://www.${domain}`} target="_blank" rel="noopener noreferrer">
                        ©&nbsp;{new Date().getFullYear()}&nbsp;{domain}
                      </a>
                    </div>
                  ))}
                  All Rights Reserved.
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Link href="/getstarted"
                    className="text-center w-[150px] hover:underline text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-yellow-500">
                    Getting Started - Quick Guide.
                  </Link>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="text-center w-[150px]">
                    Start by scanning the QR code below using your mobile device to access the Candibar app.
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <Image
                    src={candibarQRcode}
                    alt="Candibar QR Code"
                    width={150}
                    height={150}
                    className="inline-block p-2"
                  />
                </div>
              </div>

            </div>

            <div className="mb-6 items-center col-span-2 mx-auto max-w-screen-lg">
              <a
                href={process.env.NEXT_PUBLIC_RPC_SOCIAL_X}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-gray-400 transition "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M15.29 3H19.78L13.69 10.38L20.98 21H14.92L10.58 14.92L5.44 21H0.94L7.52 13.06L0.5 3H6.72L10.6 8.45L15.29 3ZM14.25 19.29H15.95L5.86 4.63H4.01L14.25 19.29Z" />
                </svg>
                <span className="text-sm">Follow us on X</span>
              </a>

              <a
                href={`https://t.me/candibarnft`}
                className="flex items-center hover:text-gray-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22.5 3.5L19.5 20.5C19.5 20.5 19 22 17.5 21.5L12.5 17.5L10 20C10 20 9.5 20.5 9 20.5C8.5 20.5 8.5 20 8.5 20L9.5 15.5L18.5 6.5C18.5 6.5 19 6 18.5 5.5C18 5 17.5 5.5 17.5 5.5L6.5 11L2 9.5C2 9.5 1 9 2 8.5L21 2C21 2 22 1.5 22.5 2C23 2.5 22.5 3.5 22.5 3.5Z" />
                </svg>
                <span className="text-sm p-4">t.me/candibarnft</span>
              </a>

              <a
                href={`mailto:${process.env.NEXT_PUBLIC_RPC_SUPPORT_EMAIL}`}
                className="flex items-center hover:text-gray-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 12.713L0 5.25V18h24V5.25l-12 7.463zM12 0L0 7.5l12 7.5 12-7.5L12 0z" />
                </svg>
                <span className="text-sm p-4">Contact Us</span>
              </a>

              <div className="flex flex-col mb-0 p-5">
                <span className="italic">Built on Solana Blockchain and Metaplex</span>
                <a href="https://solana.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <Image
                    src={solanaLogo}
                    alt="Solana Logo"
                    width={100}
                    height={100}
                    className="inline-block p-2"
                  />
                </a>
                <a href="https://metaplex.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={metaplexLogo}
                    alt="Metaplex Logo"
                    width={100}
                    height={100}
                    className="inline-block p-2"
                  />
                </a>
              </div>
              <div className="flex flex-col mb-0 p-5">
                <span className="italic">Buy & Trade Candibar Tokens</span>
                <a href="https://jup.ag/tokens/AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <Image
                    src={JupAg}
                    alt="Jup.ag Logo"
                    width={35}
                    height={35}
                    className="inline-block p-2"
                  />
                   <span>Jup.ag</span>
                </a>
                <a href="https://dexscreener.com/solana/64abbhkzpwxkdvg1h7yty2f4tgs594s8hmbabntjgyme" target="_blank" rel="noopener noreferrer" className="mr-4 relative">
                <Image
                    src={dexscreener}
                    alt="Dex Screener Logo"
                    width={40}
                    height={40}
                    className="inline-block p-2"
                  />
                  <span>DEXSCREENER</span>
                </a>

                <a href="https://raydium.io/swap/?inputMint=sol&outputMint=AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s" target="_blank" rel="noopener noreferrer" className="mr-4 relative">
                <Image
                    src={raydium}
                    alt="Raydium Logo"
                    width={40}
                    height={40}
                    className="inline-block p-2"
                  />
                  <span>Raydium</span>
                </a>
              </div>
            </div>
            <div className="mb-6 items-center mx-auto max-w-screen-lg">

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};