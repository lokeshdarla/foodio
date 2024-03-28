import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

var { width, height } = Dimensions.get('window');

interface IFoodItem {
  name: string;
  price: number;
  categoryId: string;
  restaurantId: string;
  imageUrl: string;
  ratings: number;
  description: string;
  deliveryTime: number;
}

interface FoodItemListProps {
  foodItems: IFoodItem[];
}

const FoodItemList: React.FC<FoodItemListProps> = ({ foodItems }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {foodItems.map((item, index) => (
        <FoodItem key={index} item={item} />
      ))}
    </View>
  );
}





const FoodItem: React.FC<{ item: IFoodItem }> = ({ item }) => {


  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 5, position: 'absolute', zIndex: 20, right: 0, top: 6, backgroundColor: '#EEF5FF', padding: 5, borderRadius: 30, elevation: 3 }}>
          <Ionicons name="alarm-outline" size={20} color="red" />
          <Text>{item.deliveryTime} min</Text>
        </View>
        <View style={{ elevation: 2, width: 170, padding: 10, borderRadius: 20, backgroundColor: 'white' }}>
          <Image style={{ width: 150, height: 160 }} source={{ uri: item.imageUrl }} />
          <Text style={{ fontSize: 15, marginBottom: 5, fontWeight: '600', textAlign: 'center' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.price}</Text>
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
