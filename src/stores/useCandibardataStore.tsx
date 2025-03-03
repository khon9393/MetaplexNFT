
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
                { name: "Snake NFT Collection 2025 #1", url: "/api/image/CandibarImg/Woodsnake/snake0_2025_500-bJMtUmup4TT8xdikHCLhEcf2a4QiBj.jpg" },
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
                { name: "Snake NFT Collection 2025 #2", url: "/api/image/CandibarImg/Woodsnake/snake1_2025_500-MGjeQCWhDX4auQ7ioZ6a4rN6x6QaMU.jpg" },
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
                { name: "Snake NFT Collection 2025 #3", url: "/api/image/CandibarImg/Woodsnake/snake2_2025_500-cuGv4oWV1r1L9O1BKd5sU6lDOu8SDJ.jpg" },
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
                { name: "Snake NFT Collection 2025 #4", url: "/api/image/CandibarImg/Woodsnake/snake3_2025_500-KgeF1pu8XxUEtF4PKIk2MCwl4jyPRw.jpg" },
            ],
            candimachineeaddress: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04,
        },
        {
            //Candi Collection 2025
            collectionName: "Candi NFT Collection Cover #1",
            collectionadress: process.env.NEXT_PUBLIC_COLLECTION_ID05,
            collectionSubtitles: "Candi NFT Collection",
            collectionDetails: "The Candi NFT Collection is a unique digital art collection that celebrates the spirit of the Candi community. Each NFT in this collection represents the values and culture of the Candi community. The collection features a variety of styles and themes, all centered around the concept of Candi. By owning a Candi NFT, you become part of a vibrant community of collectors and enthusiasts who share a passion for digital art and the Candi lifestyle.",
            collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionCandibarValue: 200,
            isSwappable: true,
            collectionStatus: NFTStatusTypes.Available,
            images: [

                { name: "Candi NFT 2025 #1", url: "/api/image/CandibarImg/Candi/candi_00_500-2WxvpIIqCmHZBtBjBZTNYPzf8RRrCP.jpg" },
                { name: "Candi NFT 2025 #2", url: "/api/image/CandibarImg/Candi/candi_01_500-y4ReaS9fjPQCDGtPEK2ELI5oJ5LTPy.jpg" },
                { name: "Candi NFT 2025 #3", url: "/api/image/CandibarImg/Candi/candi_02_500-BcGaCj5UpkRskrh4gsbp7Ihcx1WgJ1.jpg" },
                { name: "Candi NFT 2025 #4", url: "/api/image/CandibarImg/Candi/candi_03_500-WTiNFp0A2zWdz3mx5eXCAMa0YNwIAE.jpg" },
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Capricorn",
            zodiacIcon: "/zodiacSignsImg/Capricorn.png",

            images: [
                {
                    name: "Capricorn NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Capricorn/CapricornC1-EHWUsHNP45fc5uJUaLYeDTQ8C1sCXc.jpg"
                },
                {
                    name: "Capricorn NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Capricorn/CapricornC2-Ij1KNY0k58CfSqJHm4X7ItOJn35hwu.jpg"
                },
                {
                    name: "Capricorn NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Capricorn/CapricornC3-n9Gw8tippbHY7IBiSiV0HzWLHoiFeY.jpg"

                },
                {
                    name: "Capricorn NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Capricorn/CapricornC4-YUrbJQD94CVZAZyrHISoL2sIn51Rts.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Aquarius",
            zodiacIcon: "/zodiacSignsImg/Aquarius.png",
            images: [
                {
                    name: "Aquarius NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Aquarius/AquariusC1-K2fHJ70RX6SXU4nRKHBEdqnutdeb8I.jpg"
                },
                {
                    name: "Aquarius NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Aquarius/AquariusC2-wU1QlxiEDbQCHgD6Pzj0vmqabPIdLA.jpg"
                },
                {
                    name: "Aquarius NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Aquarius/AquariusC3-EZzHH9yhPOIXKNW9mSgWMIygjAOLp2.jpg"

                },
                {
                    name: "Aquarius NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Aquarius/AquariusC4-TzZ0ZGRGDlGqnQbMCPF58xyn8WLvUF.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Pisces",
            zodiacIcon: "/zodiacSignsImg/Pisces.png",
            images: [
                {
                    name: "Pisces NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Pisces/PiscesC1-3oSkfYloXHbN0Qqt49ltWe1zzFF6zW.jpg"
                },
                {
                    name: "Pisces NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Pisces/PiscesC2-cFZNTHQew6TOePQO4kSijnoLzuOmxu.jpg"
                },
                {
                    name: "Pisces NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Pisces/PiscesC3-rv5SAuDnMjcM0CvYu4d6NGnu7KDm1I.jpg"

                },
                {
                    name: "Pisces NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Pisces/PiscesC4-5QRma2mpOnXgDkOBANmZNg5vZHrx5n.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Aries",
            zodiacIcon: "/zodiacSignsImg/Aries.png",
            images: [
                {
                    name: "Aries NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Aries/AriesC1-HIAtbgnp56MKdtr79CBmgb5n9ZBpb9.jpg"
                },
                {
                    name: "Aries NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Aries/AriesC2-acZgmSyz4asyhbuEyuRvWV6XRhZMW0.jpg"
                },
                {
                    name: "Aries NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Aries/AriesC3-WlzGBpmwKAXYqj0r4IiGdSIsgDKNU1.jpg"

                },
                {
                    name: "Aries NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Aries/AriesC4-ujJsWrOBazGg0DmRRigMBiesMnDExx.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Taurus",
            zodiacIcon: "/zodiacSignsImg/Taurus.png",
            images: [
                {
                    name: "Taurus NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Taurus/TaurusC1-Y8SSQdh0Jek9ylKyPzvNLfgCBXa6Xw.jpg"
                },
                {
                    name: "Taurus NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Taurus/TaurusC2-h3NcjJeTujjUDWk4VmbBvsrU1zTdnK.jpg"
                },
                {
                    name: "Taurus NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Taurus/TaurusC3-5dbuemSVRpvAvMdEUHjbBxI2yGt72Q.jpg"

                },
                {
                    name: "Taurus NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Taurus/TaurusC4-EVeXUbgC64p1ZRf7YWzBHjz6Sw8xdf.jpg"

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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Gemini",
            zodiacIcon: "/zodiacSignsImg/Gemini.png",
            images: [
                {
                    name: "Gemini NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Gemini/GeminiC1-rfIp8eYcNrCoqz3kVpyjiXWVAiqyvf.jpg"
                },
                {
                    name: "Gemini NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Gemini/GeminiC2-I8gI0kcaEtgTnoSPQt167zjCZasWXI.jpg"
                },
                {
                    name: "Gemini NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Gemini/GeminiC3-p3NK6kHGXPQAMPcYAYjk3T3as9zVwV.jpg"

                },
                {
                    name: "Gemini NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Gemini/GeminiC4-s6QrHgF44Vp2obvhPckLc3EqETVksa.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Cancer",
            zodiacIcon: "/zodiacSignsImg/Cancer.png",
            images: [
                {
                    name: "Cancer NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Cancer/CancerC1-S8uqYZEYbDwkYKRq5dxWL5SSewHioH.jpg"
                },
                {
                    name: "Cancer NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Cancer/CancerC2-ivVQktPfWFWIjA96uqhoMc9F1xQ6SU.jpg"
                },
                {
                    name: "Cancer NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Cancer/CancerC3-HD94YLcanqeuFoxUdh18hTXeBilMzj.jpg"

                },
                {
                    name: "Cancer NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Cancer/CancerC4-ydFUjAVXooVbmoW3z16gwkSPN5J1zn.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Leo",
            zodiacIcon: "/zodiacSignsImg/Leo.png",
            images: [
                {
                    name: "Leo NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Leo/LeoC1-g1zB19IEyDlUHScvWZ6yMxW210zoIz.jpg"
                },
                {
                    name: "Leo NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Leo/LeoC2-nlXA3KUdsPffagEIGGJcROYaya5EmP.jpg"
                },
                {
                    name: "Leo NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Leo/LeoC3-qHuGNfGHS7uAHb9l62PQMwWOWl0uQh.jpg"

                },
                {
                    name: "Leo NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Leo/LeoC4-7tTNgsqQRmYjc8FEgunlSjLhO1zWNy.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Virgo",
            zodiacIcon: "/zodiacSignsImg/Virgo.png",
            images: [
                {
                    name: "Virgo NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Virgo/VirgoC1-WgMM8uEHbNLBNRH2RS4EQdxk4Hwfcb.jpg"
                },
                {
                    name: "Virgo NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Virgo/VirgoC2-t2FnayQe4hgio19V1uIqRxWWugpmQN.jpg"
                },
                {
                    name: "Virgo NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Virgo/VirgoC3-35LsaMvfLSOEI75uhYfMVYmUk22CpC.jpg"
                },
                {
                    name: "Virgo NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Virgo/VirgoC4-4KRIqAyZMVzvlDCZK4JulapDFfDI9Z.jpg"
                },
                {
                    name: "Virgo NFT #5",
                    url: "/api/image/CandibarImg/Zodiac/Virgo/VirgoC6-mwHs5B2UBQ2bT7lg5Ml5SgjecsEGEd.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Libra",
            zodiacIcon: "/zodiacSignsImg/Libra.png",
            images: [
                {
                    name: "Libra NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Libra/LibraC1-KAgIiEkrIXnOhlFo0xGCS8W0uE77bU.jpg"
                },
                {
                    name: "Libra NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Libra/LibraC2-MLeuJGMAltKjaDw70ioMCOMuOgxXm2.jpg"
                },
                {
                    name: "Libra NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Libra/LibraC3-q0cWAKp6oSdsalsLcJ6kSSwwENjf1t.jpg"

                },
                {
                    name: "Libra NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Libra/LibraC4-pPCGMhg7OAjo3yCCexi9z6OrJBfSOh.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Scorpio",
            zodiacIcon: "/zodiacSignsImg/Scorpio.png",
            images: [
                {
                    name: "Scorpio NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Scorpio/ScorpioC1-9elBjwZxP03LV61c8oTs5sDZ7v4xT8.jpg"
                },
                {
                    name: "Scorpio NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Scorpio/ScorpioC2-snkSD8dalKu4esVN8BLCJkzUHJvWDC.jpg"
                },
                {
                    name: "Scorpio NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Scorpio/ScorpioC3-uYQbjjrZZNYDVOyoFLZR3KPGsFb8xB.jpg"

                },
                {
                    name: "Scorpio NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Scorpio/ScorpioC4-CsOVMYMOnsjSRnqTc4Lhga6C7O0AS5.jpg"
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
             //collectionurl: "/api/image/CandibarImg/Candi/collection_01_500-yBbYwFRfyhNnrgNcyFdcTHddmsZGfG.jpg",
            collectionurl: "",
            collectionCandibarValue: 600,
            isSwappable: false,
            collectionStatus: NFTStatusTypes.Available,
            zodiacSign: "Sagittarius",
            zodiacIcon: "/zodiacSignsImg/Sagittarius.png",
            images: [
                {
                    name: "Sagittarius NFT #1",
                    url: "/api/image/CandibarImg/Zodiac/Sagittarius/SagittariusC1-U87giVQYJLznaVTTScToLv7mBMxQoH.jpg"
                },
                {
                    name: "Sagittarius NFT #2",
                    url: "/api/image/CandibarImg/Zodiac/Sagittarius/SagittariusC2-QzrAxj804wGnC9VVKdZa576igmhAyN.jpg"
                },
                {
                    name: "Sagittarius NFT #3",
                    url: "/api/image/CandibarImg/Zodiac/Sagittarius/SagittariusC3-343gAe3pEMJhwtMBE0mXqlKRGLrJC9.jpg"

                },
                {
                    name: "Sagittarius NFT #4",
                    url: "/api/image/CandibarImg/Zodiac/Sagittarius/SagittariusC4-L6J1ca7ROJ6NRUHxIl81F9OsskXucH.jpg"
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
