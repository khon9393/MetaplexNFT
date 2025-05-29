import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');

    const { walletpk, collectionId } = req.query;

    if (!walletpk || typeof walletpk !== 'string' || !collectionId || typeof collectionId !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid parameters' });
    }

    const client = await pool.connect();
    try {
        const result = await client.query(
            `SELECT walletpk, assetId, collectionId, candymachineId, name, description, update_time, create_time, update_user 
             FROM Promo_giveaway 
             WHERE walletpk = $1 AND collectionId = $2 AND enabled = true`,
            [walletpk, collectionId]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Fetch Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.release();
    }
}


// WHERE walletpk = $1 OR assetId = $1 OR collectionId = $1 OR name = $1 AND enabled = true`,