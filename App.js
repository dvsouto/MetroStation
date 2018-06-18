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
  Vibration
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// Componentes da aplicação
import CenterButton from './components/CenterButton';
import RoundedButton from './components/RoundedButton';

// Funçōes de estaçōes
import MapStation from './components/Stations/MapStation';

// Telas
import ScreenNearestStation from './components/Screens/NearestStation';
import ScreenMapLineStation from './components/Screens/MapLineStation';

export default class App extends Component {
  watch_position = null;
  geolocation_params = Platform.select({
    ios: {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 1000,
      distanceFilter: 10
    },
    android: {
      enableHighAccuracy: true,
      timeout: 5000
    }
  })

  MapStation = new MapStation();

  constructor(props) {
    super(props);

    this.state = {
      user_location: {
        latitude: null,
        longitude: null
      },
      user_station: {
        station: null,
        line: null
      },
      nearest_station: null,
    }
  }

  componentDidMount() {
    this.doGetCurrentPosition();

    this.watch_position = navigator.geolocation.watchPosition(
      this.getGeolocation.bind(this),
      this.errorGeolocation.bind(this),
      this.geolocation_params
    );
  }

  componentWillUnmount() {
    if (this.watch_position)
      navigator.geolocation.clearWatch(this.watch_position);
  }

  doGetCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      this.getGeolocation.bind(this),
      this.errorGeolocation.bind(this),
      this.geolocation_params
    );
  }

  /**
   * Recupera as informacoes de geolocalizacao do usuario
   * @param Object position
   */
  getGeolocation(position) {
    // Localização do usuário
    user_location = {
      latitude: parseFloat(position.coords.latitude),
      longitude: parseFloat(position.coords.longitude),
    };

    // Estação mais próxima do usuário
    nearest_station = this.MapStation.NearestStation(this.state.user_location);

    // Linha e estação do usuário
    user_station = {
      // Se a estação mais próxima estiver a menos de (defaultProximityStation) metros do usuário,
      // definir como a estação atual
      station: (nearest_station.distance <= this.MapStation.defaultProximityStation) ? nearest_station : this.state.user_station.station,
      line: this.state.user_station.line, // Manter linha de estação do usuário
    };

    // alert(JSON.stringify(user_station));

    // Se o usuário estiver em uma estação mas não tiver uma linha setada, definir a primeira Linha
    // da estação como a linha do usuário
    if (user_station.station && ! user_station.line)
      user_station.line = this.MapStation.GetLineStationById(user_station.station.lines[0]);

    // Se o usuário estiver em uma estação e tiver uma linha definida mas essa linha não pertence
    // a estação do usuário, definir a primeira Linha da estação como a linha do usuário
    if (user_station.station && user_station.line && ! Object.keys(user_station.station.lines).indexOf(user_station.line.id) )
      user_station.line = this.MapStation.GetLineStationById(user_station.station.lines[0]);

    this.setState({
      user_location,
      nearest_station,
      user_station
    });
  }

  /**
   * Trata erros ao consultar a geolocalizacao do usuario
   * @param Object error
   */
  errorGeolocation(error) {
    alert(JSON.stringify(error));
    // @TODO
  }

  /////////////////////////////////////////////////////////////////////

  render() {

    station_screen = false;

    if      (this.state.user_station.station) station_screen = (<ScreenMapLineStation user_station={ this.state.user_station } />);
    else if (this.state.nearest_station)      station_screen = (<ScreenNearestStation station={ this.state.nearest_station } />);
    else                                      station_screen = (<Text>Aguarde...</Text>);

    return (
      <View style={ styles.container }>
        {
          /* Barra de status do IOS */
          Platform.OS === 'ios' && <View style={{ height: 20, backgroundColor: '#ff9900'}}></View>
        }

        <View style={ styles.topHeader }>
          <View style={ styles.titleApp }>
            <Text style={ styles.titleAppText }>MetroStation</Text>
          </View>

          {/*<Icon name="ios-alarm-outline" size={75} color="white" style={{ left: 30, top: 22, position: 'absolute' }} />*/}
          {/*<Icon name="ios-settings-outline" size={75} color="white" style={{ right: 30, top: 22, position: 'absolute' }} />*/}
        </View>

        <CenterButton icon='subway' lineStation={ this.state.user_station.line } />


        <ScrollView style={ styles.scrollViewContainer } contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          { station_screen }

          {/*
          <Text>Latitude: { this.state.user_location.latitude }</Text>
          <Text>Longitude: { this.state.user_location.longitude }</Text>

          <Text>Estação mais próxima: { this.MapStation.NearestStation(this.state.user_location) }</Text>
          */}
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
