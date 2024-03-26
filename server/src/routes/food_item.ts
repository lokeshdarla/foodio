import { Router } from "express";
import { createFoodItem, getFoodItemById, getFoodItems, updateFoodItem, deleteFoodItem } from "../controllers/food_items";
const FoodItemRouter = Router();

// Define routes using controller functions
FoodItemRouter.get('/', getFoodItems);
FoodItemRouter.post('/', createFoodItem);
FoodItemRouter.get('/:id', getFoodItemById);
FoodItemRouter.put('/:id', updateFoodItem);
FoodItemRouter.delete('/:id', deleteFoodItem);

export default FoodItemRouter;
