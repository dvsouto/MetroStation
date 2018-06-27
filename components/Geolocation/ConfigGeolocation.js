/**
 * Configuraçōes do GPS
 * @author Davi Souto
 * @since  21/06/2018
 */

import { Platform } from 'react-native';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

const defaultGetGeolocationParams = Platform.select({
  ios: {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0, //1000,
    distanceFilter: 15
  },
  android: {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0, //1000,
    distanceFilter: 15
  }
});

const defaultBackgroundGeolocationParams = Platform.select({
  ios: {
    desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    distanceFilter: 15,
    debug: false,
    startOnBoot: false,
    stopOnTerminate: true,
    locationProvider: BackgroundGeolocation.RAW_PROVIDER,
    interval: 10000,
    maxLocations: 1000,
  },
  android: {
    desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    distanceFilter: 15,
    debug: false,
    startOnBoot: false,
    stopOnTerminate: true,
    locationProvider: BackgroundGeolocation.RAW_PROVIDER,
    interval: 10000,
    maxLocations: 1000,
    notificationTitle: 'MetroStation',
    notificationText: 'Estamos viajando com você :)',
    startForeground: false
  }
});

export {
  defaultGetGeolocationParams,
  defaultBackgroundGeolocationParams
};
