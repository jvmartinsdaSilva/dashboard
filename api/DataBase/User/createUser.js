import { client } from '../conection.js'
import { GenerateToken } from '../../Methods/GenerateToken.js'

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

class RegisterUser {
    registerInDb(user) {
        return new Promise(async (resolve, reject) => {
            await client.connect().catch((err) => reject({success: false, err}))

            const db = client.db("dashboard")
            const colletion = db.collection("users")
            colletion.insertOne(user).catch((err) => reject({success: false, err}))
            return resolve({ success: true })

        })
    }
}

export const createUser = async data => {
    try {
        const userId = randomId()

        const saltGenerator = new SaltGenerator()
        const hashGenerator = new HashGenerator()
        const newUser = new RegisterUser()

        const salt = await saltGenerator.generatSalt()
        const hash = await hashGenerator.generatHash(data.password, salt)


        const user = {
            _id: userId,
            name: data.name,
            email: data.email,
            password: hash,
            userImg: "defaultUser.jpg",
            graphsId:[]
        };

        await newUser.registerInDb(user)
        //
        return { 
            status: 202, 
            success: true, 
            msg: "Usuario criado com sucesso", 
            token: GenerateToken(user._id) ,
            user: {
                name: user.name, 
                id: user._id, 
                img: user.userImg, 
            },
            graphs: []
        }

    } catch (err) {
        console.log(err)
        return { status: 500, success: false, msg: err.err, }
    }
}