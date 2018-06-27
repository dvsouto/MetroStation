import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default class ScreenStationAlarm extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.topHeader }>
          <View style={ styles.titleApp }>
            <Text style={ styles.titleAppText }>Alarme</Text>
          </View>
        </View>
        <Text>Oi</Text>
      </View>
    );
  }
}
