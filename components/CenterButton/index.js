/**
 * CenterButton Component
 * @author Davi Souto
 * @since  15/06/2018
 */

 import React, { Component } from 'react';
 import { View, TouchableOpacity } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';

 import styles from './styles';

 import MapStation from './../Stations/MapStation';

 export default class CenterButton extends Component {

   render() {
     // Cor default do botão
     button_bg_color = '#FF9900';
     // button_bg_color = '#A8796A';

     // Buscar cor da estação para definir no botão
     if (this.props.lineStation && this.props.lineStation.hex_color) button_bg_color = this.props.lineStation.hex_color;
     else if (this.props.nearestStation)
     {
       line_station = MapStation.LineStations[this.props.nearestStation.lines[0]];
       button_bg_color = line_station.hex_color;
     }

     return (
       <View styles={ styles.CenterButtonContainer }>
         <View style={ styles.centerButtonBorder }></View>
         <TouchableOpacity onPress={ this.props.onPressCenterButton } style={ [ styles.centerButton, { backgroundColor: button_bg_color } ] } activeOpacity={ 0.8 } >
           <Icon name={ this.props.icon } size={75} color="white" />
         </TouchableOpacity>
       </View>
     );
   }
 }
