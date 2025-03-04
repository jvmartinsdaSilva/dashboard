import express from "express"
import cors from "cors"

import { UserRouters } from "./routers/User.js"
import { DashboardRouters } from "./routers/Dashboard.js"

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
app.use("/dashboard", DashboardRouters)
app.use("/files", express.static(dirPhotos))

const PORT = 8082
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:" + PORT))