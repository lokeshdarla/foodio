import { Router } from "express";
import { createCartItem, getCartItemById, getCartItems, deleteCartItem, updateCartItem } from "../controllers/Cart";


export const CartRouter = Router();

CartRouter.get('/', getCartItems)
CartRouter.post('/', createCartItem)
CartRouter.get('/:id', getCartItemById)
CartRouter.put('/:id', updateCartItem)
CartRouter.delete('/:id', deleteCartItem)
