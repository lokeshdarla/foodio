import { Request, Response } from 'express';
import { FoodItemModel, CategoryModel, RestaurantModel } from '../models/schemas';
import { IFoodItem } from '../models/schemas';

export const getFoodItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const sortParam = req.query.sort;
    const categoryParam = req.query.category;
    const searchParam = req.query.search;

    let sortCriteria: any = {};

    if (sortParam === 'asc') {
      sortCriteria = { price: 1 };
    } else if (sortParam === 'desc') {
      sortCriteria = { price: -1 };
    }

    let filterCriteria: any = {};
    if (categoryParam) {
      filterCriteria = { categoryId: categoryParam };
    }

    let searchCriteria: any = {};
    if (searchParam) {
      searchCriteria = { name: { $regex: searchParam, $options: 'i' } };
    }

    const foodItems: IFoodItem[] = await FoodItemModel.find({
      ...filterCriteria,
      ...searchCriteria
    }).sort(sortCriteria);

    const foodItemsWithDetails = await Promise.all(foodItems.map(async (foodItem) => {
      const category = await CategoryModel.findById(foodItem.categoryId);
      const restaurant = await RestaurantModel.findById(foodItem.restaurantId);
      return { ...foodItem.toJSON(), category, restaurant };
    }));

    res.status(200).json(foodItemsWithDetails);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get food items', error: error.message });
  }
};




export const createFoodItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const foodItemData: IFoodItem = req.body;
    const foodItem = await FoodItemModel.create(foodItemData);
    res.status(201).json(foodItem);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to create food item', error: error.message });
  }
};

export const getFoodItemById = async (req: Request, res: Response): Promise<void> => {
  try {
    const foodItemId: string = req.params.id;
    const foodItem = await FoodItemModel.findById(foodItemId);
    if (!foodItem) {
      res.status(404).json({ message: 'Food item not found' });
    } else {
      res.status(200).json(foodItem);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get food item', error: error.message });
  }
};

export const updateFoodItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const foodItemId: string = req.params.id;
    const updates: Partial<IFoodItem> = req.body;
    const foodItem = await FoodItemModel.findByIdAndUpdate(foodItemId, updates, { new: true });
    if (!foodItem) {
      res.status(404).json({ message: 'Food item not found' });
    } else {
      res.status(200).json(foodItem);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to update food item', error: error.message });
  }
};

export const deleteFoodItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const foodItemId: string = req.params.id;
    const foodItem = await FoodItemModel.findByIdAndDelete(foodItemId);
    if (!foodItem) {
      res.status(404).json({ message: 'Food item not found' });
    } else {
      res.status(204).send();
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to delete food item', error: error.message });
  }
};
