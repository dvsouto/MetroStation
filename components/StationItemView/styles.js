import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  containerStation: {
    flexDirection: 'row',
    marginVertical: 34,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewIconStation: {
    backgroundColor: '#4a86e8',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 40,
    alignSelf: 'center',
    position: 'absolute',
    left: (Dimensions.get('window').width / 4)
  },
  viewTextStation: {
    paddingVertical: 12,
    marginLeft: 16,
    position: 'absolute',
    left: (Dimensions.get('window').width / 4) + 67
    // marginLeft: 67,
    // position: 'absolute',
  },
  textStation: {
    fontSize: 20,
    color: '#4a86e8',
    textAlign: 'left'
  }
});

export default styles;
