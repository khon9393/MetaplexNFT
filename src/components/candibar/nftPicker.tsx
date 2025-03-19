import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import fetchEscrowAssets from "../../lib/fetchEscrowAssets";
import fetchUserAssets from "../../lib/fetchUserAssets";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useWallet } from "@solana/wallet-adapter-react";
import {Assets} from "../../utils/index"
import CollectionImg from '../../../public/images/collectionImage.jpg';
import { Spinner } from "../ui/spinner";
import { motion } from "framer-motion";

const NftPicker = ({
  children,
  wallet,
  setSelectedAsset,
}: {
  children: React.ReactNode;
  name?: string;
  wallet: "user" | "escrow";
  setSelectedAsset: (asset: Assets['items'][0]) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [assets, setAssets] = useState<Assets[]>([]);

  const handleSelection = (asset: Assets['items'][0]) => {
    setIsOpen(false);
    setSelectedAsset(asset);
  };

  const wallet1 = useWallet();

  useEffect(() => {
    if (!isOpen) return;
    console.log("fetching assets");
    setIsSearching(true);
    if (wallet === "user" && wallet1.connected) {
      // fetch user assets
      fetchUserAssets().then((assets) => {
        console.log({ assets });
        setIsSearching(false);
        if (Array.isArray(assets)) {
          //sort assets by name
          setAssets(assets);
        } else {
          setAssets([assets]);
        }
      });
    } else if (wallet === "escrow" && wallet1.connected) {
      // fetch escrow assets
      fetchEscrowAssets().then((assets) => {
        console.log({ assets });
        setIsSearching(false);
        if (Array.isArray(assets)) {
          //sort assets by name
          setAssets(assets);
        } else {
          setAssets([assets]);
        }
      });
    }
  }, [isOpen, wallet, wallet1.connected]);

  const assetList = assets[0]?.items.map((asset) => {

    const image = asset.content.files && asset.content.files.length > 0
    ? (asset.content.files[0]["uri"] as string)
    : asset.content.links && asset.content.links["image"]
    ? (asset.content.links["image"] as unknown as string)
    : CollectionImg.src;

      return (
        <motion.div
        whileHover={{ scale: 1.05 }}
      >
        <Card
          key={asset.id}
          className="p-2 flex flex-col gap-4 cursor-pointer h-fit"
          onClick={() => handleSelection(asset)}
        >
          <img
            src={image}
            alt={asset.content.metadata.name}
            className="rounded-lg w-full aspect-square"
          />
          <div className="col-span-3">
            <p className="text-lg font-bold">{asset.content.metadata.name}</p>
  
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
        <DialogTrigger disabled={true} asChild className="cursor-pointer">
          {children}
        </DialogTrigger>
        <DialogContent className="w-full max-w-[1000px] max-h-[560px] h-full flex flex-col text-black bg-red-300 dark:bg-gray-800 dark:text-white">
          <DialogHeader>
            <DialogTitle>
              Select an NFT from {
                  wallet === "escrow" ? `escrow (${assetList ? assetList.length : 0})` 
                  : `your wallet (${assetList ? assetList.length : 0})`}
            </DialogTitle>
          </DialogHeader>


         {/* Show Spinner while searching */}
            {isSearching && (
            <div className="flex items-center justify-center absolute inset-0">
            <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
            <p className="text-xl font-semibold text-white ml-4">Loading NFT Cards...</p>
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
        </DialogContent>
      </Dialog>
    );
};

export default NftPicker;