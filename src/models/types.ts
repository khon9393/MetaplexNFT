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


export interface Image {
    name: string;
    url: string;
    iscollectioncover?: boolean;
  }
  
  export interface CollectionItemDetails {
    id: number;
    candimachineeaddress: string;
    collectionname: string;
    collectionadress: string;
    collectionurl: string;
    collectionsubtitles?: string;
    collectiondetails?: string;
    collectioncandibarvalue?: number;
    collectionstatus: NFTStatusTypes;
    candibarcost?: number;
    isswappable: boolean;
    zodiacsign?: string;
    zodiacyear?: string;
    zodiacicon?: string;
    images: Image[];
  }
  