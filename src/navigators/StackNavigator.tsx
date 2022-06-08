import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { Pokemon } from '../interfaces/pokemon';

export type RootStackParamList = {
  HomeScreen: undefined;
  PokemonScreen: { pokemon: Pokemon; color: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="PokemonScreen" component={PokemonScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
