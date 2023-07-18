import { db } from './conection.js'
import { CreateGraphsStorageByUser } from '../Graphs/GraphControllers/CreateGraphStorage.js'

import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'

const randomId = () => {
    const random = uuid().split('-')[0]
    return `${random}`
}

class SaltGenerator {
    generatSalt() {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(12, (err, salt) => {
                if (err) return reject(err)

                return resolve(salt)
            })
        })
    }
}

class HashGenerator {
    generatHash(password, salt) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) return reject(err)

                return resolve(hash)
            })
        })
    }
}

class DataBase {
    insertUser(user) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO users (userId, userName, email, pass) VALUES (?)", [user],
                (err) => {
                    if (err) return reject(err)

                    return resolve()
                })
        })
    }
}

export const createUser = async data => {
    try {
        const userId = randomId()

        const saltGenerator = new SaltGenerator()
        const hashGenerator = new HashGenerator()
        const database = new DataBase()
        const graphStorage = new CreateGraphsStorageByUser()

        const salt = await saltGenerator.generatSalt()
        const hash = await hashGenerator.generatHash(data.password, salt)

        
        const user = [
            userId,
            data.name,
            data.email,
            hash
        ];
        
        await graphStorage.createStorage(userId)
        await database.insertUser(user)

        return {status: 202, msg: "Usuario criado com sucesso"}

    } catch (err) {
        console.log(err)
        return {status: 500, msg: err.err, }
    }
}