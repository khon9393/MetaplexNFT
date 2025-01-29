import { Card } from "@/components/ui/card";

const CardComponent = ({children}: {children: React.ReactNode}) => {
  return (
    <Card className="">
      {children}
    </Card>
  );
}

export default CardComponent;