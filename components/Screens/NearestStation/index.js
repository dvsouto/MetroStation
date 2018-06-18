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
    if (! props.station)
    {
      props.station = {
        name: '?'
      }
    }

    super(props);

    if (props.station.lines)
      this.line = MapStation.LineStations[props.station.lines[0]];
  }

  render() {
    return (
      <View style={ styles.ScreenNearestStationContainer }>
        <Text style={ styles.text }>Você está próximo de</Text>
        <View style={ styles.containerStation }>
          <Text style={ [ styles.textStation, { color: this.line.hex_color } ] }>{ this.props.station.name.toUpperCase() }</Text>
        </View>
        <Text style={ styles.text }>Entre para começar</Text>
      </View>
    );
  }
}
