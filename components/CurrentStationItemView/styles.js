import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  containerStation: {
    // flexDirection: 'row',
    marginVertical: 34,
    width: Dimensions.get('window').width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a86e8',
    paddingVertical: 12,
    left: 50,
    borderRadius: 16
  },
  textInformation: {
    fontSize: 16,
    marginBottom: 6,
    color: '#f2f2f2'
  },
  textStation: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center'
  }
});

export default styles;
