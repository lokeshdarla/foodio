import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ToastAndroid, ActivityIndicator, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/appNavigation';
var { width, height } = Dimensions.get('window');



type Props = NativeStackScreenProps<RootStackParamList, 'FoodView'>
type ScreenNavigationProp = Props['navigation']
type ScreenRouteProp = Props['route']
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';

interface IMenuItem {
  _id: string;
  name: string;
  price: number;
  categoryId: string;
  restaurantId: string;
  imageUrl: string;
  ratings: number;
  description: string;
  deliveryTime: number;
  category: ICategory;
  restaurant: IRestaurant;
}

interface ICategory {
  _id: string;
  name: string;
  imageUrl: string;
}

interface IRestaurant {
  _id: string;
  name: string;
  address: string;
  imageUrl: string;
  ratings: number;
}


const FoodViewScreen: React.FC<Props> = () => {
  const route = useRoute<ScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const { ItemId } = route.params
  const [loading, setloading] = useState(false);
  const [foodData, setFoodData] = useState<IMenuItem | null>(null);
  useEffect(() => {
    fetchData();
  }, []);


  function showToast() {
    ToastAndroid.show('Added to Cart!', ToastAndroid.LONG);
  }

  const fetchData = async () => {
    setloading(true);
    try {
      const response = await axios.get(`https://foodio-mu.vercel.app/fooditems/${ItemId}`);
      setFoodData(response.data);
      setloading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <ImageBackground source={require('../assets/bg_food.png')} style={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.push('HomeScreen')} style={{ position: 'absolute', top: 80, left: 20, padding: 10, backgroundColor: "white", borderRadius: 50, paddingHorizontal: 15, zIndex: 50 }}>
        <FontAwesome5 name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.container}>
        {!loading ? (
          <Image style={styles.foodImage} source={{ uri: foodData?.imageUrl }} />
        ) : (
          <View style={[styles.foodImage, { alignItems: 'center', justifyContent: 'center' }]}>
            <ActivityIndicator size={50} color='black' />
          </View>
        )}




        {/* Food Details */}
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={styles.foodName}>{foodData?.name}</Text>
              <Text style={{ fontSize: 15 }}>{foodData?.restaurant?.name}</Text>
              <Text></Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: "center" }}>
              <Text style={{ fontSize: 22 }}>Rs</Text>
              <Text style={{ fontSize: 35, fontWeight: "600" }} >{foodData?.price}</Text>

            </View>

          </View>
          <View style={styles.infoContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8, gap: 40, backgroundColor: '#FBF9FA', paddingHorizontal: 30, paddingVertical: 13, borderRadius: 10 }}>
              <View>
                <Text style={styles.rating}>Rating</Text>
                <Text>{foodData?.ratings}</Text>
              </View>
              <View>
                <Text style={styles.rating}>Delivery</Text>
                <Text>Free</Text>
              </View>
              <View>
                <Text style={styles.rating}>Time</Text>
                <Text>{foodData?.deliveryTime} min</Text>
              </View>
            </View>

          </View>
          <View style={{ gap: 4 }}>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>
              Description
            </Text>
            <Text style={styles.description}>
              {foodData?.description}
            </Text>
          </View>
          <TouchableOpacity
            onPress={showToast}
            style={{
              flexDirection: 'row',
              marginTop: 'auto',
              position: 'absolute',
              bottom: 62,
              left: 35,
              width: width * 0.8,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              paddingVertical: 15,
              paddingHorizontal: 20,
              backgroundColor: '#430A5D'
            }}
          >
            <FontAwesome name="cart-plus" size={35} color="white" />
            <Text style={{ fontSize: 18, color: 'white' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}


export default FoodViewScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodImage: {
    height: height * 0.45,
    width: height * 0.5,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: width,
    height: height * 0.5
  },
  infoContainer: {
    paddingVertical: 10,

    alignItems: 'center',
    justifyContent: 'center'
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#FF5722',
  },
  rating: {
    fontSize: 18,
    color: 'black',
    fontWeight: "600",
    marginBottom: 5,
  },
  delivery: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 5,
  },
  cookTime: {
    fontSize: 18,
    color: '#FFC107',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#31363F'
  },
});
