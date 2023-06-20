import fs from 'fs'

export const DeleteOld = (fileRouter) => {
    try{
        fs.unlinkSync(fileRouter)
    } catch (err) {
        return console.log(err)
    }


}