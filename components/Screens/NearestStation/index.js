/**
 * NearestStationScreen
 * Informa a estação mais próxima
 * @author Davi Souto
 * @since  17/06/2018
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import MapStation from './../../Stations/MapStation';

export default class ScreenNearestStation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (! this.props.station)
      return false;

    line_station = MapStation.LineStations[this.props.station.lines[0]];

    return (
      <View style={ styles.ScreenNearestStationContainer }>
        <Text style={ styles.text }>Você está próximo de</Text>
        <View style={ styles.containerStation }>
          <Text style={ [ styles.textStation, { color: line_station.hex_color } ] }>{ this.props.station.name.toUpperCase() }</Text>
        </View>
        <Text style={ styles.text }>Entre para começar</Text>
      </View>
    );
  }
}
