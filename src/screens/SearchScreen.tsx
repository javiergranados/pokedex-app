import React from 'react';
import { View, StyleSheet, Platform, ActivityIndicator, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonList } from '../hooks/usePokemonList';
import { appStyles } from '../theme/appTheme';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemonList } = usePokemonList();

  if (isLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{ ...appStyles.globalMargin, flex: 1, marginTop: Platform.OS === 'ios' ? top : top + 10 }}>
      <SearchInput pokemonList={pokemonList} />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
