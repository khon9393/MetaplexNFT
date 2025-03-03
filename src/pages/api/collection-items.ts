import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../lib/db";
import { CollectionItemDetails } from "../../models/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

let intEnv = 0;
const env = process.env.NEXT_PUBLIC_RPC_ENV;
if (env === "mainnet-beta") {
intEnv = 1;
}
else {
intEnv = 2;
}

  if (req.method === "GET") {
    try {
      const result = await pool.query(`SELECT cid.id
      ,cmac.candimachineeaddress
      ,cmac.collectionName
      ,cmac.collectionadress
      ,cid.collectionurl
      ,cid.collectionSubtitles
      ,cid.collectionDetails
      ,cid.collectionCandibarValue
      ,cid.collectionStatus
      ,cid.isSwappable
      ,cid.zodiacSign 
      ,cid.zodiacYear 
      ,cid.zodiacIcon 
      ,cid.Images 
FROM CollectionItemDetails cid
inner join CandyMachineAndCollection cmac on cid.CandyMachineAndCollectionId = cmac.id 
and cmac.Env = ${intEnv}`);
      const collections: CollectionItemDetails[] = result.rows;
      res.status(200).json(collections);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
