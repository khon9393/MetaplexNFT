import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";
import searchAssets from "./das/searchAssets";

import {fetchSwapSelector, SwapArgs} from "./swapselector";

const fetchEscrowAssets = async (SwapArgs?) => {
 
<<<<<<< HEAD
  // const escrowAddress = process.env.NEXT_PUBLIC_ESCROW;
  // const collectionId = process.env.NEXT_PUBLIC_COLLECTION;

=======
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
  const escrowAddress = fetchSwapSelector(SwapArgs)?.escrowPublickey;
  const collectionId = fetchSwapSelector(SwapArgs)?.collectionPublicKey;


  if (!escrowAddress) {
    throw new Error("Escrow address not found");
  }

  if (!collectionId) {
    throw new Error("Collection not found");
  }

  return await searchAssets({
    owner: escrowAddress,
    collection: collectionId,
    burnt: false,
  });
};

export default fetchEscrowAssets;
