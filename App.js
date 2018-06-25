/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Vibration,
  Alert
} from 'react-native';

// Icones
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// Componentes da aplicação
import CenterButton from './components/CenterButton';
import RoundedButton from './components/RoundedButton';

// Funçōes de geolocalização
import MapGeolocation from './components/Geolocation/MapGeolocation';

// Funçōes de controle de localização do usuário
import UserLocation from './components/Geolocation/UserLocation';

// Telas
import ScreenNearestStation from './components/Screens/NearestStation';
import ScreenMapLineStation from './components/Screens/MapLineStation';
import ScreenWaitForLocation from './components/Screens/WaitForLocation';

export default class App extends Component {
  MapGeolocation = new MapGeolocation();
  UserLocation = new UserLocation();

  constructor(props) {
    super(props);

    this.state = {
      user_location: {
        latitude: null,
        longitude: null,
        altitude: null,
        speed: null,
        accuracy: null
      },
      user_station: {
        station: null,
        line: null
      },
      nearest_station: null
    }
  }

  componentDidMount(){
    this.MapGeolocation.onGetLocation = this.getGeolocation.bind(this);
    this.MapGeolocation.onErrorLocation = this.errorGeolocation.bind(this);

    this.MapGeolocation.Start();
  }

  onPressCenterButton() {
    this.MapGeolocation.GetCurrentLocation();

    alert(JSON.stringify(this.state));
  }

  /**
   * Recupera as informacoes de geolocalizacao do usuario
   * @param Object position
   */
  getGeolocation(position) {
    // Localização do usuário
    user_location = {
      latitude: parseFloat(position.latitude),
      longitude: parseFloat(position.longitude),
      altitude: parseFloat(position.altitude),
      speed: parseFloat(position.speed || 0),
      accuracy: parseFloat(position.accuracy)
    };

    update_user_status = this.UserLocation.getUserStationStatus(this.state, user_location);

    this.setState(update_user_status);
  }

  /**
   * Trata erros ao consultar a geolocalizacao do usuario
   * @param Object error
   */
  errorGeolocation(error) {
    // @TODO
    // alert(JSON.stringify(error));
  }

  /////////////////////////////////////////////////////////////////////

  render() {

    station_screen = false;

    if      (this.state.user_station.station) station_screen = (<ScreenMapLineStation user_station={ this.state.user_station } ref="ScreenMapLineStation" />);
    else if (this.state.nearest_station)      station_screen = (<ScreenNearestStation station={ this.state.nearest_station } ref="ScreenNearestStation" />);
    else                                      station_screen = (<ScreenWaitForLocation />);

    return (
      <View style={ styles.container }>
        { Platform.OS === 'ios' && <View style={{ height: 20, backgroundColor: '#ff9900'}}></View> }

        <View style={ styles.topHeader }>
          <View style={ styles.titleApp }>
            <Text style={ styles.titleAppText }>MetroStation</Text>
          </View>

          {/*<Icon name="ios-alarm-outline" size={75} color="white" style={{ left: 30, top: 22, position: 'absolute' }} />*/}
          {/*<Icon name="ios-settings-outline" size={75} color="white" style={{ right: 30, top: 22, position: 'absolute' }} />*/}
        </View>

        <CenterButton icon='subway' lineStation={ this.state.user_station.line } nearestStation={ this.state.nearest_station } onPressCenterButton={ this.onPressCenterButton.bind(this) } />

        {/*
          <Text style={{ paddingTop: 100 }}>Latitude: { this.state.user_location.latitude }</Text>
          <Text>Longitude: { this.state.user_location.longitude }</Text>
        */}
        <ScrollView ref="scrollViewStations" overScrollMode="always" showsVerticalScrollIndicator={ false } style={ styles.scrollViewContainer } contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          { station_screen }
        </ScrollView>
      </View>
    );
  }
}

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
