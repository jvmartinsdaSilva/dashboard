import { Router } from "express";
import { GetUser } from "../Middlewares/User/GetUser.js";
import { Upload } from "../MenuImagens/UpImages.js";
import { ToggleName } from "../Middlewares/User/toggleName.js";
import { ToggleUserPhoto } from "../Middlewares/User/toggleUserPhoto.js";
import { RegisterUser } from "../Middlewares/User/Register.js";
import { Login } from "../Middlewares/User/Login.js";
import { checkToken } from "../Middlewares/Authenticate/CheckToken.js";

const UserRouters = Router()


UserRouters.get("/userInfos/:id", GetUser)
UserRouters.get("/authenticate/:id", checkToken)
UserRouters.post("/toggleName/:id", ToggleName)
UserRouters.post("/togglePhoto/:id", Upload.single('avatar'),  ToggleUserPhoto)
UserRouters.post("/register", RegisterUser)
UserRouters.post("/login", Login)

export {UserRouters}