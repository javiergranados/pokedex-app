import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokeBallBackground: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export { appStyles };
