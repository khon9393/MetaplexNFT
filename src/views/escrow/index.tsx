
import { FC } from "react";
import EscrowWrapper from "@/components/escrowWrapper/escrowWrapper";
import { UmiProvider } from "../../providers/umiProvider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const EscrowView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className="text-center">
           <UmiProvider>
            <EscrowWrapper />
            <Toaster />
          </UmiProvider> 
        </div>
    </div>
  </div>
  );
};
