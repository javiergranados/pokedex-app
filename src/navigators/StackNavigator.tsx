import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  PokemonScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="PokemonScreen" component={PokemonScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
