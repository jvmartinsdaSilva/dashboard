import multer from 'multer'
import path from 'path'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const dirProject = __dirname.split("/MenuImagens")[0]
const dirPhotos = `${dirProject}/userImgs`


export const Upload = multer({
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, dirPhotos)
        },
        filename: (req, file, cb) => {
            const randomID = Date.now().toString()  + Math.round(Math.random() * 1000000)
            cb(null, randomID +    path.extname(file.originalname))
        }, 
    }),
    fileFilter: (req, file, cb) => {
        const imgsTypes = ["image/jpg", "image/png", "image/jpeg"].find(accept => accept == file.mimetype)

        if(!imgsTypes) return cb(null, false)

        return cb(null, true)
    }
})