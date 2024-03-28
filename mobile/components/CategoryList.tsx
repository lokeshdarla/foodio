import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import FoodItemsList from './FoodItem';
import { Feather } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

interface ICategories {
  _id: string;
  name: string;
  imageURL: string;
}

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

const CategoriesList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categoryData, setCategoryData] = useState<ICategories[]>([]);
  const [foodItems, setFoodItems] = useState<IFoodItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchFood();
  }, [selectedCategory, searchQuery]);

  const fetchFood = async () => {
    try {
      const response = await axios.get(`https://foodio-mu.vercel.app/fooditems?category=${selectedCategory}&search=${searchQuery}`); // Added "=" sign
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://foodio-mu.vercel.app/categories/`);
      setCategoryData(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <View style={{ width: width }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
      >
        <CategoryItem
          category={''}
          icon={'https://i.ibb.co/vkWRKGr/all.png'}
          label={'All'}
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        {categoryData.map((category) => (
          <CategoryItem
            key={category._id}
            category={category._id}
            icon={category.imageURL}
            label={category.name}
            selectedCategory={selectedCategory}
            onPress={handleCategoryPress}
          />
        ))}
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginHorizontal: 35,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 20
      }}>
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 10,
            fontSize: 20,
          }}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        {searchQuery.length != 0 ? <TouchableOpacity onPress={() => { setSearchQuery('') }}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity> : <Feather name="search" size={24} color="black" />}



      </View>
      <FoodItemsList foodItems={foodItems} />
    </View>
  );
};

interface CategoryItemProps {
  category: string;
  icon: string;
  label: string;
  selectedCategory: string;
  onPress: (category: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, icon, label, selectedCategory, onPress }) => {
  const isSelected = category === selectedCategory;

  return (
    <TouchableOpacity onPress={() => onPress(category)}>
      <View style={[styles.category, isSelected && styles.selectedCategory]}>
        <Image style={styles.categoryImage} source={{ uri: icon }} />
        <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>{label.slice(0, 8)}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  category: {
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  selectedCategory: {
    backgroundColor: '#7F27FF',
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    textAlign: 'center',
  },
  selectedCategoryText: {
    fontWeight: 'bold',
    color: 'white'
  },
});

export default CategoriesList;
