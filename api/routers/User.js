import { Router } from "express";
import { GetUser } from "../Middlewares/User/GetUser";
import { Upload } from "../MenuImagens/UpImages";
import { ToggleName } from "../Middlewares/User/toggleName";
import { ToggleUserPhoto } from "../Middlewares/User/toggleUserPhoto.js";

const UserRouters = Router()


UserRouters.get("/userInfos/:id", GetUser)
UserRouters.post("/toggleName/:id", ToggleName)
UserRouters.post("/togglePhoto/:id", ToggleUserPhoto)

export {UserRouters}