/**
 * StationItemView
 * Item de estação exibido no mapa da estação atual
 * @author Davi Souto
 * @since  17/06/2018
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class StationItemView extends Component {
  render() {
    return (
      <View style={ styles.containerStation} >
        <View style={ [ styles.viewIconStation, { backgroundColor: this.props.lineStation.hex_color } ] } >
          <Icon name="subway" size={25} color="white" />
        </View>
        <View style={ styles.viewTextStation } >
          <Text style={ [ styles.textStation, { color: this.props.lineStation.hex_color } ] }>{ this.props.station.name }</Text>
        </View>
      </View>
    );
  }
}
