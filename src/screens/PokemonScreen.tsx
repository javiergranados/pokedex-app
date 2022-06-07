import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParamList, 'PokemonScreen'> {}

const PokemonScreen = ({ route, navigation }: Props) => {
  const { pokemon, color } = route.params;
  const { top } = useSafeAreaInsets();

  return (
    <View>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ ...styles.backButton, top: top + 5 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        <Text style={{ ...styles.title, top: top + 40 }}>
          {pokemon.name + '\n'}#{pokemon.id}
        </Text>
        <Image source={require('../assets/pokeball-white.png')} style={styles.pokeball} />
        <FadeInImage uri={pokemon.picture} style={styles.pokemon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  title: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemon: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
});

export default PokemonScreen;
