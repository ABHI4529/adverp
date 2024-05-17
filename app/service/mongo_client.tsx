import {MongoClient} from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB;

let cachedClient : any = null
let cachedDb : any = null

if(!uri){
    throw new Error("Please add your Mongo URI to .env.local")
}

if(!dbName){
    throw new Error("Please add your Mongo DB name to .env.local")
}

export async function connectToDatabase(){
    if(cachedClient && cachedDb){
        return {client: cachedClient, db: cachedDb}
    }

    const client = await MongoClient.connect(uri!);

    const db = await client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return {client, db}
}