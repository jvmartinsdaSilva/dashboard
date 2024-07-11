import { Router } from "express";

import { SaveGraphs } from "../Middlewares/dashboard/SaveGraphs.js";
import { GetGraphs } from "../Middlewares/dashboard/GetGraphs.js";

const DashboardRouters = Router()

DashboardRouters.post("/saveGraphs/:id", SaveGraphs)
DashboardRouters.get("/getGraphs/:id", GetGraphs)

export {DashboardRouters}