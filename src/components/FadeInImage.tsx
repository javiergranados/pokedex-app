import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };

  const onError = () => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        ...(style as any),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && <ActivityIndicator style={{ position: 'absolute' }} color="grey" size={30} />}
      <Animated.Image
        source={{ uri }}
        onError={onError}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
