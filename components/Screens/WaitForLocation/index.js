/**
 * ScreenWaitForLocation
 * Tela de loading
 * @author Davi Souto
 * @since  24/06/2018
 */

import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

export default class ScreenWaitForLocation extends Component {
  render() {
    return (
      <View style={ styles.ScreenWaitForLocationContainer }>
        <View style={ styles.loadingIndicatorContainer }>
          <ActivityIndicator size="large" color="#FF9900" />
        </View>
        <Text style={ [ styles.text, styles.textAguarde  ] }>Aguarde...</Text>
        <Text style={ [ styles.text, styles.textBuscandoInfo ] }>Estamos buscando informaçōes</Text>
      </View>
    );
  }
}
