import 'dotenv/config'
import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD_DB,
    database: 'dashboard'
})