// Funçōes de estaçōes
import MapStation from './../Stations/MapStation';

import PushNotification from 'react-native-push-notification';

/**
 * Classe de controle de localização do usuário
 * @author Davi Souto
 * @since  24/06/2018
 */
class UserLocation {
  MapStation = null;
  triggerNewUSerStation = false;

  oldUserStation = false;
  oldUserStationLines = [];

  constructor(){
    this.MapStation = new MapStation();

    PushNotification.configure({
        onNotification: function(notification) {
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        popInitialNotification: true,
        requestPermissions: true,
    });
  }

  /**
   * Verificar localização do usuário
   */
  getUserStationStatus(state, user_location){
    // Estação mais próxima do usuário
    nearest_station = this.MapStation.NearestStation(user_location);

    user_station = {
      station: state.user_station.station,
      line: state.user_station.line
    };

    user_station.station = this.isNewStation(nearest_station, state.user_station.station);
    user_station.line = this.isNewLineStation(user_station.station, user_station.line)

    if (this.triggerNewUSerStation)
      this.onNewUserStation(user_station);

    // Retornar novo status
    return {
      user_location,
      nearest_station,
      user_station
    };
  }

  /**
   * Verificar se o usuário mudou de estação
   * @param Object nearest_station
   * @param Object station
   * @return Object
   * @author Davi Souto
   * @since  24/06/2018
   */
  isNewStation(nearest_station, station){
    defaultProximityStation = this.MapStation.defaultProximityStation;

    // Verificar se a estação mais próxima está dentro do limite de proximidade para
    // atualizar o user station para a estação atual
    if (nearest_station.distance <= defaultProximityStation)
    {
      // Definir a antiga estação e linhas
      this.oldUserStation = station;
      this.oldUserStationLines = (station) ? station.lines : [];

      if (station && (station.id != nearest_station.id))
        this.triggerNewUSerStation = true;

      station = nearest_station;
    }

    return station;
  }

  /**
   * Verificar se o usuário mudou de linha de estação
   * @param Object user_station
   * @param Object user_line
   * @return Object
   * @author Davi Souto
   * @since  24/06/2018
   */
  isNewLineStation(user_station, user_line)
  {
    // Se o usuário estiver em uma estação mas não tiver uma linha setada, definir a primeira Linha
    // da estação como a linha do usuário
    if (user_station && ! user_line)
    {
      user_line = this.MapStation.GetLineStationById(user_station.lines[0]);

      return user_line
    }

    // Se o usuário estiver em uma estação e tiver uma linha definida mas essa linha não pertence
    // a estação do usuário, identificar a nova estação do usuário
    if (user_station && user_line && (user_station.lines.indexOf(user_line.id) <= -1) )
    {
      if (this.oldUserStationLines.length > 0)
      {
        // Percorrer linhas da nova estação
        for(i_verify_station = 0; i_verify_station < user_station.lines.length; i_verify_station++)
        {
          this_verify_station = user_station.lines[i_verify_station];

          // Verificar se na nova estação tem a linha da verificação atual
          if (this.oldUserStationLines.indexOf(this_verify_station) >= 0)
          {
            user_line = this.MapStation.GetLineStationById(this_user_station_line);

            return user_line;
          }
        }
      }

      // Se não atender, definir a primeira Linha da estação como a linha do usuário
      user_line = this.MapStation.GetLineStationById(user_station.lines[0]);
    }

    return user_line;
  }

  /**
   * Ao mudar de estação
   * @param object user_station
   * @param
   */
  onNewUserStation(user_station){
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

    this.triggerNewUSerStation = false;
  }
}

export default UserLocation;
