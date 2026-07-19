import { Router } from "express";
import { adminLogin } from "../controllers/user.controller.js";

const adminRouter = Router();

adminRouter.post("/login", adminLogin);

export default adminRouter;