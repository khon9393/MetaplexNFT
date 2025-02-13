

interface CollectionItem {
    candimachineeaddress: string;
    collectionName: string;
    collectionadress: string;
    collectionurl: string;
    collectionSubtitles?: string;
    collectionDetails?: string;
    collectionCandibarValue?: number;
    images: {
        name: string;
        url: string;
        iscollectioncover?: boolean;
    }[];
}

function getCollectionItems(): CollectionItem[] {
    return [
        //Snake Collection 2025
        {
            collectionName: "Snake NFT Collection Cover 2025 #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID01,
            collectionSubtitles: "Snake NFT Collection 2025",
            collectionDetails: "The Snake NFT Collection 2025 is a unique digital art collection that celebrates the spirit of the Snake zodiac sign. Each NFT in this collection represents the values and culture of the Snake community. The collection features a variety of styles and themes, all centered around the concept of the Snake. By owning a Snake NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Snake lifestyle.",
            collectionurl: "",
            collectionCandibarValue: 500,
            images: [
                { name: "Snake NFT Collection 2025 #1", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmcapCnprSUZGZf37nzb6JGJUDDPcyS1znAoFruVKW4wt6" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01,
        },
        {
            collectionName: "Snake NFT Collection Cover 2025 #2",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID02,
            collectionSubtitles: "Snake NFT Collection 2025",
            collectionDetails: "The Snake NFT Collection 2025 is a unique digital art collection that celebrates the spirit of the Snake zodiac sign. Each NFT in this collection represents the values and culture of the Snake community. The collection features a variety of styles and themes, all centered around the concept of the Snake. By owning a Snake NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Snake lifestyle.",
            collectionurl: "",
            collectionCandibarValue: 950,
            images: [
                { name: "Snake NFT Collection 2025 #2", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmTFLHTphBCnuhpjW6grPbdCYNtSVcoQXAXobexgwKnKP6" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02,
        },
        {
            collectionName: "Snake NFT Collection Cover 2025 #3",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID03,
            collectionSubtitles: "Snake NFT Collection 2025",
            collectionDetails: "The Snake NFT Collection 2025 is a unique digital art collection that celebrates the spirit of the Snake zodiac sign. Each NFT in this collection represents the values and culture of the Snake community. The collection features a variety of styles and themes, all centered around the concept of the Snake. By owning a Snake NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Snake lifestyle.",
            collectionurl: "",
            collectionCandibarValue: 1500,
            images: [
                { name: "Snake NFT Collection 2025 #3", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVEvqAAJpy1db4C9dLdiTXVyvTXvHUJyZyF8SGw4cRr11" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03,
        },
        {
            collectionName: "Snake NFT Collection Cover 2025 #4",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID04,
            collectionSubtitles: "Snake NFT Collection 2025",
            collectionDetails: "The Snake NFT Collection 2025 is a unique digital art collection that celebrates the spirit of the Snake zodiac sign. Each NFT in this collection represents the values and culture of the Snake community. The collection features a variety of styles and themes, all centered around the concept of the Snake. By owning a Snake NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Snake lifestyle.",
            collectionurl: "",
            collectionCandibarValue: 2500,
            images: [
                { name: "Snake NFT Collection 2025 #4", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSqT7h7Q2XwYXUXzCJruSt9aN4EVGEv2VJEoXWAjXbq1u" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04,
        },
        {
            //Candi Collection 2025
            collectionName: "Candi NFT Collection Cover 2025 #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID05,
            collectionSubtitles: "Candi NFT Collection 2025",
            collectionDetails: "The Candi NFT Collection 2025 is a unique digital art collection that celebrates the spirit of the Candi community. Each NFT in this collection represents the values and culture of the Candi community. The collection features a variety of styles and themes, all centered around the concept of Candi. By owning a Candi NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Candi lifestyle.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionCandibarValue: 500,
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
            collectionSubtitles: "Dates: December 21-January 20",
            collectionDetails: "Capricorn Dates: December 21-January 20. Capricorn is an earth sign, ruled by Saturn, and is known for its practicality, discipline, and ambition.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQEU928aauvCT8TUxz9Wor7hKqMmDxXbnxWYQmKyNGqRV",
            collectionCandibarValue: 500,
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

        //Aquarius Collection #1
        {
            collectionName: "Aquarius NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_AQUI1,
            collectionSubtitles: "Dates: January 21-February 18",
            collectionDetails: "Aquarius Dates: January 21-February 18. Aquarius is an air sign, ruled by Uranus, and is known for its innovation, independence, and humanitarianism.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdaHbBDqaWrxgqawF7gqBdBJJPSzro9XJEr532b5guxND",
            collectionCandibarValue: 500,
            images: [
                {
                    name: "Aquarius NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbwnpVFAgbjiEijb8eYtWgmvgeh5VHiydGsjmjLf9ysbC"
                },
                {
                    name: "Aquarius NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQza1qF9U92bt6gHfF62WpPhdR56toN1CHRfxtzHrsH6n"
                },
                {
                    name: "Aquarius NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZGYR1CDop5ymZ4XLPC3qpqUFJ9esGWLPuHoM2SqC3V9m"

                },
                {
                    name: "Aquarius NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qme4SsnfLQ5iYJgLaCJRtRhcCe7pwhd75zrVNrVTBAkAfB"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUI1,
        },

        //Aries Collection #1
        {
            collectionName: "Aries NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ARIES1,
            collectionSubtitles: "Dates: March 21-April 19",
            collectionDetails: "Aries Dates: March 21-April 19. Aries is a fire sign, ruled by Mars, and is known for its courage, determination, and enthusiasm.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSpAH1JCzK1pxepjvjkKmgiSHee4j236Ddp5XpuArzxXw",
            collectionCandibarValue: 500,
            images: [
                {
                    name: "Aries NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQUCbGt8QEzPNzqHgr9Z5BCB2eqMdNVjuCuKMQiZsn3N3"
                },
                {
                    name: "Aries NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmekX4DMp4tayTifdWUkQYQoq2dSPekToFgEhG2Wsc9VUH"
                },
                {
                    name: "Aries NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbLo5nSd8QoLLmYMqBkpUJaoK3zQX4K7i6QqfYYF7eBdm"

                },
                {
                    name: "Aries NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYLsKdsKZu2B2WPZrrfbZJ9pzD89ch6wTm7zmbAW7z8mi"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIES1,
        },

        //Cancer Collection #1
        {
            collectionName: "Cancer NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_CANCER1,
            collectionSubtitles: "Dates: June 21-July 22",
            collectionDetails: "Cancer Dates: June 21-July 22. Cancer is a water sign, ruled by the Moon, and is known for its emotional depth, intuition, and nurturing nature.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSqZXXMatJKLuUuD4uFtE3XLCCco2U94GHL4rMnggXpjt",
            collectionCandibarValue: 500,
            images: [
                {
                    name: "Cancer NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdDqkJPQgFmUkHbLnLQ9ZfCccK3ehhShcnSwQ2352374H"
                },
                {
                    name: "Cancer NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmcMQq2hzVyjB34Jskfzhh94vaVocoT7CpTuPdUx7JrCvk"
                },
                {
                    name: "Cancer NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmavkDWf1FpgGzGhNRmdG42qsEy8zNspi2F235Wg5djvmg"

                },
                {
                    name: "Cancer NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmRboixRRapyr6j48SLiD11oxVVqBGFEeZJVFex4nHUVe1"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCER1,
        },

        //Gemini Collection #1
        {
            collectionName: "Gemini NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_GEMINI1,
            collectionSubtitles: "Dates: May 21-June 20",
            collectionDetails: "Gemini Dates: May 21-June 20. Gemini is an air sign, ruled by Mercury, and is known for its adaptability, curiosity, and sociability.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQy5rcR842aGwet9RHKGfEsxS9RXHVKS1N83tw1kKypom",
            collectionCandibarValue: 500,
            images: [
                {
                    name: "Gemini NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVtr4z1XPGPWVHRYyGuzjddXqXzWTSh3Xixh78AyAPcac"
                },
                {
                    name: "Gemini NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qmd6X8eL2iWG7m1nSdyzGS8w4usVaBRpxZwLWf5QLzo7Ax"
                },
                {
                    name: "Gemini NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPHRMD8oVfz1TGkdgZM7XpNxLZ12uKnntwHnFKRAKRPYS"

                },
                {
                    name: "Gemini NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPp2zXT7bk81ZMdZSSppefZ31v4NZDpdRvgkBfCK3X92w"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINI1,
        },

                //Leo Collection #1
                {
                    collectionName: "Leo NFT Collection Cover #1",
                    collectionadress: process.env.NEXT_PUBLIC_COLLECTION_LEO1,
                    collectionSubtitles: "Dates: July 23-August 22",
                    collectionDetails: "Leo Dates: July 23-August 22. Leo is a fire sign, ruled by the Sun, and is known for its confidence, creativity, and generosity.",
                    collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZHRvAWu1jM12cFLgqf97x3B33ahEZ7cwewhHkJQeQiWL",
                    collectionCandibarValue: 500,
                    images: [
                        {
                            name: "Leo NFT #1",
                            url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qmd6wYoKgAPwhRFFppZVPS9FGJGyQFfFCbhAf5y7tohh8H"
                        },
                        {
                            name: "Leo NFT #2",
                            url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbsB55mZfgnfWQ3N8jv2dumCgW6B5gc65Dfu6Suavxg2E"
                        },
                        {
                            name: "Leo NFT #3",
                            url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYqiH6Crr7SavHmgaXYH8LsVZ6hZbvRunLZgxDQY1jik2"
        
                        },
                        {
                            name: "Leo NFT #4",
                            url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qme3qXCxLd1wcUAdN68rMhJ63R3ifxGJVYcpV5Q5Gq8knS"
                        },
                    ],
        
                    candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEO1,
                },


    ];
};

export async function getCollection(collectionadress: string): Promise<CollectionItem> {
    const items = getCollectionItems();
    const collection = items.find(item => item.collectionadress === collectionadress);
    return collection || items[0];
}
