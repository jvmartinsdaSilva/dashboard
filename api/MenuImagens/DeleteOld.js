import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const routerProject = __dirname.split("api/")[0]

export const DeleteOld = fileName => {
    const fileRouter = `${routerProject}/api/userImgs/${fileName}`
    try{
        fs.unlinkSync(fileRouter)
    } catch (err) {
        console.log(err)
        return console.log(err)
    }
}