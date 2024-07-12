import { Router } from "express";
import { GetUser } from "../Middlewares/User/GetUser";
import { Upload } from "../MenuImagens/UpImages";
import { ToggleName } from "../Middlewares/User/toggleName";
import { ToggleUserPhoto } from "../Middlewares/User/toggleUserPhoto.js";
import { RegisterUser } from "../Middlewares/User/Register.js";
import { Login } from "../Middlewares/User/Login.js";

const UserRouters = Router()


UserRouters.get("/userInfos/:id", GetUser)
UserRouters.post("/toggleName/:id", ToggleName)
UserRouters.post("/togglePhoto/:id", Upload.single('avatar'),  ToggleUserPhoto)
UserRouters.post("/register", RegisterUser)
UserRouters.post("/login", Login)

export {UserRouters}