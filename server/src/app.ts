// src/app.ts
import express from 'express';
import cors from "cors"
import restaurantRouter from './routes/restaurant';
import categoryRouter from './routes/categories';
import FoodItemRouter from './routes/food_item';
import { CartRouter } from './routes/cart';

export const app = express();
app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/restaurants', restaurantRouter)
app.use('/categories', categoryRouter)
app.use('/fooditems', FoodItemRouter)
app.use('/cart', CartRouter)

