import 'dotenv/config'
import {MongoClient} from "mongodb"

const url = process.env.MONGO_URL
export const client = new MongoClient(url)

