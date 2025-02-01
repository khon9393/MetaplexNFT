import { PublicKey, Transaction } from '@solana/web3.js'
import base58 from 'bs58'


export function getExplorerUrl(
    endpoint: string,
    viewTypeOrItemAddress: 'inspector' | PublicKey | string,
    itemType = 'address' // | 'tx' | 'block'
  ) {
    const getClusterUrlParam = () => {
      let cluster = ''
      if (endpoint === 'localnet') {
        cluster = `custom&customUrl=${encodeURIComponent(
          'http://127.0.0.1:8899'
        )}`
      } else if (endpoint === 'https://api.devnet.solana.com' 
      || endpoint === 'https://solemn-skilled-bird.solana-devnet.quiknode.pro/9b1c696d40e39deec224a3d6f9cd956d58eda1dd') {
        cluster = 'devnet'
      }
  
      return cluster ? `?cluster=${cluster}` : ''
    }
  
    return `https://explorer.solana.com/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`
  }