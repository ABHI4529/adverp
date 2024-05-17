import {NextApiRequest, NextApiResponse} from "next";
import {connectToDatabase} from "@/app/service/mongo_client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const {client, db} = await connectToDatabase();
            const {userId} = req.body;
            const companies = await db.collection("companies").find({
                "user_id": userId
            }).toArray();
            res.status(200).json({length: companies.length, companies});
        } catch (e) {
            console.error('Error Getting Companies:', e);
            res.status(500).json({message: 'Internal Server Error'});
        }
    } else {
        res.status(405).json({message: 'Method not allowed'});
    }
}