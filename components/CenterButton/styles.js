import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  CenterButtonContainer: {
    zIndex: 10,
  },
  centerButton: {
    height: 150,
    width: 150,
    backgroundColor: '#ddd',
    position: 'absolute',
    top:-75,
    left: (Dimensions.get('window').width / 2) - 75,
    zIndex: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  centerButtonBorder: {
    height: 160,
    width: 160,
    backgroundColor: '#eee',
    position: 'absolute',
    top: -80,
    left: (Dimensions.get('window').width / 2) - 80,
    zIndex: 10,
    borderRadius: 100
  },
});

export default styles;
