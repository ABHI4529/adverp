import {NextApiRequest, NextApiResponse} from "next";
import {connectToDatabase} from "@/app/service/mongo_client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        connectToDatabase().then(async (value) => {
            try {
                const client = value.client;
                const db = value.db;
                const data = req.body;
                const collection = db.collection('users');
                const result = await collection.insertOne(data);
                res.status(200).json({message: 'data uploaded successfully', id: result.insertedId});
            } catch (e) {
                console.error('Error uploading data:', e);
            }
        })
    } else {
        res.status(405).json({message: 'Method not allowed'});
    }
}