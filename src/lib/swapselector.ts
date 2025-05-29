import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";


export interface SwapKeys {
<<<<<<< HEAD
    escrowPublickey: string| undefined;
    collectionPublicKey: string | undefined;
=======
    escrowPublickey: string | undefined;
    collectionPublicKey: string | undefined;
    zodiacExists: boolean;
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
}

export interface SwapArgs {
    name: string;
}

export const fetchSwapSelector = (swapArgs: SwapArgs): SwapKeys | null => {
<<<<<<< HEAD
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
=======
    if (!swapArgs) return getDefaultSwapKeys();

    switch (swapArgs.name) {
        case 'candi':
            return getDefaultSwapKeys();
        case 'zodiac': {
            const zodiacSign = getCurrentZodiacSign();
            const { escrowPublickey, collectionPublicKey } = zodiacSign;

            return escrowPublickey && collectionPublicKey
                ? { escrowPublickey, collectionPublicKey, zodiacExists: true }
                : getDefaultSwapKeys();
        }
        default:
            return getDefaultSwapKeys();
    }
};

const getDefaultSwapKeys = (): SwapKeys => ({
    escrowPublickey: process.env.NEXT_PUBLIC_ESCROW,
    collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_ID05,
    zodiacExists: false,
});
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
