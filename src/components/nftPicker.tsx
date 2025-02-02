import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import fetchEscrowAssets from "../lib/fetchEscrowAssets";
import fetchUserAssets from "../lib/fetchUserAssets";
import {
  DasApiAsset,
  DasApiAssetList,
} from "@metaplex-foundation/digital-asset-standard-api";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AssetV1 } from "@metaplex-foundation/mpl-core";
import { useWallet } from "@solana/wallet-adapter-react";

const NftPicker = ({
  children,
  wallet,
  setSelectedAsset,
}: {
  children: React.ReactNode;
  name?: string;
  wallet: "user" | "escrow";
  setSelectedAsset: (asset: DasApiAsset) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [assets, setAssets] = useState<DasApiAssetList>();

  const handleSelection = (asset: DasApiAsset) => {
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
        if (assets) {
          //sort assets by name
          setAssets(assets);
        }
      });
    } else if (wallet === "escrow") {
      // fetch escrow assets
      fetchEscrowAssets().then((assets) => {
        console.log({ assets });
        setIsSearching(false);
        if (assets) {
          //sort assets by name
          setAssets(assets);
        }
      });
    }
  }, [isOpen, wallet, wallet1.connected]);

  const assetList = assets?.items
    .sort((a, b) =>
      a.content.metadata.name.localeCompare(
        b.content.metadata.name,
        undefined,
        { numeric: true }
      )
    )
    .map((asset) => {
      const image = asset.content.files
        ? (asset.content.files[0]["uri"] as string)
        : asset.content.links
        ? (asset.content.links[
            "image" as keyof typeof asset.content.links
          ] as unknown as string)
        : "fallback.png";
        
      return (
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
      <DialogContent className="w-full max-w-[1000px] max-h-[560px] h-full flex flex-col text-black">
        <DialogHeader>
          <DialogTitle>
            Select an NFT from {wallet === "escrow" ? `escrow (${assetList ? assetList.length : 0})` : `your wallet (${assetList ? assetList.length : 0})`}
          </DialogTitle>
        </DialogHeader>

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
