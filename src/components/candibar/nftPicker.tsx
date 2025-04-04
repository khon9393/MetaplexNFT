import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import fetchEscrowAssets from "../../lib/fetchEscrowAssets";
// import fetchUserCompleteCollectionAssets from "../../lib/trash/searchCompleteCollectionAssets";
import fetchUserAssets from "../../lib/fetchUserAssets";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useWallet } from "@solana/wallet-adapter-react";
import { Asset, Assets } from "../../utils/index";
import CollectionImg from "../../../public/images/collectionImage.jpg";
import { Spinner } from "../ui/spinner";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { getCompleteCollectionNames, validateCollection } from "@/lib/fetchCompleteCollection";
import {SwapArgs} from "../../lib/swapselector";

const NftPicker = ({
  children,
  wallet,
  setSelectedAssets,
  swapArgs,
}: {
  children: React.ReactNode;
  name?: string;
  wallet: "user" | "escrow";
  setSelectedAssets: (assets: Asset[]) => void;
  swapArgs: SwapArgs;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [assets, setAssets] = useState<Assets[]>([]);
  const [selectedAssets, setLocalSelectedAssets] = useState<Asset[]>([]);

  const wallet1 = useWallet();

  const handleSelection = (asset: Asset) => {
    setLocalSelectedAssets((prevSelected) => {
      // Toggle selection: Add if not selected, remove if already selected
      const isAlreadySelected = prevSelected.some((selected) => selected.id === asset.id);
      if (isAlreadySelected) {
        return prevSelected.filter((selected) => selected.id !== asset.id);
      } else {
        return [...prevSelected, asset];
      }
    });
  };

  const handleConfirmSelection = async () => {

    if (selectedAssets.length > 0) {

      if(swapArgs.name === 'zodiac') {
  
      const collection = await getCompleteCollectionNames(selectedAssets[0].content.collectionid);

      if (collection.length > 0) {
        const isCollectionValid = await validateCollection(selectedAssets[0].content.collectionid, selectedAssets);
        const isCollectionComplete = collection.length === selectedAssets.length;

        if (selectedAssets.length > collection.length) {
          toast({
            title: "Too many NFTs selected",
            description: `Only ${collection.length} NFTs can be selected from this collection.`,
            variant: "Warning",
          });
          return;
        }

        if (!isCollectionValid || !isCollectionComplete) {
          // Show a warning toast if the collection is incomplete or invalid
            toast({
            title: "Incomplete or Invalid NFT Collection Selection",
            description: "Ensure all NFTs are unique and part of a complete collection before proceeding.",
            variant: "Warning",
            });
          return;
        }
      }

    }

 }
    setSelectedAssets(selectedAssets); // Pass selected assets to parent
    setIsOpen(false); // Close the dialog
    console.log("Selected Assets:", selectedAssets); // Debugging
 

  };

  useEffect(() => {
    if (!isOpen) return;
    console.log("Fetching assets...");
    setIsSearching(true);
    if (wallet === "user" && wallet1.connected) {
      // Fetch user assets
      fetchUserAssets(swapArgs).then((assets) => {
        console.log({ assets });
        setIsSearching(false);
        if (Array.isArray(assets)) {
          setAssets(assets);
        } else {
          setAssets([{ ...assets, items: assets?.items as Assets["items"] }]);
        }
      });
    } else if (wallet === "escrow" && wallet1.connected) {
      // Fetch escrow assets
      fetchEscrowAssets(swapArgs).then((assets) => {
        console.log({ assets });
        setIsSearching(false);
        if (Array.isArray(assets)) {
          setAssets(assets);
        } else {
          setAssets([assets]);
        }
      });
    }
  }, [isOpen, wallet, wallet1.connected, swapArgs]);

  const assetList = assets[0]?.items?.map((asset) => {
    const image =
      asset.content.files && asset.content.files.length > 0
        ? (asset.content.files[0]["uri"] as string)
        : asset.content.links && asset.content.links["image"]
          ? (asset.content.links["image"] as unknown as string)
          : CollectionImg.src;

    const isSelected = selectedAssets.some((selected) => selected.id === asset.id);

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        key={asset.id}
        className={`border-4 ${isSelected ? "border-blue-500" : "border-transparent"} rounded-lg`}
      >
        <Card
          className={`p-2 flex flex-col gap-4 cursor-pointer h-fit ${isSelected ? "bg-green-500" : ""
            }`}
          onClick={() => handleSelection(asset)}
        >
          <img
            src={image}
            alt={asset.content.metadata.name}
            className="rounded-lg w-full aspect-square"
          />
          <div className="col-span-3">
            <p className="text-md font-bold flex justify-center items-center text-center">
              {asset.content.metadata.name}
            </p>
            <p className="text-sm font-bold flex justify-center items-center text-center">
              ({asset.content.metadata.description})
            </p>
          </div>
        </Card>
      </motion.div>
    );
  });

  return (
    <Dialog
      onOpenChange={(o) => (o ? setIsOpen(true) : setIsOpen(false))}
      open={isOpen}
    >
      <DialogTrigger disabled={false} asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="w-full max-w-[1000px] max-h-[600px] h-full flex flex-col text-black bg-red-300 dark:bg-gray-800 dark:text-white">
        <DialogHeader>
          <DialogTitle>
            Select NFTs from{" "}
            {wallet === "escrow"
              ? `escrow (${assets[0]?.items?.length || 0})`
              : `your wallet (${assets[0]?.items?.length || 0})`}
          </DialogTitle>
        </DialogHeader>

        {/* Show Spinner while searching */}
        {isSearching && (
          <div className="flex items-center justify-center absolute inset-0">
            <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
            <p className="text-xl font-semibold text-white ml-4">
              Loading NFT Cards...
            </p>
          </div>
        )}

        {wallet1.connected && assetList && assetList.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 overflow-auto p-2">
            {assetList}
          </div>
        ) : (
          !isSearching && (
            <div className="flex flex-1 flex-col justify-center w-full items-center">
              <div>No assets found!</div>
            </div>
          )
        )}

        <DialogFooter>


          <div className="flex justify-between w-full">

            {/* Column 0 */}
            <div className="flex flex-col justify-center items-center">

            </div>

            {/* Column 1 */}
            <div className="flex flex-col justify-center items-center">
              {/* {selectedAssets.map((asset) => (
                <div key={asset.id} className="text-center">
                  <span>
                    {asset.content.metadata.name} ({asset.content.metadata.description})
                  </span>
                </div>
              ))} */}
            </div>

            {/* Column 2 */}
            {!isSearching && (
              <div className="flex justify-start">
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleConfirmSelection}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 h-[50px] w-[175px] flex items-center justify-center"
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NftPicker;