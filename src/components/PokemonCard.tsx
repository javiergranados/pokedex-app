import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Pokemon } from '../interfaces/pokemon';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';

const FALLBACK_COLOR = 'grey';

const WINDOW_WIDTH = Dimensions.get('window').width;

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState<string>(FALLBACK_COLOR);
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: FALLBACK_COLOR,
      cache: true,
      key: pokemon.id,
    }).then((result) => {
      if (!isMounted) return;

      switch (result.platform) {
        case 'android':
          setBgColor(result.dominant || FALLBACK_COLOR);
          break;
        case 'ios':
          setBgColor(result.background);
          break;
        default:
          setBgColor(FALLBACK_COLOR);
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{ ...styles.container, backgroundColor: bgColor, width: WINDOW_WIDTH * 0.4 }}>
        <Text style={styles.name}>
          {pokemon.name}
          {'\n#' + pokemon.id}
        </Text>
        <View style={styles.pokeBallContainer}>
          <Image source={require('../assets/pokeball-white.png')} style={styles.pokeBall} />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginHorizontal: 10,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeBallContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
  pokeBall: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemon: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
