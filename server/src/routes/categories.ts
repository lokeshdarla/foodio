import { Router } from "express";
import { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from "../controllers/categories";

const categoryRouter = Router();

// Define routes using controller functions
categoryRouter.get('/', getCategories);
categoryRouter.post('/', createCategory);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
