import React from 'react';
import { Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appStyles } from '../theme/appTheme';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image source={require('../assets/pokeball.png')} style={appStyles.pokeBallBackground} />
      <Text style={{ ...appStyles.title, ...appStyles.globalMargin, top: top + 20 }}>Pokédex</Text>
    </>
  );
};

export default HomeScreen;
