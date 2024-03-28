import mongoose, { Schema, Document } from 'mongoose';

export interface IRestaurant extends Document {
  name: string;
  address: string;
  imageUrl: string;
  ratings: number;
}

export interface ICategory extends Document {
  name: string;
  imageURL: string;
}

export interface IFoodItem extends Document {
  name: string;
  price: number;
  categoryId: string;
  restaurantId: string;
  imageUrl: string;
  ratings: number;
  description: string;
  deliveryTime: number;
}

export interface ICartItem extends Document {
  productId: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

const restaurantSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ratings: { type: Number, default: 0 }
});

const categorySchema: Schema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true }
});

export const foodItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  imageUrl: { type: String, required: true },
  ratings: { type: Number, default: 0 },
  description: { type: String, required: true },
  deliveryTime: { type: Number, required: true }
});

export const cartItemSchema: Schema = new Schema({
  foodItemId: { type: Schema.Types.ObjectId, ref: 'FoodItem', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  totalPrice: { type: Number, required: true }
});




export const CartItemModel = mongoose.model<ICartItem>('CartItem', cartItemSchema);

export const RestaurantModel = mongoose.model<IRestaurant>('Restaurant', restaurantSchema);

export const CategoryModel = mongoose.model<ICategory>('Category', categorySchema);

export const FoodItemModel = mongoose.model<IFoodItem>('FoodItem', foodItemSchema);
