  
  
export interface ZodiacSign {
    name: string;
    icon: string;
    dateRange: string;
    machinePublicKey: string | undefined;
    collectionPublicKey: string | undefined;
    escrowPublickey?: string | undefined;
}

export const CandiZodiacSigns: ZodiacSign[] = [
    { name: "Capricorn", icon: "♑", dateRange: "December 21-January 20", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRIC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_CAPRIC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_CAPRIC1 },
    { name: "Aquarius", icon: "♒", dateRange: "January 21-February 18", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUIC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_AQUIC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_AQUIC1 },
    
    //{ name: "Pisces", icon: "♓", dateRange: "March 21-April 19", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_PISCC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_PISCC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_PISCC1 },
     { name: "Pisces", icon: "♓", dateRange: "February 19-March 20", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_PISCC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_PISCC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_PISCC1 },
     { name: "Aries", icon: "♈", dateRange: "March 21-April 19", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIESC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_ARIESC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_ARIESC1 },
    
    { name: "Taurus", icon: "♉", dateRange: "April 20-May 20", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_TAURC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_TAURC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_TAURC1 },
    { name: "Gemini", icon: "♊", dateRange: "May 21-June 20", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINIC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_GEMINIC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_GEMINIC1 },
    { name: "Cancer", icon: "♋", dateRange: "June 21-July 22", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCERC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_CANCERC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_CANCERC1 },
    { name: "Leo", icon: "♌", dateRange: "July 23-August 22", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEOC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_LEOC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_LEOC1 },
    { name: "Virgo", icon: "♍", dateRange: "August 23-September 22", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_VIRGOC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_VIRGOC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_VIRGOC1 },
    { name: "Libra", icon: "♎", dateRange: "September 23-October 22", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEBRAC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_LEBRAC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_LEBRAC1 },
    { name: "Scorpio", icon: "♏", dateRange: "October 23-November 21", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_SCOC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_SCOC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_SCOC1 },
    { name: "Sagittarius", icon: "♐", dateRange: "November 22-December 21", machinePublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_SAGC1, collectionPublicKey: process.env.NEXT_PUBLIC_COLLECTION_SAGC1, escrowPublickey: process.env.NEXT_PUBLIC_ESCROW_SAGC1 },
];

export const getCurrentZodiacSign = (): ZodiacSign | null => {
    const currentDate = new Date();

    for (const sign of CandiZodiacSigns) {
        const [start, end] = sign.dateRange.split("-");
        const [startMonth, startDay] = start.split(" ");
        const [endMonth, endDay] = end.split(" ");

        const startDate = new Date(`${startMonth} ${startDay}, ${currentDate.getFullYear()}`);
        const endDate = new Date(`${endMonth} ${endDay}, ${currentDate.getFullYear()}`);

        if (startDate <= currentDate && currentDate <= endDate) {
            return sign;
        }
    }
    return null;
};


export const getCurrentZodiacSignTopN = (n: number): ZodiacSign[] => {
    const currentDate = new Date();
    const topNZodiacSigns: ZodiacSign[] = [];

    const sortedZodiacSigns = CandiZodiacSigns.map(sign => {
        const [start, end] = sign.dateRange.split("-");
        const [startMonth, startDay] = start.split(" ");
        const [endMonth, endDay] = end.split(" ");

        const startDate = new Date(`${startMonth} ${startDay}, ${currentDate.getFullYear()}`);
        const endDate = new Date(`${endMonth} ${endDay}, ${currentDate.getFullYear()}`);

        return { ...sign, startDate, endDate };
    }).sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    let foundCurrent = false;

    for (const sign of sortedZodiacSigns) {
        if (!foundCurrent && sign.startDate <= currentDate && currentDate <= sign.endDate) {
            foundCurrent = true;
        }

        if (foundCurrent) {
            topNZodiacSigns.push(sign);
            if (topNZodiacSigns.length === n) {
                break;
            }
        }
    }

    if (topNZodiacSigns.length < n) {
        for (const sign of sortedZodiacSigns) {
            if (topNZodiacSigns.length === n) {
                break;
            }
            topNZodiacSigns.push(sign);
        }
    }

    return topNZodiacSigns;
};