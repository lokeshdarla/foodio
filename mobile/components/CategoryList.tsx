import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

type Category = 'burgers' | 'pizza' | 'fries' | 'biriyani';

const CategoriesList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('burgers');

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={{ width: width }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
      >
        <CategoryItem
          category="burgers"
          icon={require('../assets/ham1.png')}
          label="Burgers"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryItem
          category="pizza"
          icon={require('../assets/pizza.png')}
          label="Pizza"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryItem
          category="fries"
          icon={require('../assets/fries.png')}
          label="Fries"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryItem
          category="biriyani"
          icon={require('../assets/biriyani.png')}
          label="Biriyani"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
      </ScrollView>
    </View>
  );
}

interface CategoryItemProps {
  category: Category;
  icon: any; // Change the type of icon as needed
  label: string;
  selectedCategory: Category;
  onPress: (category: Category) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, icon, label, selectedCategory, onPress }) => {
  const isSelected = category === selectedCategory;

  return (
    <TouchableOpacity onPress={() => onPress(category)}>
      <View style={[styles.category, isSelected && styles.selectedCategory]}>
        <Image style={styles.categoryImage} source={icon} />
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
