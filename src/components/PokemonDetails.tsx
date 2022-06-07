import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { PokemonDetails as PokemonDetailsInterface } from '../interfaces/pokemonDetails';
import { appStyles } from '../theme/appTheme';

interface Props {
  details: PokemonDetailsInterface;
}

export const PokemonDetails = ({ details }: Props) => {
  const types = (
    <>
      <Text style={styles.title}>Types</Text>
      <View style={{ flexDirection: 'row' }}>
        {details.types.map(({ type }) => (
          <Text style={{ ...styles.text, marginRight: 10 }} key={type.name}>
            {type.name}
          </Text>
        ))}
      </View>
    </>
  );

  const weight = (
    <>
      <Text style={styles.title}>Weight</Text>
      <Text style={styles.text}>{details.weight}Kg</Text>
    </>
  );

  const sprites = (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image source={{ uri: details.sprites.front_default }} style={styles.sprite} />
      <Image source={{ uri: details.sprites.back_default }} style={styles.sprite} />
      <Image source={{ uri: details.sprites.front_shiny }} style={styles.sprite} />
      <Image source={{ uri: details.sprites.back_shiny }} style={styles.sprite} />
    </ScrollView>
  );

  const baseSkills = (
    <>
      <Text style={styles.title}>Base skills</Text>
      <View style={{ flexDirection: 'row' }}>
        {details.abilities.map(({ ability }) => (
          <Text style={{ ...styles.text, marginRight: 10 }} key={ability.name}>
            {ability.name}
          </Text>
        ))}
      </View>
    </>
  );

  const moves = (
    <>
      <Text style={styles.title}>Moves</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.moves}>
          {details.moves.map(({ move }) => (
            <Text style={{ ...styles.text, marginRight: 10 }} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
    </>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={{ ...appStyles.globalMargin, marginTop: 370 }}>
        {types}
        {weight}
        {sprites}
      </View>
      <View style={appStyles.globalMargin}>{baseSkills}</View>
      <View style={appStyles.globalMargin}>{moves}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 19,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  moves: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
