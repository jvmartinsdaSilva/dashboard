import multer from 'multer'
import path from 'path'

export const Upload = multer({
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, "./userImgs")
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