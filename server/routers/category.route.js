import { Router } from "express";
import {createCategory,getAllCategory,updateCategory,deleteCategory} from "../controllers/category.controller.js";

const categoryRouter = Router();
categoryRouter.post("/create", createCategory);
categoryRouter.get("/all", getAllCategory);
categoryRouter.put("/update/:id", updateCategory);
categoryRouter.delete("/delete/:id", deleteCategory);

export default categoryRouter;