import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/welcomeScreen'
import HomeScreen from '../screens/homeScreen';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FoodViewScreen from '../screens/FoodViewScreen';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'white', padding: 5, borderRadius: 50, height: 70, marginBottom: 20, marginHorizontal: 2 },
        tabBarActiveTintColor: '#430A5D',
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size + 1} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={FoodViewScreen}
        options={{
          headerTitle: 'Explore',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomWidth: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shop" size={size + 1} color={color} />
          ),
          headerTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          headerTitle: 'List your NFT',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomWidth: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={size + 1} color={color} />
          ),
          headerTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          headerTitle: 'Notifications',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomWidth: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size + 1} color={color} />
          ),
          headerTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  );
};


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={MainNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
