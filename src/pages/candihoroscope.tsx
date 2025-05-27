import type { NextPage } from "next";
import Head from "next/head";
import { FAQView } from "../views";
import { ZodiacReadingDrawerWindow } from "@/components/candibar/ZodiacReader/ZodiacReadingDrawerWindow";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCurrentZodiacSignTopN, ZodiacSign } from "@/stores/useCandiZodiacSignsStore";

const candihoroscope: NextPage = () => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const zodiacNameFromUrl = urlParams.get('zodiacSign');
      const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);
        useEffect(() => {
          const currentSigns = getCurrentZodiacSignTopN(12); // Fetch all zodiac signs
          if (currentSigns) {
            setZodiacSigns(currentSigns);
          }
        }, []);

    return (
        <div>
            <Head>
            <title>Candibarnft.com - Free Candi Horoscope Reading</title>
            <meta name="description" content="Get your free Candi Horoscope reading and discover insights about your future with Candibar NFT." />
            <meta name="keywords" content="Candibar, NFT, horoscope, astrology, reading, future, insights" />
            <meta property="og:title" content="Candibarnft.com - Free Candi Horoscope Reading" />
            <meta property="og:description" content="Get your free Candi Horoscope reading and discover insights about your future with Candibar NFT." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://candibarnft.com/horoscope" />
            <meta property="og:image" content="https://candibarnft.com/images/horoscope-banner.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Candibarnft.com - Free Candi Horoscope Reading" />
            <meta name="twitter:description" content="Get your free Candi Horoscope reading and discover insights about your future with Candibar NFT." />
            <meta name="twitter:image" content="https://candibarnft.com/images/horoscope-banner.png" />
            </Head>
            <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                    {zodiacSigns.map((zodiac) => (
                        <div key={zodiac.name} style={{ flex: '0 0 200px', maxWidth: '200px' }}>
                            <ZodiacReadingDrawerWindow 
                                sign={zodiac.name} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default candihoroscope;
