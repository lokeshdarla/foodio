import { Dimensions } from 'react-native'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
var { width, height } = Dimensions.get('window')
export default function DealsSection() {
  return (
    <View
      style={{ height: height * 0.25 }}
    >
      <ScrollView
        horizontal={true}

        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.dealContainer}>
          <View>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <View style={{ width: 70 }}>
              <Text style={styles.discountText}>60% off</Text>
            </View>
          </View>

          <Image style={styles.image} source={{ uri: 'https://i.ibb.co/z7hR8fZ/burger.png' }} />
        </View>
        <View style={styles.dealContainer}>
          <View>
            <Text style={styles.titleText}>
              Exciting offer waiting for you
            </Text>
            <View style={{ width: 70 }}>
              <Text style={styles.discountText}>60% off</Text>
            </View>
          </View>

          <Image style={styles.image} source={{ uri: 'https://i.ibb.co/sFSxyn4/pizza.png' }} />
        </View>
        <View style={styles.dealContainer}>
          <View>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <View style={{ width: 70 }}>
              <Text style={styles.discountText}>60% off</Text>
            </View>
          </View>
          <Image style={styles.image} source={{ uri: 'https://i.ibb.co/Rcgvk1N/fries.png' }} />
        </View>
        <View style={styles.dealContainer}>
          <View>
            <Text style={styles.titleText}>
              Weekend Special Deal
            </Text>
            <View style={{ width: 70 }}>
              <Text style={styles.discountText}>60% off</Text>
            </View>
          </View>

          <Image style={styles.image} source={{ uri: 'https://i.ibb.co/zsYHGpd/biriyani.png' }} />
        </View>
      </ScrollView>
    </View>

  )
}



const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
    height: height * 0.25,
    gap: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  dealContainer: {
    padding: 10,
    borderRadius: 20,
    width: width * 0.5,
    backgroundColor: '#7F27FF',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: -20,
    elevation: 5,
    marginRight: 40,
  },
  titleText: {
    fontSize: 20,
    width: width * 0.3,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  discountText: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
