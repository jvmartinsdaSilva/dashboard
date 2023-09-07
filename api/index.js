// import { homeRouter } from "./routes/index.js"
import express from "express"
import cors from "cors"

import { RegisterUser } from "./routes/Register.js"
import { Login } from "./routes/Login.js"
import { GetUser } from "./routes/dashboard/GetUser.js"
import { checkToken } from "./routes/dashboard/CheckToken.js"
import { Upload } from "./MenuImagens/UpImages.js"
import { ToggleUserPhoto } from "./routes/toggleUserPhoto.js"
import { ToggleName } from "./routes/toggleName.js"
import { SaveGraphs } from "./routes/dashboard/SaveGraphs.js"
import { GetGraphs } from "./routes/dashboard/GetGraphs.js"

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