import 'dotenv/config'
import {MongoClient} from "mongodb"

//Conection in Mongo DataBase

const url = process.env.MONGO_URI
export const client = new MongoClient(url, { useNewUrlParser: true })

