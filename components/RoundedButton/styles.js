import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  roundedButtonParent: {
    position: 'relative',
    left: 10,
    top: 14
  },
  roundedButtonBorder: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 1
  },
  roundedButtonContent: {
    height: 54,
    width: 54,
    left: 3,
    top: 3,
    backgroundColor: '#b9b9b9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 2
  }
});

export default styles;
