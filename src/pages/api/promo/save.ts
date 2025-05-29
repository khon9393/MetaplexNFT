import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

    const {
        walletpk,
        assetid,
        collectionid,
        candymachineid,
        promo_mint,
        name,
        description,
        enabled,
        update_time,
        create_time,
        update_user,
    } = req.body;

    if (!walletpk || !assetid || !collectionid || !candymachineid) {
        return res.status(400).json({
            error: 'walletpk, assetId, collectionId, and candymachineId are required',
        });
    }

    const client = await pool.connect();
    try {
        // const check = await client.query(
        //     'SELECT 1 FROM Promo_giveaway WHERE walletpk = $1 AND assetId = $2 LIMIT 1',
        //     [walletpk, assetid]
        // );

        // if (check.rowCount > 0) {
        //     return res.status(200).json({ message: 'Entry already exists' });
        // }

        await client.query(
            `INSERT INTO Promo_giveaway (
                walletpk, assetid, collectionid, candymachineid, name, description, enabled, promo_mint, update_time, create_time, update_user
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
                walletpk,
                assetid,
                collectionid,
                candymachineid,
                name || null,
                description || null,
                enabled || true,
                promo_mint || false,
                update_time || new Date(),
                create_time || new Date(),
                update_user || null,
            ]
        );

        res.status(200).json({ message: 'Saved successfully' });
    } catch (error) {
        console.error('Insert Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.release();
    }
}
