import React from 'react';
import { View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { SearchInput } from '../components/SearchInput';
import { usePokemonList } from '../hooks/usePokemonList';
import { appStyles } from '../theme/appTheme';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemonList } = usePokemonList();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ ...appStyles.globalMargin, flex: 1, marginTop: Platform.OS === 'ios' ? top : top + 10 }}>
      <SearchInput pokemonList={pokemonList} />
    </View>
  );
};

export default SearchScreen;
