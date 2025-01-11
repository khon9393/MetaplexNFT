
export default function useQueryContext() {
  const endpoint ='mainnet'
  const hasClusterOption = endpoint !== 'mainnet'
  const fmtUrlWithCluster = (url) => {
    return url
  }

  return {
    fmtUrlWithCluster,
  }
}
