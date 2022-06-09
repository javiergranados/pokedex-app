import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pokemon } from '../interfaces/pokemon';
import SearchScreen from '../screens/SearchScreen';
import PokemonScreen from '../screens/PokemonScreen';

type SearchTabStackkParamList = {
  SearchScreen: undefined;
  PokemonScreen: { pokemon: Pokemon; color: string };
};

const SearchTabStack = createStackNavigator<SearchTabStackkParamList>();

const SearchTabNavigator = () => {
  return (
    <SearchTabStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <SearchTabStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchTabStack.Screen name="PokemonScreen" component={PokemonScreen} />
    </SearchTabStack.Navigator>
  );
};

export default SearchTabNavigator;
