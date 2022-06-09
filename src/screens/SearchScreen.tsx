import React from 'react';
import { View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { appStyles } from '../theme/appTheme';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...appStyles.globalMargin, flex: 1, marginTop: Platform.OS === 'ios' ? top : top + 10 }}>
      <SearchInput />
    </View>
  );
};

export default SearchScreen;
