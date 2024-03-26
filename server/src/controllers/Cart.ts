import { Request, Response } from 'express';
import { CartItemModel } from '../models/schemas';
import { ICartItem } from '../models/schemas';

export const getCartItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartItemsData = await CartItemModel.find();
    res.status(200).json(cartItemsData);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get cart items', error: error.message });
  }
};

export const createCartItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartItemData: ICartItem = req.body;
    const cartItem = await CartItemModel.create(cartItemData);
    res.status(201).json(cartItem);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to create cart item', error: error.message });
  }
};

export const getCartItemById = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartItemId: string = req.params.id;
    const cartItem = await CartItemModel.findById(cartItemId);
    if (!cartItem) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json(cartItem);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get cart item', error: error.message });
  }
};

export const updateCartItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartItemId: string = req.params.id;
    const updates: Partial<ICartItem> = req.body;
    const cartItem = await CartItemModel.findByIdAndUpdate(cartItemId, updates, { new: true });
    if (!cartItem) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json(cartItem);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to update cart item', error: error.message });
  }
};

export const deleteCartItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartItemId: string = req.params.id;
    const cartItem = await CartItemModel.findByIdAndDelete(cartItemId);
    if (!cartItem) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(204).send();
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to delete cart item', error: error.message });
  }
};
