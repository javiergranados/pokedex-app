import React from 'react';
import { ActivityIndicator, FlatList, Image } from 'react-native';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { appStyles } from '../theme/appTheme';
import { Pokemon } from '../interfaces/pokemon';

const HomeScreen = () => {
  const { pokemonList, loadPokemons } = usePokemonPaginated();

  const renderItem = ({ item }: { item: Pokemon }) => {
    return <Image source={{ uri: item.picture }} style={{ width: 100, height: 100 }} />;
  };

  return (
    <>
      <Image source={require('../assets/pokeball.png')} style={appStyles.pokeBallBackground} />
      <FlatList
        data={pokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        // infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
      />
    </>
  );
};

export default HomeScreen;
