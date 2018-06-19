import Stations from './TheStations';
import LineStations from './LineStations';
import { MapObject } from './../General';

/**
 * Classe de funçōes das estaçōes
 */
class MapStation {
  static Stations = Stations;
  static LineStations = LineStations;

  defaultProximityStation = 150;

  /**
   * Calcular a distancia entre dois pontos
   * @param Object location_1
   * @param Object location_2
   * @param string type_distance
   * @return float
   * @author Davi Souto
   * @since  16/08/2018
   */
  RadiusDistance(location_1, location_2, type_distance) {
    if (type_distance === undefined)
      type_distance = 'm';

    const RADIUSMILES = 3961;
    const RADIUSKILOMETERS = 6373;
    const RADIUSMETERS = Math.round(RADIUSKILOMETERS * 1000);

    latR1 = this._deg2rad(location_1.latitude),
    lonR1 = this._deg2rad(location_1.longitude),
    latR2 = this._deg2rad(location_2.latitude),
    lonR2 = this._deg2rad(location_2.longitude),

    latDifference = latR2 - latR1,
    lonDifference = lonR2 - lonR1,

    a  = Math.pow(Math.sin(latDifference / 2), 2) + Math.cos(latR1) * Math.cos(latR2) * Math.pow(Math.sin(lonDifference / 2), 2);
    c  = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    if      (type_distance == 'mi') return this._round(c * RADIUSMILES);
    else if (type_distance == 'm')  return Math.round(this._round(c * RADIUSMETERS));
    else                            return this._round(c * RADIUSKILOMETERS);
  }

  /**
   * Calcular menor distancia entre um ponto e um array de pontos
   * @param Object location_1
   * @param Object station_location
   * @param string type_distance
   * @return float
   * @author Davi Souto
   * @since  16/08/2018
   */
  MinorDistance(location_1, location_2, type_distance) {
    if (type_distance === undefined)
      type_distance = 'm';

    if (Array.isArray(location_2))
    {
      minor_distance_point = false;
      minor_distance = 0;

      for(i_location = 0; i_location < location_2.length; i_location++)
      {
        point_distance = this.RadiusDistance(location_1, location_2[i_location], type_distance);

        if (! minor_distance || point_distance < minor_distance)
        {
          minor_distance_point = location_2[i_location];
          minor_distance = point_distance;
        }
      }

      return minor_distance;
    } else return this.RadiusDistance(location_1, location_2, type_distance);
  }

  /**
   * Retorna a estação mais próxima
   * @param Object user_location
   * @author Davi Souto
   * @since  16/08/2018
   */
   NearestStation(user_location) {
      the_station = false;

      Object.keys(MapStation.Stations).map((k_station) => {
        ln_station = MapStation.Stations[k_station];
        ln_station.distance = this.MinorDistance(user_location, ln_station.location, 'm');
        // ln_station.distance = this.RadiusDistance(user_location, ln_station.location, 'm');

        if (! the_station || (ln_station.distance < the_station.distance))
          the_station = ln_station;
      });

      return the_station;
   }

   /**
    * Retorna a lista de estaçōes da linha
    * @param string line_station_id
    * @return Array
    * @author Davi Souto
    * @since  17/08/2018
    */
   GetListStationsForLine(line_station_id) {
     return MapStation.LineStations[line_station_id].stations;
   }

   /**
    * Retorna um objeto com as estaçōes da linha
    * @param string line_station_id
    * @return Object
    * @author Davi Souto
    * @since  17/08/2018
    */
   GetObjectStationsForLine(line_station_id) {
     let list_lines = MapStation.LineStations[line_station_id].stations;
     let stations = [];

     list_lines.map(id_line => {
       stations.push(this.GetStationById(id_line));
     });

     return stations;
   }

   /**
    * Retorna a estação buscando pelo id
    * @param string station_id
    * @return Object
    * @author Davi Souto
    * @since  17/08/2018
    */
   GetStationById(station_id) {
     return MapStation.Stations[station_id];
   }

   /**
    * Retorna a linha de estaçōes buscando pelo id
    * @param string line_station_id
    * @return Object
    * @author Davi Souto
    * @since  17/08/2018
    */
   GetLineStationById(line_station_id) {
     return MapStation.LineStations[line_station_id];
   }


   //////////////////////////////////////////////////////////////////

  _deg2rad(deg) {
    var rad = deg * Math.PI / 180;
    return rad;
  };

  _round(x) {
    return Math.round(x * 10) / 10;
  };
}

export default MapStation;
