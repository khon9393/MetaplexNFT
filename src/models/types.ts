export type EndpointTypes = 'mainnet' | 'devnet' | 'localnet'
//export type NFTStatusTypes = 'SOLD OUT' | 'COMMING SOON' | 'MINT NOW' | 'MINT RANDOM'

export const NFTStatusTypes = {
    ComingSoon: 'ARRIVING SOON',
    Available: 'AVAILABLE',
    SoldOut: 'SOLD OUT',
    GetitNow:  'Get it Now!',
    MoreDetails: 'More Details...'
} as const;

export type NFTStatusTypes = typeof NFTStatusTypes[keyof typeof NFTStatusTypes];