import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
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
  separatorHeader: {
    position: 'absolute',
    width: 6,
    height: 45,
    zIndex: 1,
    backgroundColor: '#fff',
    left: (Dimensions.get('window').width / 2) - 3,
  },

  scrollViewContainer: {
    paddingTop: 90,
    zIndex: -1
  }
});

export default styles;
