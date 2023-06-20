// import { homeRouter } from "./routes/index.js"
import express from "express"
import cors from "cors"

import { RegisterUser } from "./routes/Register.js"
import { Login } from "./routes/Login.js"
import { GetUser } from "./routes/dashboard/getUser.js"
import { checkToken } from "./routes/dashboard/CheckToken.js"
import { Upload } from "./MenuImagens/UpImages.js"
import { ToggleUserPhoto } from "./routes/toggleUserPhoto.js"
import { ToggleName } from "./routes/toggleName.js"


const app = express()
app.use(cors())
app.use(express.json())

// app.post("/home", homeRouter)
app.post("/register", RegisterUser)
app.post("/login", Login)

app.get("/dashboard/:id", checkToken, GetUser)

app.post("/togglePhoto/:id",checkToken,  Upload.single("avatar"), ToggleUserPhoto)
app.use("/files", express.static('userImgs'))

app.post("/toggleName/:id", checkToken, ToggleName)

const PORT = 8080
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:8080"))