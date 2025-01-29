import EscrowWrapper from "../../components/escrowWrapper/escrowWrapper";

// import { toast, useToast } from "../../hooks/use-toast";
// import { useRouter } from 'next/router';
// import dynamic from "next/dynamic";
// import { useWallet } from "@solana/wallet-adapter-react/lib/types/useWallet";


// const WalletMultiButtonDynamic = dynamic(
//   async () =>
//     (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//   { ssr: false }
// );

export default function Escrow() {


  // const { connected } = useWallet();

  // return (
  //   <main className="flex flex-col flex-1 items-center gap-4 w-full">
  //     <div className="flex flex-1 justify-center w-full pb-8">
  //       {connected ? <EscrowWrapper /> : <p>Please connect your wallet to view the escrow.</p>}
  //     </div>
  //   </main>
  // );



  return (
    <main className="flex flex-col flex-1 items-center gap-4 w-full">
      <div className="flex flex-1 justify-center w-full pb-8">
        <EscrowWrapper />
      </div>
    </main>
  );
}
