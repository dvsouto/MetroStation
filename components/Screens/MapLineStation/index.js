/**
 * ScreanMapStation
 * Mapa da linha de estação atual
 * @author Davi Souto
 * @since  17/06/2018
 */

import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import MapStation from './../../Stations/MapStation';
import StationItemView from './../../StationItemView';
import CurrentStationItemView from './../../CurrentStationItemView';

export default class ScreanMapLineStation extends Component {

  constructor(props) {
    super(props);

    this.MapStation = new MapStation();
  }

  componentDidMount() {
    this.stations = this.MapStation.GetObjectStationsForLine(this.props.user_station.line.id);
  }

  render() {
    return (
      <View style={ styles.ScreenMapLineStationContainer }>
        <FlatList
          data={ this.stations }
          keyExtractor={(item) => item.id}
          renderItem={ ({ item }) => {
            if (this.props.user_station.station.id == item.id)
            {
              return (<CurrentStationItemView station={ item } lineStation={ this.props.user_station.line } />);
            } else {
              return (<StationItemView station={ item } lineStation={ this.props.user_station.line } />);
            }
           }
         }
        />
      </View>
    );
  }
}
