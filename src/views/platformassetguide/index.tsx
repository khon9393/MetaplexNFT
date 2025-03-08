
import { publicKey } from "@metaplex-foundation/umi";
import { FC, useEffect, useMemo, useState } from "react";
import { getCollection } from "../../stores/useCandibardataStorefromDB";
import SwapCounter from '../../components/candibar/SwapCounter';

export const CPAGView: FC = ({ }) => {
  const [candicollection, setcandicollection] = useState<any[]>([]);

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
        <h3 className="text-3xl font-semibold mb-6">
          Your Guide to Collection Listing, Swapping NFTs & Candibar Tokens
        </h3>

        {/* Candi Collection */}
        <div className="mb-0 text-left p-6">

        <h4 className="text-2xl font-semibold mb-3">🍬 {candicollection[4] && candicollection[4].collectionsubtitles} (Swappable!)</h4>
            {candicollection.length > 0 && (
            <>
              {candicollection[4].images.filter(image => image.iscover === '1').slice(0, 1).map((image, index) => (
              <div key={index} className="mb-2 text-left">
                <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                <li className="flex items-center space-x-2">
                  <img src={image.url} alt={`NFT ${index + 1}`} className="mt-2" style={{ width: '30px' }} />
                <span> {image.name}</span>
                </li>
                </ul>
              </div>
              ))}
              {candicollection[4].images.filter(image => image.iscover !== '1').map((image, index) => (
              <div key={index} className="mb-2 text-left">
                <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                <li className="flex items-center space-x-2">
                  <img src={image.url} alt={`NFT ${index + 1}`} className="mt-2" style={{ width: '30px' }} />
                  <span> {image.name} → {candicollection[4].collectioncandibarvalue} Candibar Tokens</span>
                </li>
                </ul>
              </div>
              ))}
            </>
            )}
        </div>

        <div className="mb-10 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">🐍 {candicollection[0] && candicollection[0].collectionsubtitles} ( **Soon to Follow** )</h4>
          {candicollection.slice(0, 1).map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-2 text-left">
              {collection.images.filter(image => image.iscover === "1").map((image, imageIndex) => (
                <div key={imageIndex} className="mb-2 text-left">
                  <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <img src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: '30px' }} />
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
                      <img src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: '30px' }} />
                      <span> {image.name} → ?? ??</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}

        </div>

        <div className="mb-10 text-left">
          <h4 className="text-2xl font-semibold mb-3">🌟 Special Collection ( **Soon to Follow** )</h4>
          <ul className="text-xl list-disc list-inside pl-6 space-y-2">
            <li>Collect all four Zodiac NFTs of the same sign to unlock a special reward!</li>
            <li>Collect all four Zodiac NFTs of the same sign + the Cover NFT to unlock a massive ?? ??</li>
            {/* <li><strong>50,000 Candibar Tokens</strong>!</li> */}
          </ul>
        </div>

        {/* Zodiac Swaps */}
        <div className="mb-2 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">♈ Zodiac Candi NFT Swap ( **Soon to Follow** )</h4>
          <p className="text-xl mb-0">
            Trade your Zodiac NFTs based on the current month to complete a full set!
          </p>
        </div>
        <SwapCounter />
      </div>
    </div>
  );
};
