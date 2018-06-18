/**
 * CurrentStationItemView
 * Item de estação atual do usuário exibido no mapa da estação atual
 * @author Davi Souto
 * @since  17/06/2018
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class CurrentStationItemView extends Component {
  render() {
    return (
      <View style={ [ styles.containerStation, { backgroundColor: this.props.lineStation.hex_color } ] } >
        <Text style={ styles.textInformation }>Você está aqui</Text>
        <Text style={ styles.textStation }>{ this.props.station.name.toUpperCase() }</Text>
      </View>
    );
  }
}
