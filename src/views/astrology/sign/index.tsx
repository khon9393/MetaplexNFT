
import { FC } from "react";

import { SignSnakeView } from './snake';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const AstrologySignView: FC = ({ }) => {

  return (
    <div>
      <SignSnakeView />
      <Toaster />
    </div>
  );
};
