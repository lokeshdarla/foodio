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
import RestaurantsScreen from '../screens/RestaurantsScreen';
import CartScreen from '../screens/CartScreen';
import NotificationScreen from '../screens/NotificationScreen';


export type RootStackParamList = {
  HomeView: undefined;
  Welcome: undefined;
  HomeScreen: undefined;
  FoodView: { ItemId: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator();


const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'white', padding: 5, borderRadius: 50, height: 70, marginBottom: 20, marginHorizontal: 2 },
        tabBarActiveTintColor: '#7F27FF',
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="HomeScreenMain"
        component={HomeScreenNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size + 1} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          headerTitle: 'Restaurants',
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
        component={CartScreen}
        options={{
          headerTitle: 'Cart',
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
        component={NotificationScreen}
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

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HomeView'>
      <Stack.Screen name="HomeView" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FoodView" component={FoodViewScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppNavigation;

