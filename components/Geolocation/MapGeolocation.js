
import { defaultGetGeolocationParams, defaultBackgroundGeolocationParams } from './ConfigGeolocation';

import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';

/**
 * Classe de controle de GPS
 * @author Davi Souto
 * @since  20/06/2018
 */
class MapGeolocation {
  // watch_position = null;
  onGetLocation = () => {};
  onErrorLocation = () => {};

  Start(){
    BackgroundGeolocation.configure(defaultBackgroundGeolocationParams);

    BackgroundGeolocation.on('location', this.onGetLocation, this.onErrorLocation);

    // BackgroundGeolocation.on('start', () => console.log('[DEBUG] BackgroundGeolocation has been started'));
    // BackgroundGeolocation.on('foreground', () => console.log('[INFO] App is in foreground'));
    // BackgroundGeolocation.on('background', () => console.log('[INFO] App is in background'));

    BackgroundGeolocation.start();

    this.GetCurrentLocation();

    // this.watch_position = navigator.geolocation.watchPosition(
    //   this.getGeolocation.bind(this),
    //   this.errorGeolocation.bind(this),
    //   this.geolocation_params
    // );
  }

  GetCurrentLocation() {
    BackgroundGeolocation.getCurrentLocation(
      this.onGetLocation,
      this.onErrorLocation,
      this.defaultGetGeolocationParams
    );

    // navigator.geolocation.getCurrentPosition(
    //   this.getGeolocation.bind(this),
    //   this.errorGeolocation.bind(this),
    //   this.geolocation_params
    // );
  }

  componentWillUnmount() {
    BackgroundGeolocation.stop();

    // if (this.watch_position)
    //   navigator.geolocation.clearWatch(this.watch_position);
  }
}

export default MapGeolocation;
