import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";


export interface SwapKeys {
    escrowPublickey: string | undefined;
    collectionPublicKey: string | undefined;
    zodiacExists: boolean;
}

export interface SwapArgs {
    name: string;
}

export const fetchSwapSelector = (swapArgs: SwapArgs): SwapKeys | null => {
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
