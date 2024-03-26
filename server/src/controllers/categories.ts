import { Request, Response } from 'express';
import { CategoryModel } from '../models/schemas';
import { ICategory } from '../models/schemas';



export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoriesData = await CategoryModel.find();
    res.status(200).json(categoriesData);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get categories', error: error.message });
  }
};


export const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryData: ICategory = req.body;
    const category = await CategoryModel.create(categoryData);
    res.status(201).json(category);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to create category', error: error.message });
  }
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryId: string = req.params.id;
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to get category', error: error.message });
  }
};

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryId: string = req.params.id;
    const updates: Partial<ICategory> = req.body;
    const category = await CategoryModel.findByIdAndUpdate(categoryId, updates, { new: true });
    if (!category) {
      res.status(404).json({ message: 'Categorynot found' });
    } else {
      res.status(200).json(category);
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to update Category', error: error.message });
  }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoryId: string = req.params.id;
    const category = await CategoryModel.findByIdAndDelete(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(204).send();
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to delete category', error: error.message });
  }
};
