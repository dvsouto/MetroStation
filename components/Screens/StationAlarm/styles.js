import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },

  topHeader: {
    height: 122,
    backgroundColor: '#ff9900',
    // alignItems: 'center',
    // justifyContent: 'center',
    zIndex: 0
  },
  titleApp: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 6
  },
  titleAppText: {
    fontSize: 22,
    color: 'white'
  },
});

export default styles;
