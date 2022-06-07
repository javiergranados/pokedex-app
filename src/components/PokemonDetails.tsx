import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { PokemonDetails as PokemonDetailsInterface } from '../interfaces/pokemonDetails';

interface Props {
  details: PokemonDetailsInterface;
}

export const PokemonDetails = ({ details }: Props) => {
  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={styles.container}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {details.types.map(({ type }) => (
            <Text style={{ ...styles.text, marginRight: 10 }} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 19,
  },
  spritesContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
