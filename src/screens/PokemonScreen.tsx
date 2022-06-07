import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'PokemonScreen'> {}

const PokemonScreen = ({ route }: Props) => {
  const { pokemon, color } = route.params;

  return (
    <View>
      <Text style={{ color }}>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonScreen;
