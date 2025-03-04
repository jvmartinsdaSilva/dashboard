import express from "express"
import cors from "cors"

import { UserRouters } from "./routers/User.js"

import { checkToken } from "./Middlewares/Authenticate/CheckToken.js"
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



app.use("/", UserRouters)

app.post("/dashboard/saveGraphs/:id", SaveGraphs)
app.get("/dashboard/getGraphs/:id", GetGraphs)


app.use("/files", express.static(dirPhotos))


const PORT = 8082
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:" + PORT))