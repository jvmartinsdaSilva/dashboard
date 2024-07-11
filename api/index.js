import express from "express"
import cors from "cors"

import { RegisterUser } from "./Middlewares/Register.js"
import { Login } from "./Middlewares/Login.js"
import { GetUser } from "./Middlewares/dashboard/GetUser.js"
import { checkToken } from "./Middlewares/dashboard/CheckToken.js"
import { Upload } from "./MenuImagens/UpImages.js"
import { ToggleUserPhoto } from "./Middlewares/toggleUserPhoto.js"
import { ToggleName } from "./Middlewares/toggleName.js"
import { SaveGraphs } from "./Middlewares/dashboard/SaveGraphs.js"
import { GetGraphs } from "./Middlewares/dashboard/GetGraphs.js"

import path from 'path'
import { fileURLToPath } from 'url';

const app = express()
app.use(cors())
app.use(express.json())


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const dirProject = __dirname
const dirPhotos = `${dirProject}/userImgs`


app.post("/register", RegisterUser)
app.post("/login", Login)

app.get("/dashboard/:id", checkToken)
app.get("/dashboard/userInfos/:id", GetUser)
app.post("/dashboard/saveGraphs/:id", SaveGraphs)
app.get("/dashboard/getGraphs/:id", GetGraphs)

app.post("/toggleName/:id",  ToggleName)
app.post("/togglePhoto/:id",   Upload.single("avatar"), ToggleUserPhoto)

app.use("/files", express.static(dirPhotos))


const PORT = 8081
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:" + PORT))