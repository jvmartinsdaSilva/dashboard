// import { homeRouter } from "./routes/index.js"
import { RegisterUser } from "./routes/Register.js"
import { Login } from "./routes/Login.js"
import { GetUser } from "./routes/dashboard/getUser.js"

import express from "express"
import cors from "cors"
import { checkToken } from "./routes/dashboard/CheckToken.js"


const app = express()
app.use(cors())
app.use(express.json())

// app.post("/home", homeRouter)
app.post("/register", RegisterUser)
app.post("/login", Login)
app.get("/dashboard/:id", checkToken, GetUser)

app.use("/files", express.static('userImgs'))

const PORT = 8080
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:8080"))