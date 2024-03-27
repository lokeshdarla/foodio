import React from 'react';
import { View, Text, Image, Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DealsSection from '../components/DealsSection';
import CategoriesList from '../components/CategoryList';
import FoodItem from '../components/FoodItem';
import FoodItemList from '../components/FoodItem';


var { width, height } = Dimensions.get('window')
export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', width: width, alignItems: 'center', paddingTop: Platform.OS === 'android' ? 50 : 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width * 0.9 }}>
          <Ionicons name="menu" size={24} color="black" />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Text>3024, Joes Road, 12207</Text>
            <AntDesign name="down" size={24} color="black" />
          </View>
          <Image
            source={{
              uri:
                'https://lh5.googleusercontent.com/proxy/gXCFTaGwqD6OXUkJWgLLGw5vAFyJUTnFQjRGF9N_n9dH7alWLedGpd_6mPfAMrJWyVw5fmx_4zMNhUnP-CFnDVe7HLbbWrAQgpgrf7aR32eoZ3euxAX48BrCXtGajHMd',
            }}
            style={{ width: 50, height: 50, borderRadius: 20 }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 10, paddingVertical: 30 }}>
          <Text style={{ fontSize: 45, width: width * 0.87, textAlign: 'left' }}>Order Some Delicious Food 🔥</Text>
        </View>
        <DealsSection />
        <View style={{ width: width * 0.9, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ fontSize: 25 }}>Categories</Text>
          <Text>View all</Text>
        </View>
        <CategoriesList />

        <FoodItemList />
      </View>
    </ScrollView>
  );
}


