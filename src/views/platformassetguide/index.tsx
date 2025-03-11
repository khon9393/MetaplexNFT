
import { publicKey } from "@metaplex-foundation/umi";
import { FC, useEffect, useMemo, useState } from "react";
import { getCollection } from "../../stores/useCandibardataStorefromDB";
import Image from "next/image";
import SwapDetails from "@/components/candibar/swapCounter/SwapDetails";

export const CPAGView: FC = ({ }) => {
  const [candicollection, setcandicollection] = useState<any[]>([]);
  const [zodiaccollection, setzodiaccollection] = useState<any[]>([]);
  const imgsize = '50px';

  const candicollectionsKey = useMemo(() => [
    process.env.NEXT_PUBLIC_COLLECTION_ID01,
    process.env.NEXT_PUBLIC_COLLECTION_ID02,
    process.env.NEXT_PUBLIC_COLLECTION_ID03,
    process.env.NEXT_PUBLIC_COLLECTION_ID04,
    process.env.NEXT_PUBLIC_COLLECTION_ID05,

  ], []);

  useEffect(() => {
    const fetchCollections = async () => {
      const collections = await Promise.all(candicollectionsKey.map(key => getCollection(key)));

      const validCollections = collections.filter(collection => collection && collection.images);
      validCollections.forEach(collectionData => {
        if (collectionData.collectionurl) {
          collectionData.images.unshift({ name: collectionData.collectionname, url: collectionData.collectionurl, iscollectioncover: true });
        }
      });

      setcandicollection(validCollections);
    };

    fetchCollections();
  }, [candicollectionsKey]);


  const CandiZodiacSigns = useMemo(() => ({
    Capricorn: { icon: "♑", dateRange: "December 21-January 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRIC1 },
    Aquarius: { icon: "♒", dateRange: "January 21-February 18", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUIC1 },
    Pisces: { icon: "♓", dateRange: "February 19-March 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_PISCC1 },
    Aries: { icon: "♈", dateRange: "March 21-April 19", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIESC1 },
    Taurus: { icon: "♉", dateRange: "April 20-May 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_TAURC1 },
    Gemini: { icon: "♊", dateRange: "May 21-June 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINIC1 },
    Cancer: { icon: "♋", dateRange: "June 21-July 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCERC1 },
    Leo: { icon: "♌", dateRange: "July 23-August 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEOC1 },
    Virgo: { icon: "♍", dateRange: "August 23-September 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_VIRGOC1 },
    Libra: { icon: "♎", dateRange: "September 23-October 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEBRAC1 },
    Scorpio: { icon: "♏", dateRange: "October 23-November 21", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_SCOC1 },
    Sagittarius: { icon: "♐", dateRange: "November 22-December 21", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_SAGC1 },
  }), []);


  useEffect(() => {
    const fetchCollections = async () => {
      const collections = await Promise.all(candicollectionsKey.map(key => getCollection(key)));
  
      const validCollections = collections.filter(collection => collection && collection.images);
      validCollections.forEach(collectionData => {
        if (collectionData.collectionurl) {
          // Ensure collectionurl is only added once
          if (!collectionData.images.some(image => image.iscollectioncover)) {
            collectionData.images.unshift({ name: collectionData.collectionname, url: collectionData.collectionurl, iscollectioncover: true });
          }
        }
      });
  
      setcandicollection(validCollections);
    };
  
    fetchCollections();
  }, [candicollectionsKey]);



  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="text-center">
        {/* Main Heading */}
        {/* <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-4">
          🚀 Coming Soon
        </h1> */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500">
          Candibar Platform Asset Guide (CPAG)
        </h1>
      </div>

      {/* Introduction */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold mb-6">
          A Guide to Candibar Digital Assets Collection Listing, Swapping NFTs & Candibar Tokens
        </h3>

        {/* Candi Collection */}
        <div className="mb-0 text-left p-6">

          <h4 className="text-2xl font-semibold mb-3">🍬 {candicollection[4] && candicollection[4].collectionsubtitles} (Swappable!)</h4>

           {candicollection.length > 0 && (
            <>
              {candicollection[4].images.map((image, index) => (
                <div key={index} className="mb-2 text-left">
                  <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Image
                        height={100}
                        width={100}
                        src={image.url} alt={`NFT ${index + 1}`} className="mt-2" style={{ width: imgsize }} />
                          {image.iscollectioncover ? (
                          <span>{image.name}</span>
                          ) : (
                          <span>{image.name} → {candicollection[4].collectioncandibarvalue} Candibar Tokens</span>
                          )}
                    </li>
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        
          {/* <div className="mb-0 text-left p-6">
            <h4 className="text-2xl font-semibold mb-3">Zodiac Candibar Candi Confection NFTs</h4>

            {zodiaccollection.length > 0 && (
              <>
                {zodiaccollection.map((collection, collectionIndex) => (
                  <div key={collectionIndex} className="mb-4 text-left border-b pb-4">
                    <h5 className="text-xl font-bold mb-2 flex items-center">
                      <span className="mr-2">{Object.values(CandiZodiacSigns)[collectionIndex]?.icon}</span>
                      <span>{collection.collectionname}</span>
                      <span className="ml-2 text-sm text-gray-500">({Object.values(CandiZodiacSigns)[collectionIndex]?.dateRange})</span>
                    </h5>
                    {collection.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="mb-2 text-left">
                        <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                          <li className="flex items-center space-x-2">
                            <Image
                              height={100}
                              width={100}
                              src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: imgsize }} />
                            {image.iscollectioncover ? (
                              <span>{image.name}</span>
                            ) : (
                              <span>{image.name} → {collection.collectioncandibarvalue} Candibar Tokens</span>
                            )}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div> */}

{/* <div className="mb-0 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">Zodiac Candibar Candi Confection NFTs</h4>

          {zodiaccollection.length > 0 && (
            <>
              {zodiaccollection.map((collection, collectionIndex) => (
                <div key={collectionIndex} className="mb-4 text-left border-b pb-4">
                  <h5 className="text-xl font-bold mb-2 flex items-center">
                    <span className="mr-2">{Object.values(CandiZodiacSigns)[collectionIndex]?.icon}</span>
                    <span>{collection.collectionname}</span>
                    <span className="ml-2 text-sm text-gray-500">({Object.values(CandiZodiacSigns)[collectionIndex]?.dateRange})</span>
                  </h5>
                  {collection.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="mb-2 text-left">
                      <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                        <li className="flex items-center space-x-2">
                          <Image
                            height={100}
                            width={100}
                            src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: imgsize }} />
                          {image.iscollectioncover ? (
                            <span>{image.name}</span>
                          ) : (
                            <span>{image.name} → {collection.collectioncandibarvalue} Candibar Tokens</span>
                          )}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div> */}


        <div className="mb-10 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">🐍 {candicollection[0] && candicollection[0].collectionsubtitles} ( **Soon to Follow** )</h4>
        
          <span className="text-xl flex items-center space-x-4 mb-4 pl-6">
          <Image
            height={100}
            width={100}
            src={'/api/image/CandibarImg/Woodsnake/collection_2025_500-xKfCll1tDurgiRl02yLvmHu1ryvJvs.jpg'} 
            alt={`Snake Collection 2025 Cover`} 
            className="mt-2" 
            style={{ width: imgsize }} 
          />
          <span>Snake Collection 2025 Cover</span>
          </span>

          {candicollection.slice(0, 1).map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-2 text-left">
              {collection.images.filter(image => image.iscover === "1").map((image, imageIndex) => (
                <div key={imageIndex} className="mb-2 text-left">
                  <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Image
                        height={100}
                        width={100}
                        src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: imgsize }} />
                      <span> {image.name}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {candicollection.slice(0, 4).map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-2 text-left">
              {collection.images.filter(image => image.iscover !== "1").map((image, imageIndex) => (
                <div key={imageIndex} className="mb-2 text-left">
                  <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Image
                        height={100}
                        width={100}
                        src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: imgsize }} />
                      <span> {image.name} → ?? ??</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}

        </div>

        {/* <div className="mb-10 text-left">
          <h4 className="text-2xl font-semibold mb-3">🌟 Special Collection ( **Soon to Follow** )</h4>
          <ul className="text-xl list-disc list-inside pl-6 space-y-2">
            <li>Collect all four Zodiac NFTs of the same sign to unlock a special reward!</li>
            <li>Collect all four Zodiac NFTs of the same sign + the Cover NFT to unlock a massive ?? ??</li>
            <li><strong>50,000 Candibar Tokens</strong>!</li>
          </ul>
        </div> */}

        {/* Zodiac Swaps */}
        <div className="mb-2 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">♈ Zodiac Candi NFT Swap ( **Soon to Follow** )</h4>
          <p className="text-xl mb-0">
            Trade your Zodiac NFTs based on the current month to complete a full set!
          </p>
        </div>
        <SwapDetails/>
      </div>
    </div>
  );
};
