import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import Category from '../screens/Category';
import MyLearning from '../screens/MyLearning';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: 'false' }} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="MyLearning" component={MyLearning} />
    </Stack.Navigator>
)

export default AuthNavigator;