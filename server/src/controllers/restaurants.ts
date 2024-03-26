import { Request, Response } from 'express';
import { RestaurantModel } from '../models/schemas';
import { IRestaurant } from '../models/schemas';



export const getRestaurants = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantsData = await RestaurantModel.find();
    res.status(200).json(restaurantsData);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get restaurants', error: error.message });
  }
};


export const createRestaurant = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantData: IRestaurant = req.body;
    const restaurant = await RestaurantModel.create(restaurantData);
    res.status(201).json(restaurant);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to create restaurant', error: error.message });
  }
};

export const getRestaurantById = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantId: string = req.params.id;
    const restaurant = await RestaurantModel.findById(restaurantId);
    if (!restaurant) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      res.status(200).json(restaurant);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get restaurant', error: error.message });
  }
};

export const updateRestaurant = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantId: string = req.params.id;
    const updates: Partial<IRestaurant> = req.body;
    const restaurant = await RestaurantModel.findByIdAndUpdate(restaurantId, updates, { new: true });
    if (!restaurant) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      res.status(200).json(restaurant);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to update restaurant', error: error.message });
  }
};

export const deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantId: string = req.params.id;
    const restaurant = await RestaurantModel.findByIdAndDelete(restaurantId);
    if (!restaurant) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      res.status(204).send();
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to delete restaurant', error: error.message });
  }
};
