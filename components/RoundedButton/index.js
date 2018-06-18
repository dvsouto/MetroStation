/**
 * RoundedButton Component
 * @author Davi Souto
 * @since  15/06/2018
 */

 import React, { Component } from 'react';
 import { Platform, Dimensions, View } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';

 import styles from './styles';

 export default class CenterButton extends Component {

   render() {
     return (
       <View style={ styles.roundedButtonParent }>
         <View style={ styles.roundedButtonBorder }></View>
         <View style={ styles.roundedButtonContent }>
           <Icon name="clock-o" size={30} color="white" />
         </View>
       </View>
     );
   }
 }
