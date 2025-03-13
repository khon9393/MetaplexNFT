import { FC, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { CandiZodiacSigns, getCurrentZodiacSign } from "../../../stores/useCandiZodiacSignsStore";

export const FilterAstrologyZodiacView: FC = () => {
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);

  const handleSignChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    const signsToStore = selectedValues.includes("View All") ? Object.keys(CandiZodiacSigns) : selectedValues;
    setSelectedSigns(signsToStore);
    localStorage.setItem("selectedSigns", JSON.stringify({ signs: signsToStore, timestamp: new Date().getTime() }));
  };

  useEffect(() => {
   
    const storedData = localStorage.getItem("selectedSigns");
    if (storedData) {
      const { signs, timestamp } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;

      if (currentTime - timestamp < threeDaysInMilliseconds) {
        setSelectedSigns(signs);
        return;
      } else {
        localStorage.removeItem("selectedSigns");
      }
    }

     const currentSign = getCurrentZodiacSign();
     if (currentSign) {
       setSelectedSigns([currentSign.name]);
     }
  }, []);

  const options = useMemo(() => [
    ...Object.entries(CandiZodiacSigns).map(([sign, { icon, name }]) => ({
      value: sign,
      label: `${icon} ${name}`,
    })),
    { value: "View All", label: "View All" },
  ], []);

  return (
    <div>

<h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold p-3">
  Search for your Candi Confection Zodiac NFT and discover your candy zodiac sign.
</h1>

      <div className="flex justify-center p-2">
        <Select
          isMulti
          options={options}
          value={options.filter(option => selectedSigns.includes(option.value))}
          onChange={handleSignChange}
          className="w-full max-w-lg"
          styles={{
            multiValueLabel: (base) => ({
              ...base,
              color: 'purple',
            }),
            singleValue: (base) => ({
              ...base,
              color: 'purple',
            }),
            option: (base, state) => ({
              ...base,
              color: state.isSelected ? 'white' : 'purple',
              backgroundColor: state.isSelected ? 'purple' : 'white',
            }),
            control: (base) => ({
              ...base,
              backgroundColor: 'white',
            }),
            multiValue: (base) => ({
              ...base,
              backgroundColor: 'lightgray',
            }),
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-2">
        {selectedSigns.map((sign) => (
          <div key={sign} className="p-2">
            {CandiZodiacSigns[sign] && (
              <CardContainer candyMachineKeys={[publicKey(CandiZodiacSigns[sign].publicKey)]} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};