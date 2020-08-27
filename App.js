import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TripsScreen from './app/screens/TripsScreen';
import TripDetailsScreen from './app/screens/TripDetailsScreen';
import TripEditScreen from './app/screens/TripEditScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={TripsScreen} />
        <Stack.Screen name="Details" component={TripDetailsScreen} />
        <Stack.Screen name="TripEdit" component={TripEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
