import { FC, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { CandiZodiacSigns, getCurrentZodiacSign } from "../../../stores/useCandiZodiacSignsStore";
import { motion } from "framer-motion";

export const FilterAstrologyZodiacView: FC = () => {
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);

  const handleSignChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    const signsToStore = selectedValues.includes("View All") ? Object.keys(CandiZodiacSigns) : selectedValues;
    setSelectedSigns(signsToStore);
    localStorage.setItem("selectedSigns", JSON.stringify({ signs: signsToStore, timestamp: new Date().getTime() }));
  };

  // Load selected signs from localStorage if available and not expired   
  useEffect(() => {

    const storedData = localStorage.getItem("selectedSigns");
    if (storedData) {
      const { signs, timestamp } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      //const thirtyMinutesInMilliseconds = 30 * 60 * 1000;
      // const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
      const oneDaysInMilliseconds = 1 * 24 * 60 * 60 * 1000;

      if (currentTime - timestamp < oneDaysInMilliseconds) {
        setSelectedSigns(signs);
        return;
      } else {
        localStorage.removeItem("selectedSigns");
      }
    }

    handleSignChange([{ value: "View All", label: "View All" }]);

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
      <div className="flex justify-center">
        <Select
          isMulti
          options={options}
          value={options.filter(option => selectedSigns.includes(option.value))}
          onChange={handleSignChange}
          className="w-full max-w-lg text-start"
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
              <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.3, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
              <CardContainer candyMachineKeys={[publicKey(CandiZodiacSigns[sign].machinePublicKey)]} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};