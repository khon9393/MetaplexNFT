import { useEffect, useState } from "react";
import { CollectionItemDetails } from "../types";

export default function CollectionsPage() {
  const [collections, setCollections] = useState<CollectionItemDetails[]>([]); // ✅ Ensure initial state is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/collections")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCollections(data);
        } else {
          throw new Error("Unexpected API response");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load collections");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading collections...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map((item) => (
          <li key={item.id}>
            <h2>{item.collectionname}</h2>
            <p>Status: {item.collectionstatus}</p>
            <p>Swappable: {item.images ? "Yes" : "No"}</p>
            {item.images && item.images.length > 0 && (
              <img src={item.images[0].url} alt={item.images[0].name} width={150} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

