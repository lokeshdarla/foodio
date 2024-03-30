# Foodio

Foodio is a mobile application built with React Native using Expo for the frontend and Express.js for the backend. It allows users to browse various food items, view details, and add them to their cart for ordering.

## Features

- Browse a variety of food items available.
- Filter based on price category and search by name
- View detailed information about each food item.


## Technologies Used

- React Native
- Expo
- Express.js
- Node.js
- MongoDB 

## Working Images

![Home Screen](./assets/Workingimages/1.png)
![Food Details](./assets/Workingimages/2.png)


## Getting Started

### Prerequisites

- Expo CLI

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd foodio
```

2. Install dependencies:

```bash
cd frontend
npm install
```


### Running the App



1. Start the Expo server for the frontend:

```bash
cd frontend
expo start
```

3. Follow the instructions in the Expo CLI to run the app on an emulator or physical device.

## Folder Structure

- `mobile`: Contains the React Native app built with Expo.
- `server`: Contains the Express.js backend for the app.

---

# Foodio Backend API

This repository contains the backend API for the Foodio application. The API is built with Express.js and is responsible for managing food items, categories, and restaurants.

## Controller Functions

### `getFoodItems`

- **Description**: Retrieves a list of food items based on optional query parameters such as sorting, filtering by category, and searching by name.
- **HTTP Method**: GET
- **Route**: `/api/fooditems`
- **Query Parameters**:
  - `sort`: Sorts the food items by price in ascending (`asc`) or descending (`desc`) order.
  - `category`: Filters the food items by category ID.
  - `search`: Searches for food items by name using a case-insensitive regular expression.
- **Response**:
  - Status Code: 200
  - Body: Array of food items with details including category and restaurant.


### `getFoodItemById`

- **Description**: Retrieves a single food item by its ID.
- **HTTP Method**: GET
- **Route**: `/api/fooditems/:id`
- **Response**:
  - Status Code: 200 (OK) if the food item is found.
  - Status Code: 404 (Not Found) if the food item is not found.
  - Body: JSON object representing the food item.

---

### `getCategories`

- **Description**: Retrieves a list of all categories.
- **HTTP Method**: GET
- **Route**: `/api/categories`
- **Response**:
  - Status Code: 200 (OK)
  - Body: Array of category objects.

### `getCategoryById`

- **Description**: Retrieves a single category by its ID.
- **HTTP Method**: GET
- **Route**: `/api/categories/:id`
- **Response**:
  - Status Code: 200 (OK) if the category is found.
  - Status Code: 404 (Not Found) if the category is not found.
  - Body: JSON object representing the category.
---
## Schemas

### Restaurant Schema

Represents a restaurant entity with the following fields:

- **name**: Name of the restaurant.
- **address**: Address of the restaurant.
- **imageUrl**: URL to the image of the restaurant.
- **ratings**: Ratings of the restaurant (default: 0).

### Category Schema

Represents a category entity with the following fields:

- **name**: Name of the category.
- **imageURL**: URL to the image representing the category.

### FoodItem Schema

Represents a food item entity with the following fields:

- **name**: Name of the food item.
- **price**: Price of the food item.
- **categoryId**: Reference to the category ID that the food item belongs to.
- **restaurantId**: Reference to the restaurant ID that offers the food item.
- **imageUrl**: URL to the image of the food item.
- **ratings**: Ratings of the food item (default: 0).
- **description**: Description of the food item.
- **deliveryTime**: Estimated delivery time for the food item.

### CartItem Schema

Represents an item in the user's cart with the following fields:

- **foodItemId**: Reference to the food item ID in the cart.
- **quantity**: Quantity of the food item.
- **price**: Price of a single unit of the food item.
- **totalPrice**: Total price of the cart item (quantity * price).

