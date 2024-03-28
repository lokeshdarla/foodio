import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';

const { width } = Dimensions.get('window');

interface ICategories {
  name: string;
  imageURL: string;
}

const CategoriesList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('burgers');
  const [categoryData, setCategoryData] = useState<ICategories[]>([]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://foodio-mu.vercel.app/categories/`);

      setCategoryData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ width: width }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
      >
        {categoryData.map((category) => (
          <CategoryItem
            key={category.name}
            category={category.name}
            icon={category.imageURL}
            label={category.name}
            selectedCategory={selectedCategory}
            onPress={handleCategoryPress}
          />
        ))}
      </ScrollView>
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
    <TouchableOpacity onPress={() => onPress(label)}>
      <View style={[styles.category, isSelected && styles.selectedCategory]}>
        <Image style={styles.categoryImage} source={{ uri: icon }} />
        <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: '#430A5D90',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 50,
  },
  selectedCategory: {
    backgroundColor: '#430A5D',
    opacity: 1,
  },
  categoryImage: {
    height: 40,
    width: 40,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 18,
    color: 'white',
  },
  selectedCategoryText: {
    fontWeight: 'bold',
  },
});

export default CategoriesList;
