import React from 'react';
import { View, Text, Image, Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


var { width, height } = Dimensions.get('window')
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: Platform.OS === 'android' ? 50 : 0 }}>
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
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.dealContainer}>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <Text style={styles.discountText}>60% off</Text>
            <Image style={styles.image} source={require('../assets/hamburger/ham1.jpg')} />
          </View>
          <View style={styles.dealContainer}>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <Text style={styles.discountText}>60% off</Text>
            <Image style={styles.image} source={require('../assets/hamburger/ham1.jpg')} />
          </View>
          <View style={styles.dealContainer}>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <Text style={styles.discountText}>60% off</Text>
            <Image style={styles.image} source={require('../assets/hamburger/ham1.jpg')} />
          </View>
          <View style={styles.dealContainer}>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <Text style={styles.discountText}>60% off</Text>
            <Image style={styles.image} source={require('../assets/hamburger/ham1.jpg')} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
  },
  dealContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discountText: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
