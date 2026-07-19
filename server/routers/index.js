import { Router } from "express";
import userRouter from "./user.route.js";
import adminRouter from "./admin.route.js";
import categoryRouter from "./category.route.js";
import productRouter from "./product.route.js";
import cartRouter from "./cart.route.js";
import { adminAuth, verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.use('/user',userRouter);
router.use('/admin',adminRouter);
router.use('/category',verifyToken, adminAuth, categoryRouter);
router.use('/product',productRouter);
router.use('/cart',cartRouter);


export default router;