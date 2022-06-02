import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { appStyles } from '../theme/appTheme';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonCard } from '../components/PokemonCard';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemonList, loadPokemons } = usePokemonPaginated();

  const renderItem = ({ item }: { item: Pokemon }) => {
    return <PokemonCard pokemon={item} />;
  };

  return (
    <>
      <Image source={require('../assets/pokeball.png')} style={appStyles.pokeBallBackground} />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={pokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...appStyles.title,
                ...appStyles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}
            >
              Pokédex
            </Text>
          }
          renderItem={renderItem}
          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
        />
      </View>
    </>
  );
};

export default HomeScreen;
