import { Router } from "express";
import { createRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant, getRestaurants } from "../controllers/restaurants";

const restaurantRouter = Router();

// Define routes using controller functions
restaurantRouter.get('/', getRestaurants);
restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/:id', getRestaurantById);
restaurantRouter.put('/:id', updateRestaurant);
restaurantRouter.delete('/:id', deleteRestaurant);

export default restaurantRouter;
