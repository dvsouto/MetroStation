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

var PushNotification = require('react-native-push-notification');

// Icones
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// Componentes da aplicação
import CenterButton from './components/CenterButton';
import RoundedButton from './components/RoundedButton';

// Funçōes de estaçōes
import MapStation from './components/Stations/MapStation';

// Funçōes de geolocalização
import MapGeolocation from './components/Geolocation/MapGeolocation';

// Telas
import ScreenNearestStation from './components/Screens/NearestStation';
import ScreenMapLineStation from './components/Screens/MapLineStation';

export default class App extends Component {
  MapStation = new MapStation();
  MapGeolocation = new MapGeolocation();

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
      nearest_station: null
    }

    PushNotification.configure({
        onNotification: function(notification) {
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        popInitialNotification: true,
        requestPermissions: true,
    });
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
    };

    // Estação mais próxima do usuário
    nearest_station = this.MapStation.NearestStation(user_location);

    trigger_newUserStation = false;

    // Verificar se mudou de estação
    if ((nearest_station.distance <= this.MapStation.defaultProximityStation) && (this.state.user_station.station) && (this.state.user_station.station.id != nearest_station.id))
      trigger_newUserStation = true;

    // Linha e estação do usuário
    user_station = {
      // Se a estação mais próxima estiver a menos de (defaultProximityStation) metros do usuário,
      // definir como a estação atual
      station: (nearest_station.distance <= this.MapStation.defaultProximityStation) ? nearest_station : this.state.user_station.station,
      line: this.state.user_station.line, // Manter linha de estação do usuário
    };

    // Se o usuário estiver em uma estação mas não tiver uma linha setada, definir a primeira Linha
    // da estação como a linha do usuário
    if (user_station.station && ! user_station.line)
      user_station.line = this.MapStation.GetLineStationById(user_station.station.lines[0]);

    // Se o usuário estiver em uma estação e tiver uma linha definida mas essa linha não pertence
    // a estação do usuário, definir a primeira Linha da estação como a linha do usuário
    if (user_station.station && user_station.line && (user_station.station.lines.indexOf(user_station.line.id) <= -1) )
      user_station.line = this.MapStation.GetLineStationById(user_station.station.lines[0]);

    if (trigger_newUserStation)
      this.newUserStation(user_station);

    this.setState({
      user_location,
      nearest_station,
      user_station
    });
  }

  /**
   * Ao mudar de estação
   * @param object user_station
   * @param
   */
  newUserStation(user_station){
    push_message = "Você chegou na estação " + user_station.station.name.toUpperCase();

    PushNotification.localNotification({
        /* Android Only Properties */
        ticker: push_message, // (optional)
        autoCancel: true, // (optional) default: true
        largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
        smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
        // bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
        // subText: "This is a subText", // (optional) default: none
        color: user_station.line.hex_color, // (optional) default: system default
        vibrate: true, // (optional) default: true
        vibration: 2000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        // tag: 'some_tag', // (optional) add tag to message
        // group: "group", // (optional) add group to message
        // ongoing: false, // (optional) set whether this is an "ongoing" notification

        /* iOS only properties */
        // alertAction: // (optional) default: view
        // category: // (optional) default: null
        // userInfo: // (optional) default: null (object containing additional notification data)

        /* iOS and Android properties */
        title: "MetroStation", // (optional)
        message: push_message, // (required)
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    });
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

    if      (this.state.user_station.station) station_screen = (<ScreenMapLineStation user_station={ this.state.user_station } />);
    else if (this.state.nearest_station)      station_screen = (<ScreenNearestStation station={ this.state.nearest_station } />);
    else                                      station_screen = (<Text>Aguarde...</Text>);

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
        <ScrollView overScrollMode="always" showsVerticalScrollIndicator={ false } style={ styles.scrollViewContainer } contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
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
