import React from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/bg.png')}>
        <FontAwesome5 style={styles.logo} name="carrot" size={30} color="orange" />
        <Text style={styles.title}>Foodio</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: width
  },
  title: {
    zIndex: 50,
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: height * 0.3,
    left: width * 0.38,
    fontWeight: '600'
  },
  logo: {
    zIndex: 50,
    color: 'orange',
    fontSize: 40,
    position: 'absolute',
    top: height * 0.23,
    left: width * 0.44,
    fontWeight: '600'
  },
  button: {
    position: 'absolute',
    top: height * 0.9,
    left: width * 0.1,
    zIndex: 50,
    backgroundColor: '#430A5D',
    width: width * 0.8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "600",
    color: 'white',
    textAlign: 'center',
    elevation: 5,
    shadowColor: 'black'
  }
});
