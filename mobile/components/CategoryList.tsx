import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Image, Text, Modal, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import FoodItemsList from './FoodItem';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface ICategories {
  _id: string;
  name: string;
  imageURL: string;
}

interface IFoodItem {
  _id: string,
  name: string;
  price: number;
  categoryId: string;
  restaurantId: string;
  imageUrl: string;
  ratings: number;
  description: string;
  deliveryTime: number;
}

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}


const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, sort, setSort }) => {
  const handleSort = (order: string) => {
    setSort(order);
    onClose();
  };

  const handleClear = () => {
    setSort('');
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={{ position: 'absolute', bottom: height * 0.23, left: 0.45 * width, zIndex: 50, padding: 10, backgroundColor: 'white', borderRadius: 50 }}>
          <AntDesign name="close" size={23} color="black" />
        </TouchableOpacity>
        <View style={styles.modalContent}>

          <TouchableOpacity onPress={handleClear} style={styles.closeButton}>

            <Text style={styles.filterOptionText}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSort('asc')} style={[styles.filterOption]}>
            <Text style={[styles.filterOptionText]}>Low to High</Text>
            {sort == 'asc' ? <AntDesign name="checkcircle" size={24} color="black" /> : <Entypo name="circle" size={24} color="black" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSort('desc')} style={[styles.filterOption]}>
            <Text style={[styles.filterOptionText]}>High to Low</Text>
            {sort == 'desc' ? <AntDesign name="checkcircle" size={24} color="black" /> : <Entypo name="circle" size={24} color="black" />}
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};


const CategoriesList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categoryData, setCategoryData] = useState<ICategories[]>([]);
  const [foodItems, setFoodItems] = useState<IFoodItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(false);
  const [foodLoading, setFoodLoading] = useState(false);

  useEffect(() => {

    fetchData();

  }, []);

  useEffect(() => {

    fetchFood();
  }, [selectedCategory, searchQuery, sort]);

  const fetchFood = async () => {
    setFoodLoading(true);
    try {
      const response = await axios.get(`https://foodio-mu.vercel.app/fooditems?category=${selectedCategory}&search=${searchQuery}&sort=${sort}`); // Added "=" sign
      setFoodItems(response.data);
      setFoodLoading(false);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://foodio-mu.vercel.app/categories/`);
      setCategoryData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{ width: width }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20, alignItems: 'center' }}
      >
        <CategoryItem
          category={''}
          icon={'https://i.ibb.co/vkWRKGr/all.png'}
          label={'All'}
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        {loading ? (
          <View style={{ marginLeft: 20 }}><ActivityIndicator size="large" color="black" /></View>
        ) : (
          categoryData.map((category) => (
            <CategoryItem
              key={category._id}
              category={category._id}
              icon={category.imageURL}
              label={category.name}
              selectedCategory={selectedCategory}
              onPress={handleCategoryPress}
            />
          ))
        )}


      </ScrollView>
      <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: 'gray',
          justifyContent: 'center',
          backgroundColor: "white",
          elevation: 2,
          borderRadius: 20,
          width: width * 0.7,
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}>
          {searchQuery.length != 0 ? <TouchableOpacity onPress={() => { setSearchQuery('') }}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity> : <Feather name="search" size={24} color="black" />}
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 10,
              fontSize: 18,
              marginHorizontal: 10
            }}
            placeholder="Search Your Cravings"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <View>
          <TouchableOpacity onPress={toggleModal} style={{ padding: 15, backgroundColor: 'black', borderRadius: 15 }}>
            <MaterialCommunityIcons name="tune-vertical" size={24} color="white" />
          </TouchableOpacity>
          <FilterModal visible={modalVisible} onClose={toggleModal} sort={sort} setSort={setSort} />
        </View>
      </View>
      {foodLoading ? <View style={{ marginTop: 30 }}><ActivityIndicator size="large" color="black" /></View> : <FoodItemsList foodItems={foodItems} />}


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


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingHorizontal: 30,
  },
  closeButton: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    gap: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  closeButtonText: {
    color: 'gray',
    fontSize: 16,
  },
  filterOption: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterOptionText: {
    fontSize: 20,

  },
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
  selectedOption: {
    backgroundColor: 'lightblue', // Customize the background color for selected option
  },
  selectedOptionText: {
    fontWeight: 'bold', // Make the text bold for selected option
  },
});

export default CategoriesList;





