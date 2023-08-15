import 'dotenv/config'
import {MongoClient} from "mongodb"

const url = process.env.MONGO_URI
export const client = new MongoClient(url)

