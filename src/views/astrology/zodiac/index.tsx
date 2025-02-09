
import { FC } from "react";

import { ZodiacSignAllView } from './allzodiacsigns';
import { Toaster } from "@/components/ui/toaster";

export const AstrologyZodiacView: FC = ({ }) => {

  return (
    <div>
      <ZodiacSignAllView />
      <Toaster />
    </div>
  );
};
