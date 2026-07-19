import { Router } from "express";

import {

    addToCart,

    getCart,

    updateQuantity,

    deleteCart

} from "../controllers/cart.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const cartRouter = Router();

cartRouter.post(
    "/add",
    verifyToken,
    addToCart
);

cartRouter.get(
    "/all",
    verifyToken,
    getCart
);

cartRouter.put(
    "/update/:id",
    verifyToken,
    updateQuantity
);

cartRouter.delete(
    "/delete/:id",
    verifyToken,
    deleteCart
);

export default cartRouter;