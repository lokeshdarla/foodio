import mongoose, { Schema, Document } from 'mongoose';

interface IRestaurant extends Document {
  name: string;
  address: string;
  categoryIds: string[];
  imageUrl: string;
}

interface ICategory extends Document {
  name: string;
}

interface IFoodItem extends Document {
  name: string;
  price: number;
  categoryId: string;
  restaurantId: string;
  imageUrl: string;
  ratings: number;
  deliveryTime: number;
}

const restaurantSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  categoryIds: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  imageUrl: { type: String, required: true }
});

const categorySchema: Schema = new Schema({
  name: { type: String, required: true }
});

const foodItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  imageUrl: { type: String, required: true },
  ratings: { type: Number, default: 0 },
  deliveryTime: { type: Number, required: true }
});

export const RestaurantModel = mongoose.model<IRestaurant>('Restaurant', restaurantSchema);

export const CategoryModel = mongoose.model<ICategory>('Category', categorySchema);

export const FoodItemModel = mongoose.model<IFoodItem>('FoodItem', foodItemSchema);
