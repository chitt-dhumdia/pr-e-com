import { Router } from "express";
import { login, profile, register } from "../controllers/user.controller.js";
import { verifyToken, verifyUser } from "../middlewares/auth.middleware.js";

const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);

userRouter.get('/profile/:id', verifyToken, verifyUser, profile);



export default userRouter;