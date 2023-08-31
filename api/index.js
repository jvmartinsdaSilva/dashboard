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

const app = express()
app.use(cors())
app.use(express.json())


app.use("/", (req, res) => res.send("Dashboard api"))

app.post("/register", RegisterUser)
app.post("/login", Login)
app.get("/dashboard/:id", checkToken)
app.get("/dashboard/userInfos/:id", GetUser)

app.post("/dashboard/saveGraphs/:id", SaveGraphs)
app.get("/dashboard/getGraphs/:id", GetGraphs)

app.post("/toggleName/:id",  ToggleName)
app.post("/togglePhoto/:id",   Upload.single("avatar"), ToggleUserPhoto)
app.use("/files", express.static('userImgs'))


const PORT = 8080
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:8080"))