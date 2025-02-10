
import { FC, useMemo } from "react";

import { Toaster } from "@/components/ui/toaster";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";

export const AstrologyZodiacView: FC = ({ }) => {


  // const candyMachineKeys = useMemo(() => [
  //   publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
  //   publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
  //   publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
  //   publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
  // ], []);

  return (
  <div>
    <p className="text-3xl font-extrabold p-3 text-center">
      Capricorn Dates: December 21-January 20
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Aquarius Dates: January 21-February 18
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Pisces Dates: February 19-March 20
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Aries Dates: March 21-April 19
    </p>      
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Taurus Dates: April 20-May 20
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Gemini Dates: May 21-June 20
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Cancer Dates: June 21-July 22
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Leo Dates: July 23-August 22
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Virgo Dates: August 23-September 22
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Libra Dates: September 23-October 22
    </p>      
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Scorpio Dates: October 23-November 21
    </p>
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01)]} />

    <p className="text-3xl font-extrabold p-3 text-center">
      Sagittarius Dates: November 22-December 21
    </p>
       
    <CardContainer candyMachineKeys={[publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02)]} />
    <Toaster />
  </div>
  );
};
