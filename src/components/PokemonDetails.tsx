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
          <Text style={styles.text} key={type.name}>
            {type.name}
          </Text>
        ))}
      </View>
    </>
  );

  const weight = (
    <>
      <Text style={styles.title}>Weight</Text>
      <Text style={styles.text}>{details.weight / 10}Kg</Text>
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
          <Text style={styles.text} key={ability.name}>
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
            <Text style={styles.text} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
    </>
  );

  const stats = (
    <>
      <Text style={styles.title}>Stats</Text>
      {details.stats.map((stat, i) => (
        <View style={styles.stat} key={stat.stat.name + i}>
          <Text style={{ ...styles.text, width: 150 }}>{stat.stat.name}</Text>
          <Text style={{ ...styles.text, fontWeight: 'bold' }}>{stat.base_stat}</Text>
        </View>
      ))}
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
      <View style={appStyles.globalMargin}>{stats}</View>
      <View style={styles.footer}>
        <Image source={{ uri: details.sprites.front_default }} style={styles.sprite} />
      </View>
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
    marginRight: 10,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  moves: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});
