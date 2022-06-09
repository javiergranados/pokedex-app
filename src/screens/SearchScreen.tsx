import React from 'react';
import { View, FlatList, Text, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonList } from '../hooks/usePokemonList';
import { Pokemon } from '../interfaces/pokemon';
import { appStyles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemonList } = usePokemonList();

  const renderItem = ({ item }: { item: Pokemon }) => {
    return <PokemonCard pokemon={item} />;
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ ...appStyles.globalMargin, flex: 1 }}>
      <SearchInput
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? top : top + 30,
          zIndex: 999,
          width: screenWidth - 40,
        }}
      />
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
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 50 : top + 80,
            }}
          >
            Pokédex
          </Text>
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchScreen;
