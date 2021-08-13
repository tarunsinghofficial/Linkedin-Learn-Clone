import React from 'react';

import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';


import HomePage from '../screens/HomePage';
import Category from '../screens/Category';
import MyLearning from '../screens/MyLearning';
import Colors from '../components/Colors';

/* const Tab = createBottomTabNavigator(); */

function MainTabScreen() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: Colors.linkedin }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={Colors.linkedin} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Topics"
        component={Category}
        options={{
          tabBarLabel: 'Topics',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My learning"
        component={MyLearning}
        options={{
          tabBarLabel: 'My learning',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabScreen;