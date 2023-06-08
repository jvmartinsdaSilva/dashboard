// import { homeRouter } from "./routes/index.js"
import { RegisterUser } from "./routes/Register.js"

import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

// app.post("/home", homeRouter)
app.post("/register", RegisterUser)

const PORT = 8080
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:8080"))