
import { publicKey } from "@metaplex-foundation/umi";
import { FC, useEffect, useMemo, useState } from "react";
import { getCollection } from "../../stores/useCandibardataStorefromDB";

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
          Your Ultimate Guide to Swapping NFTs & Candibar Tokens
        </h3>

        {/* Candi Collection */}
        <div className="mb-0 text-left p-6">

          <h4 className="text-2xl font-semibold mb-3">🍬 {candicollection[4].collectionsubtitles} (Swappable!)</h4>
          {candicollection.length > 0 && candicollection[4].images.map((image, index) => (
            <div key={index} className="mb-2 text-left">
              <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                <li className="flex items-center space-x-2">
                  <img src={image.url} alt={`NFT ${index + 1}`} className="mt-2" style={{ width: '30px' }} />

                  <span> {image.name} → {candicollection[4].collectioncandibarvalue} Candibar Tokens</span>
                </li>
              </ul>
            </div>
          ))}

        </div>
        <div className="mb-10 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">🐍 {candicollection[0].collectionsubtitles} ( **Soon to Follow** )</h4>
          {candicollection.slice(0, 4).map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-2 text-left">
              {collection.images.map((image, imageIndex) => (
                <div key={imageIndex} className="mb-2 text-left">
                  <ul className="text-xl list-disc list-inside pl-6 space-y-2">
                    <li className="flex items-center space-x-2">
                      <img src={image.url} alt={`NFT ${imageIndex + 1}`} className="mt-2" style={{ width: '30px' }} />
                      <span> {image.name} → ?? ??</span>
                      {/* <span> {image.name} → {collection.collectioncandibarvalue} Candibar Tokens</span> */}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Snake Collection */}
        {/* <div className="mb-10 text-left">
          <h4 className="text-2xl font-semibold mb-3">🐍 Snake Collection 2025</h4>
          <ul className="text-xl list-disc list-inside pl-6 space-y-2">
            <li>NFT #1 → 5,000 Candibar Tokens</li>
            <li>NFT #2 → 10,000 Candibar Tokens</li>
            <li>NFT #3 → 15,000 Candibar Tokens</li>
            <li>NFT #4 → 20,000 Candibar Tokens</li>
          </ul>
        </div> */}

        {/* Special Collection */}
        <div className="mb-10 text-left">
          <h4 className="text-2xl font-semibold mb-3">🌟 Special Collection ( **Soon to Follow** )</h4>
          <p className="text-xl">
            Collect all four Zodiac NFTs of the same sign + the Cover NFT to unlock a massive{" "}
            ?? ??
            {/* <strong>50,000 Candibar Tokens</strong>! */}
          </p>
        </div>

        {/* Zodiac Swaps */}
        <div className="mb-10 text-left p-6">
          <h4 className="text-2xl font-semibold mb-3">♈ Zodiac Candi NFT Swap ( **Soon to Follow** )</h4>
          <p className="text-xl mb-3">
            Trade your Zodiac NFTs based on the current month to complete a full set!
          </p>
          <ul className="text-xl list-disc list-inside pl-6 space-y-2">
            <li>♑ Capricorn: Dec 21 - Jan 20</li>
            <li>♒ Aquarius: Jan 21 - Feb 19</li>
            <li>♓ Pisces: Feb 20 - Mar 20</li>
            <li>♈ Aries: Mar 21 - Apr 19</li>
            <li>♉ Taurus: Apr 20 - May 20</li>
            <li>♊ Gemini: May 21 - Jun 20</li>
            <li>♋ Cancer: Jun 21 - Jul 22</li>
            <li>♌ Leo: Jul 23 - Aug 22</li>
            <li>♍ Virgo: Aug 23 - Sep 22</li>
            <li>♎ Libra: Sep 23 - Oct 22</li>
            <li>♏ Scorpio: Oct 23 - Nov 21</li>
            <li>♐ Sagittarius: Nov 22 - Dec 21</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
