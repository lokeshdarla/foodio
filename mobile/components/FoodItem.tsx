import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const FoodItemList = () => {
  // Define data for food items
  const foodItems = [
    {
      name: 'Chicken Burger',
      price: '$12.99',
      image: require('../assets/ham1.png'),
      preparationTime: '20 min',
    },
    {
      name: 'Veggie Pizza',
      price: '$10.99',
      image: require('../assets/pizza.png'),
      preparationTime: '25 min',
    },
    {
      name: 'French Fries',
      price: '$5.79',
      image: require('../assets/fries.png'),
      preparationTime: '15 min',
    },
    {
      name: 'Chicken Biriyani',
      price: '$25.79',
      image: require('../assets/biriyani.png'),
      preparationTime: '30 min',
    },
    // Add more food items as needed
  ];

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {/* Map over the foodItems array and render FoodItem components dynamically */}
      {foodItems.map((item, index) => (
        <FoodItem key={index} item={item} />
      ))}
    </View>
  );
}

const FoodItem = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Display preparation time */}
      <View style={{ flexDirection: 'row', gap: 5, position: 'absolute', zIndex: 20, right: 5, top: 6, backgroundColor: '#EEF5FF', padding: 5, borderRadius: 30, elevation: 3 }}>
        <Ionicons name="alarm-outline" size={20} color="red" />
        <Text>{item.preparationTime}</Text>
      </View>
      {/* Display food item details */}
      <View style={{ elevation: 2, width: 170, padding: 10, borderRadius: 20, backgroundColor: 'white' }}>
        <Image style={{ width: 150, height: 160 }} source={item.image} />
        <Text style={{ fontSize: 17 }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>{item.price}</Text>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10, // Adjust padding as needed
  },
});

export default FoodItemList;
