export async function savePromoGiveaway(promoData: {
  walletpk: string;
  assetid: string;
  collectionid: string;
  candymachineid: string;
  name: string;
  description: string;  
  promo_mint: boolean,
  enabled?: boolean;
}) {
  const response = await fetch('/api/promo/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promoData),
  });

  const data = await response.json();
  console.log('Save response:', data);
}

export async function fetchPromoGiveaway(walletpk: string, collectionId: string) {
  const queryParams = new URLSearchParams();
  queryParams.append('walletpk', walletpk);
  queryParams.append('collectionId', collectionId);

  const response = await fetch(`/api/promo/fetch?${queryParams.toString()}`);
  const data = await response.json();
  console.log('Fetched data:', data);
  return data;
}


export async function fetchPromoGiveawayByMachine(candymachineid?: string, collectionId?: string) {
  const queryParams = new URLSearchParams();
  if (candymachineid) queryParams.append('candymachineId', candymachineid);
  if (collectionId) queryParams.append('collectionId', collectionId);

  try {
    const response = await fetch(`/api/promo/machine/fetch?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error(`Error fetching machine data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched machine data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch machine data:', error);
    throw error;
  }
}