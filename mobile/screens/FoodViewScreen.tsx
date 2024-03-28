import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import { FontAwesome5 } from '@expo/vector-icons';

export default function FoodViewScreen() {
  return (
    <ImageBackground source={require('../assets/bg_food.png')} style={styles.backgroundImage}>
      <View style={{ position: 'absolute', top: 80, left: 20 }}>
        <FontAwesome5 name="chevron-left" size={24} color="black" />
      </View>
      <View style={styles.container}>
        <Image style={styles.foodImage} source={require('../assets/ham1.png')} />

        {/* Food Details */}
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={styles.foodName}>Chicken Burger</Text>
              <Text style={{ fontSize: 15 }}>Burger King</Text>
              <Text></Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: "center" }}>
              <Text style={{ fontSize: 22 }}>$</Text>
              <Text style={{ fontSize: 32, fontWeight: "600" }} >12</Text>
              <Text style={{ fontSize: 22 }}>.99</Text>
            </View>

          </View>
          <View style={styles.infoContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.8, gap: 40, backgroundColor: '#FBF9FA', paddingHorizontal: 30, paddingVertical: 13, borderRadius: 10 }}>
              <View>
                <Text style={styles.rating}>Rating</Text>
                <Text>4.5</Text>
              </View>
              <View>
                <Text style={styles.rating}>Delivery</Text>
                <Text>Free</Text>
              </View>
              <View>
                <Text style={styles.rating}>Time</Text>
                <Text>20 min</Text>
              </View>
            </View>

          </View>
          <View style={{ gap: 4 }}>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>
              Description
            </Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin magna at nulla consequat, id aliquet enim tristique. Vivamus auctor r Maecenas sed ultricies tortor, in suscipit mauris.
            </Text>
          </View>
          <TouchableOpacity
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
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
    fontSize: 23,
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
