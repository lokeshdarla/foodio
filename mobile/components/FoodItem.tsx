import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

var { width, height } = Dimensions.get('window');
interface IFoodItem {
  name: string,
  price: string,
  image: any,
  preparationTime: string,
  description: string
}

const FoodItemList = () => {
  // Define data for food items
  const foodItems: IFoodItem[] = [
    {
      name: 'Chicken Burger',
      price: '$12.99',
      image: require('../assets/ham1.png'),
      preparationTime: '20 min',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid, iste, vel delectus quo rem dolores perspiciatis aut illo minus consequuntur quaerat doloribus possimus ducimus vitae, aliquam nostrum dicta maiores!'
    },
    {
      name: 'Veggie Pizza',
      price: '$10.99',
      image: require('../assets/pizza.png'),
      preparationTime: '25 min',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid, iste, vel delectus quo rem dolores perspiciatis aut illo minus consequuntur quaerat doloribus possimus ducimus vitae, aliquam nostrum dicta maiores!'
    },
    {
      name: 'French Fries',
      price: '$5.79',
      image: require('../assets/fries.png'),
      preparationTime: '15 min',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid, iste, vel delectus quo rem dolores perspiciatis aut illo minus consequuntur quaerat doloribus possimus ducimus vitae, aliquam nostrum dicta maiores!'
    },
    {
      name: 'Chicken Biriyani',
      price: '$25.79',
      image: require('../assets/biriyani.png'),
      preparationTime: '30 min',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid, iste, vel delectus quo rem dolores perspiciatis aut illo minus consequuntur quaerat doloribus possimus ducimus vitae, aliquam nostrum dicta maiores!'
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


interface IFoodItem {
  name: string,
  price: string,
  image: any,
  preparationTime: string,
  description: string
}



const FoodItem: React.FC<{ item: IFoodItem }> = ({ item }) => {
  const [showFoodView, setShowFoodView] = useState(false);

  const handlePress = () => {
    setShowFoodView(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 5, position: 'absolute', zIndex: 20, right: 0, top: 6, backgroundColor: '#EEF5FF', padding: 5, borderRadius: 30, elevation: 3 }}>
          <Ionicons name="alarm-outline" size={20} color="red" />
          <Text>{item.preparationTime}</Text>
        </View>
        <View style={{ elevation: 2, width: 170, padding: 10, borderRadius: 20, backgroundColor: 'white' }}>
          <Image style={{ width: 150, height: 160 }} source={item.image} />
          <Text style={{ fontSize: 17 }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 25, fontWeight: "600" }}>{item.price}</Text>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});





export default FoodItemList;
