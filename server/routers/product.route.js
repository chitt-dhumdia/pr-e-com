import { Router } from "express";
import {
    addProduct,
    getAllProduct,
    getProductByID,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js";

import { adminAuth, verifyToken } from "../middlewares/auth.middleware.js";

import upload from "../configs/multer.js";

const productRouter = Router();

productRouter.post(
    "/create",
    verifyToken,
    adminAuth,
    upload.single("image"),
    addProduct
);

productRouter.get("/all", getAllProduct);

productRouter.get("/:id", getProductByID);

productRouter.put(
    "/update/:id",
    verifyToken,
    adminAuth,
    upload.single("image"),
    updateProduct
);

productRouter.delete(
    "/delete/:id",
    verifyToken,
    adminAuth,
    deleteProduct
);

export default productRouter;