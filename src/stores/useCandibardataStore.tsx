
// import Aquarious from "../../public/zodiacSignsImg/Aquarius.png"
import { NFTStatusTypes } from "../models/types";

interface CollectionItem {
    candimachineeaddress: string;
    collectionName: string;
    collectionadress: string;
    collectionurl: string;
    collectionSubtitles?: string;
    collectionDetails?: string;
    collectionCandibarValue?: number;
    collectionStatus: NFTStatusTypes,
    candibarcost?: number;
    isSwappable: boolean;
    zodiacSign?: string;
    zodiacYear?: string;
    zodiacIcon?: string;
    images: {
        name: string;
        url: string;
        iscollectioncover?: boolean;
    }[];
}

function getCollectionItems(): CollectionItem[] {
    return [


                // //Aquarius Collection #1
        // {
        //     collectionName: "Candibar NFT Collection #1",
        //     collectionadress: process.env.NEXT_PUBLIC_COLLECTION_AQUI1,
        //     collectionSubtitles: "Dates: January 21-February 18",
        //     collectionDetails: "Aquarius Dates: January 21-February 18. Aquarius is an air sign, ruled by Uranus, and is known for its innovation, independence, and humanitarianism.",
        //     collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdaHbBDqaWrxgqawF7gqBdBJJPSzro9XJEr532b5guxND",
        //    // collectionurl: "",
        //     collectionCandibarValue: 600,
        //     candibarcost: 600,
        //     isSwappable: false,
        //     collectionStatus: NFTStatusTypes.Available,
        //     images: [
        //         {
        //             name: "Aquarius NFT #1",
        //             url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbwnpVFAgbjiEijb8eYtWgmvgeh5VHiydGsjmjLf9ysbC"
        //         },
        //         {
        //             name: "Aquarius NFT #2",
        //             url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQza1qF9U92bt6gHfF62WpPhdR56toN1CHRfxtzHrsH6n"
        //         },
        //         {
        //             name: "Aquarius NFT #3",
        //             url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZGYR1CDop5ymZ4XLPC3qpqUFJ9esGWLPuHoM2SqC3V9m"

        //         },
        //         {
        //             name: "Aquarius NFT #4",
        //             url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qme4SsnfLQ5iYJgLaCJRtRhcCe7pwhd75zrVNrVTBAkAfB"
        //         },
        //     ],

        //     candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUI1,
        // },
        
        //Snake Collection 2025
        {
            collectionName: "Snake NFT Collection Cover 2025 #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID01,
            collectionSubtitles: "Snake NFT Collection 2025",
            collectionDetails: "The Snake NFT Collection 2025 is a unique digital art collection that celebrates the spirit of the Snake zodiac sign. Each NFT in this collection represents the values and culture of the Snake community. The collection features a variety of styles and themes, all centered around the concept of the Snake. By owning a Snake NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Snake lifestyle.",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacYear: "2025",
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
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacYear: "2025",
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
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacYear: "2025",
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
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacYear: "2025",
            images: [
                { name: "Snake NFT Collection 2025 #4", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSqT7h7Q2XwYXUXzCJruSt9aN4EVGEv2VJEoXWAjXbq1u" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04,
        },
        {
            //Candi Collection 2025
            collectionName: "Candi NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID05,
            collectionSubtitles: "Candi NFT Collection",
            collectionDetails: "The Candi NFT Collection is a unique digital art collection that celebrates the spirit of the Candi community. Each NFT in this collection represents the values and culture of the Candi community. The collection features a variety of styles and themes, all centered around the concept of Candi. By owning a Candi NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Candi lifestyle.",
            collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionCandibarValue: 200,
            isSwappable: true,
            collectionStatus: NFTStatusTypes.Available,
            images: [

                { name: "Candi NFT 2025 #1", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYJ4d44GLtHCvMJQsuTAqznvoDEZZyKmjhgwuEhjWYdpo" },
                { name: "Candi NFT 2025 #2", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdyA45Tw3nfZnUUjgawh9QdpscNgY8sg1nMpe8JME1UmQ" },
                { name: "Candi NFT 2025 #3", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbjeEgD5aGMgFFpX3MWsvxDxzhGQDT9KCLroB5htgE7Gg" },
                { name: "Candi NFT 2025 #4", url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmNknJSTgZTuxTkn9RP8HtPxQjeyzo69Eq476juYyym4Tu" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05,
        },

        // **** Zodiac Candi Collection 2025 ******//

        //Capricorn Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_CAPRIC1,
            collectionSubtitles: "Dates: December 21-January 20",
            collectionDetails: "Capricorn Dates: December 21-January 20. Capricorn is an earth sign, ruled by Saturn, and is known for its practicality, discipline, and ambition.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Capricorn",
            zodiacIcon: "/zodiacSignsImg/Capricorn.png",

            images: [
                {
                    name: "Capricorn NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmesuHrnNifjgJGtH86i2VNW1v5xMF9uYYvu42aSsMopXy"
                },
                {
                    name: "Capricorn NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmUfdUcvBfirWtor1quFu2RbNeyczFTmCLeUBECjjzLhKf"
                },
                {
                    name: "Capricorn NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVgKPVAsMUhvD4NS5d1BeyubsGpU4CGbNP7LHzfyNpEva"

                },
                {
                    name: "Capricorn NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVRW63taSAxfqX4wwLTTS7JzSgXBDa7VM1zBFNiogRCRf"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRIC1,
        },

        //Aquarius Collection #1
        {
            collectionName: "Candibar NFT Collection #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_AQUIC1,
            collectionSubtitles: "Dates: January 21-February 18",
            collectionDetails: "Aquarius Dates: January 21-February 18. Aquarius is an air sign, ruled by Uranus, and is known for its innovation, independence, and humanitarianism.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Aquarius",
            zodiacIcon: "/zodiacSignsImg/Aquarius.png",
            images: [
                {
                    name: "Aquarius NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmTQ4DcDBWruRdW3532ZqNEPLEavjTzLthvAPhovXAMc4k"
                },
                {
                    name: "Aquarius NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZNV1RqUaNjFHDRE8jfC6qzQHZdcBusiKsnqRWv8dwcW4"
                },
                {
                    name: "Aquarius NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYoWSK9BUGgaxYC1bg1j3F7YwVnQSPCHh1viM9mUGujbN"

                },
                {
                    name: "Aquarius NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdXPG5vsc6pSfXLmWJ1aLhgcUGv6qCBzLhZ89YTw1ECzb"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUIC1,
        },

        //Pisces Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_PISCC1,
            collectionSubtitles: "Dates: February 19-March 20",
            collectionDetails: "Pisces Dates : February 19-March 20. Pisces is a water sign, ruled by Neptune, and is known for its empathy, intuition, and artistic nature.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Pisces",
            zodiacIcon: "/zodiacSignsImg/Pisces.png",
            images: [
                {
                    name: "Pisces NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmfKyT5F2yUoXdiE1v2WbnEzcdajmzprTDCLBd69TgFowJ"
                },
                {
                    name: "Pisces NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQCuHuxTfT2z9VwXJgJc6Mtpbx5MyRpkTT4tHkkTZxKg1"
                },
                {
                    name: "Pisces NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSvZkJhxUvByGhFrQjPLLTtVneZ5fdEkEwDrNCQDc7MVP"

                },
                {
                    name: "Pisces NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZCEXHc4weVNwntpdEkG9uwygxFhgET2epaqFPNUE7Tuu"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_PISCC1,
        },

        //Aries Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ARIESC1,
            collectionSubtitles: "Dates: March 21-April 19",
            collectionDetails: "Aries Dates: March 21-April 19. Aries is a fire sign, ruled by Mars, and is known for its courage, determination, and enthusiasm.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Aries",
            zodiacIcon: "/zodiacSignsImg/Aries.png",
            images: [
                {
                    name: "Aries NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZricikATkbAQFH1g4MiVM1PiKRx5SbSAjvQy3Yq63gFe"
                },
                {
                    name: "Aries NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmT8kNUoUjjCfc5h42LHg9ae1dSSTKjQcwtwkJADfDhFfr"
                },
                {
                    name: "Aries NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmXFk2UkFz14orqbdA4fFgobCy2GaYVBeGiEGH5FZQkJQv"

                },
                {
                    name: "Aries NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmP9YBuoRRTPCRLhaEcqkQMmyAr7sJxxcNwDAJWERusMVw"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIESC1,
        },

        //Taurus Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_TAURC1,
            collectionSubtitles: "Dates: April 20-May 20",
            collectionDetails: "Taurus Dates: April 20-May 20. Taurus is an earth sign, ruled by Venus, and is known for its practicality, reliability, and sensuality.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Taurus",
            zodiacIcon: "/zodiacSignsImg/Taurus.png",
            images: [
                {
                    name: "Taurus NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYBWj3wt6sYsQ654S71ZfSpgrrKKeUGSnkZWGKU2DqrDz"
                },
                {
                    name: "Taurus NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbZUdjTRXPcbLcp24bUKdFowS1R5EJU2NrCYBadUn3WF7"
                },
                {
                    name: "Taurus NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmT5iYbEF5KiiULR4DygMuftUnAq6uVpJq1u5S2Tn41Ugb"

                },
                {
                    name: "Taurus NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYvS4tK99RoAiVqvWgs1kTs2fUBZ1VA8rGyHWyy2L5h3k"

                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_TAURC1,
        },


        //Gemini Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_GEMINIC1,
            collectionSubtitles: "Dates: May 21-June 20",
            collectionDetails: "Gemini Dates: May 21-June 20. Gemini is an air sign, ruled by Mercury, and is known for its adaptability, curiosity, and sociability.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Gemini",
            zodiacIcon: "/zodiacSignsImg/Gemini.png",
            images: [
                {
                    name: "Gemini NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmTyp3BMZ4WwD2ddvjhp3QLRKeLxf9U21qUTSZ4pGaBJhL"
                },
                {
                    name: "Gemini NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmXvqZ4VV1tnGEh22gaVxw95hsvQQMtjeb2rsj9jYfb4eB"
                },
                {
                    name: "Gemini NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmcNFNvTMWkdeV34NESvhRDa5ifapo17QcE6JdVf9UZbVC"

                },
                {
                    name: "Gemini NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbwVw8VzWraGvWttWR9JKwPZji6Mz1ww97LSjj7KYdmUy"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINIC1,
        },

        //Cancer Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_CANCERC1,
            collectionSubtitles: "Dates: June 21-July 22",
            collectionDetails: "Cancer Dates: June 21-July 22. Cancer is a water sign, ruled by the Moon, and is known for its emotional depth, intuition, and nurturing nature.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Cancer",
            zodiacIcon: "/zodiacSignsImg/Cancer.png",
            images: [
                {
                    name: "Cancer NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmXxwAN5jamYdriVmN9EwmmZhfUxPHTU3t2RqGRKRsK66S"
                },
                {
                    name: "Cancer NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVYy5S8uPec9gNZe5LRG4LfawAf3QaCVKG5agS4i3B3CM"
                },
                {
                    name: "Cancer NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdYUShV8RViJxix5EW96KyVpWVrYDyBkHWaBDwndtr9Sk"

                },
                {
                    name: "Cancer NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmWM7Vj7mcvRAMj9vDRvttd8Q8jX9GhQatE8WPh5xeP9Zi"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCERC1,
        },

        //Leo Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_LEOC1,
            collectionSubtitles: "Dates: July 23-August 22",
            collectionDetails: "Leo Dates: July 23-August 22. Leo is a fire sign, ruled by the Sun, and is known for its confidence, creativity, and generosity.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Leo",
            zodiacIcon: "/zodiacSignsImg/Leo.png",
            images: [
                {
                    name: "Leo NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmRWDaHZgcmqQRJ3VY5RS1aWYuPKiWADYuv37o8kybD1nM"
                },
                {
                    name: "Leo NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPzh2epidcjk25SLQmUwfw8gPi8KvsusGpGk8h3MiKz8j"
                },
                {
                    name: "Leo NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmRmGN57npaJyRF93AMwMFPSurszm5PnnWHUcxn3thdSFg"

                },
                {
                    name: "Leo NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYfsEaqKubwK8ZXsdsqkvpAV6PTbRpNP1auHxWDUnVc14"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEOC1,
        },

        //Virgo Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_VIRGOC1,
            collectionSubtitles: "Dates: August 23-September 22",
            collectionDetails: "Virgo Dates: August 23-September 22. Virgo is an earth sign, ruled by Mercury, and is known for its attention to detail, practicality, and analytical nature.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Virgo",
            zodiacIcon: "/zodiacSignsImg/Virgo.png",
            images: [
                {
                    name: "Virgo NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYZ92J6uLAK8u5XsYFknhRQpgLefBw7qQn5u8qu5VPy7s"
                },
                {
                    name: "Virgo NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPTZJXdPVjYauP7S1zxfDfbnsd4NRWfXtTqbLAZycqZ86"
                },
                {
                    name: "Virgo NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbdFZYzNdWfqEbfonovT7CSmro8LYtoAMd7cGCo1vLCwc"
                },
                {
                    name: "Virgo NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmQGnMaPLL3eZ6GvJn3QCAodJVftHRWonxz9ALupn2LrfF"
                },
                {
                    name: "Virgo NFT #5",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmTRR6dfrNSCt7Ab4avy2jFQ46mRkxFdYxdtg5AY2niMz6"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_VIRGOC1,
        },

        //Libra Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_LEBRAC1,
            collectionSubtitles: "Dates: September 23-October 22",
            collectionDetails: "Libra Dates: September 23-October 22. Libra is an air sign, ruled by Venus, and is known for its diplomacy, charm, and sense of justice.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Libra",
            zodiacIcon: "/zodiacSignsImg/Libra.png",
            images: [
                {
                    name: "Libra NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmW2siCSqXWUYTmjcMkERoeiNCkAQzHtt52EfeEnmx74KU"
                },
                {
                    name: "Libra NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbVGZHDV4q51H9UErCberYYuF46XTGuEyBa2tLUdcUDnx"
                },
                {
                    name: "Libra NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmUX2Rh2ZCFXAfLi95ZQK2r112ZSdijqboHAu5VTDTedgZ"

                },
                {
                    name: "Libra NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSRK4Zm7Qmqytjb7y986RpfRtfobNDuXCxv2BcWhBedat"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEBRAC1,
        },

        //Scorpio Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_SCOC1,
            collectionSubtitles: "Dates: October 23-November 21",
            collectionDetails: "Scorpio Dates: October 23-November 21. Scorpio is a water sign, ruled by Pluto, and is known for its intensity, passion, and resourcefulness.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Scorpio",
            zodiacIcon: "/zodiacSignsImg/Scorpio.png",
            images: [
                {
                    name: "Scorpio NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdX3sV3JbxyojDnyh2VcazzsMAC7CcmZhXm25q6WKjRQj"
                },
                {
                    name: "Scorpio NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmaAuM1DUjQGoX5Z4ASpyrXXw9tkZMBaVckW657H6QzV1v"
                },
                {
                    name: "Scorpio NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPydBUuFk1zcJ9urW2rSUeWnjLd9S7K1DvRMQRntgRC11"

                },
                {
                    name: "Scorpio NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmZ7MSrf5nduaMXdPd26K1VSHyuYsefLwhMN3sZCSkrsEK"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_SCOC1,
        },

        //Sagittarius Collection #1
        {
            collectionName: "Candibar NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_SAGC1,
            collectionSubtitles: "Dates: November 22-December 21",
            collectionDetails: "Sagittarius Dates: November 22-December 21. Sagittarius is a fire sign, ruled by Jupiter, and is known for its adventurous spirit, optimism, and love of freedom.",
            //collectionurl: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Sagittarius",
            zodiacIcon: "/zodiacSignsImg/Sagittarius.png",
            images: [
                {
                    name: "Sagittarius NFT #1",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYvCrR14CN5bpgAAcFP3YJG3gUCtqWiCrHTib534HtmfB"
                },
                {
                    name: "Sagittarius NFT #2",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/Qmd3xoi8e7MnS9Po32P3A5ofA9XBnhkNYjUsxWLMdUMNyP"
                },
                {
                    name: "Sagittarius NFT #3",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmRRgQcKn8kCy8Ny7DRfvZNcQ2N894QQNsRzQENHGGkmLa"

                },
                {
                    name: "Sagittarius NFT #4",
                    url: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmasDabndw8vw4wVafQPmgE3W7gu9eighsxrB35kz8NAHF"
                },
            ],

            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_SAGC1,
        },

    ];
};

export async function getCollection(collectionadress: string): Promise<CollectionItem> {
    const items = getCollectionItems();
    const collection = items.find(item => item.collectionadress === collectionadress);
    return collection || items[0];
}
