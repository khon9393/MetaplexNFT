

interface CollectionItem {
    candimachineeaddress: string;
    collectionName: string;
    collectionadress: string;
    collectionurl: string;
    collectionDetails?: string;
    images: { 
        name: string; 
        url: string; 
        iscollectioncover?: boolean 
    }[];
}

function getCollectionItems(): CollectionItem[] {
    return [
        //Snake Collection 2025
        {
            collectionName: "Snake NFT Collection Cover 2025 #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID01,
            collectionurl: "",
            images: [
            { name: "Snake NFT Collection 2025 #1", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmcapCnprSUZGZf37nzb6JGJUDDPcyS1znAoFruVKW4wt6" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01,
        },
        {
            collectionName: "Snake NFT Collection Cover 2025 #2",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID02,
            collectionurl: "",
            images: [
            { name: "Snake NFT Collection 2025 #2", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmTFLHTphBCnuhpjW6grPbdCYNtSVcoQXAXobexgwKnKP6" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02,
        },
        {
            collectionName: "Snake NFT Collection Cover 2025 #3",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID03,
            collectionurl: "",
            images: [
            { name: "Snake NFT Collection 2025 #3", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVEvqAAJpy1db4C9dLdiTXVyvTXvHUJyZyF8SGw4cRr11" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03,
        },
        {
            collectionName: "Snake NFT Collection Cover 2025 #4",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID04,
            collectionurl: "",
            images: [
            { name: "Snake NFT Collection 2025 #4", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSqT7h7Q2XwYXUXzCJruSt9aN4EVGEv2VJEoXWAjXbq1u" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04,
        },
        {
            //Candi Collection 2025
            collectionName: "Candi NFT Collection Cover 2025 #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID05,
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            images: [

            { name: "Candi NFT 2025 #1", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYJ4d44GLtHCvMJQsuTAqznvoDEZZyKmjhgwuEhjWYdpo" },
            { name: "Candi NFT 2025 #2", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdyA45Tw3nfZnUUjgawh9QdpscNgY8sg1nMpe8JME1UmQ" },
            { name: "Candi NFT 2025 #3", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbjeEgD5aGMgFFpX3MWsvxDxzhGQDT9KCLroB5htgE7Gg" },
            { name: "Candi NFT 2025 #4", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmNknJSTgZTuxTkn9RP8HtPxQjeyzo69Eq476juYyym4Tu" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05,
        },

        //Capricorn Collection #1
        {
            collectionName: "Capricorn NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_CAPRI1,
            collectionDetails: "Capricorn Dates: December 21-January 20. Capricorn is an earth sign, ruled by Saturn, and is known for its practicality, discipline, and ambition.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQEU928aauvCT8TUxz9Wor7hKqMmDxXbnxWYQmKyNGqRV",
            images: [
            { 
                name: "Capricorn NFT #1", 
                url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmaZqFZMhkrSfj3it929MFGD9N9PKJqasYou3MP9LErDDv" 
            },
            { 
                name: "Capricorn NFT #2", 
                url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmP4vh2UPKtCvNa29kBm57saaCvzNiGuS7HfEHiQpKkN94" 
            },
            { 
                name: "Capricorn NFT #3", 
                url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQtq3pQgdL59rPxFRswWMRwX3vMmM4P3CkpP97thiCojZ" 
            },
            { 
                name: "Capricorn NFT #4", 
                url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qmf3Q5bGr6U8rPFee8LZbmoqFCQLSWpNPgtieTLyQiC98H" 
            },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRI1,
        },
        ];
};

export async function getCollection(collectionadress: string): Promise<CollectionItem> {
    const items = getCollectionItems();
    const collection = items.find(item => item.collectionadress === collectionadress);
    return collection || items[0];
}
