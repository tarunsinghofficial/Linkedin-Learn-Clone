import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Highlight from './components/Highlight';
import NavigationBar from './components/NavigationBar';
import HomePage from './screens/HomePage';
import Category from './screens/Category';
import MyLearning from './screens/MyLearning';
import MainTabScreen from './screens/MainTabScreen';

import AuthNavigator from './navigation/AuthNavigator';
import Colors from './components/Colors';

export default function App() {

  const Stack = createStackNavigator(); 
  const FeedNavigator = () => (
    <Stack.Navigator 
        initialRouteName="Home"     
    >
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="MyLearning" component={MyLearning}  />
    </Stack.Navigator>
  )

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.linkedin,
        tabBarInactiveBackgroundColor: 'white',
        tabBarInactiveTintColor: 'black',
        headerShown: false
      }}>
      <Tab.Screen 
        name="Home" 
        component={FeedNavigator} 
        options={{
          tabBarIcon: ({ size, focused }) => <MaterialCommunityIcons name="home" size={size} color={focused ? '#0274b3' : 'gray'} /> 
        }} />
      <Tab.Screen 
        name="Topics" 
        component={Category} 
        options={{
          tabBarIcon: ({ size, focused }) => <MaterialCommunityIcons name="format-list-bulleted" size={size} color={focused ? '#0274b3' : 'gray'} />
      }} />
      <Tab.Screen 
        name="My Learning" 
        component={MyLearning} 
        options={{
          tabBarIcon: ({ size, focused }) => <MaterialCommunityIcons name="book-open" size={size} color={focused ? '#0274b3' : 'gray'} />
      }} />
    </Tab.Navigator>
  )

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}