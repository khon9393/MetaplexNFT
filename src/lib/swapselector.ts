import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";


export interface SwapKeys {
    escrowPublickey: string| undefined;
    collectionPublicKey: string | undefined;
}

export interface SwapArgs {
    name: string;
}

export const fetchSwapSelector = (swapArgs: SwapArgs): SwapKeys | null => {
    let swapKeys: SwapKeys = {
        escrowPublickey: undefined,
        collectionPublicKey: undefined,
    };

    if (swapArgs && swapArgs.name === 'candi') {
        swapKeys = getDefaultSwapKeys();
    } else if (swapArgs && swapArgs.name === 'zodiac') {
        const zodiacSign = getCurrentZodiacSign();
        swapKeys.escrowPublickey = zodiacSign.escrowPublickey;
        swapKeys.collectionPublicKey = zodiacSign.collectionPublicKey;

        if(swapKeys.escrowPublickey === undefined || swapKeys.collectionPublicKey === undefined) {
            swapKeys = getDefaultSwapKeys();
        }
    } else {
        swapKeys = getDefaultSwapKeys();
    }

    return swapKeys;
};

const getDefaultSwapKeys = (): SwapKeys => {
    return {
        escrowPublickey: process.env.NEXT_PUBLIC_ESCROW,
        collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_ID05,
    };
};