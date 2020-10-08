import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { AppStackParamList } from '../types';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
