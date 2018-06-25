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

    this.state = {
      stations: null
    }
  }

  componentDidMount() {
    this.setState({
      stations: this.MapStation.GetObjectStationsForLine(this.props.user_station.line.id)
    });
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.user_station.line.id != this.props.user_station.line.id)
    {
      this.setState({
        stations: this.MapStation.GetObjectStationsForLine(this.props.user_station.line.id)
      });
    }
  }

  render() {
    if (! this.state.stations)
      return false;

    return (
      <View ref="ScreenMapLineStationContainer" style={ styles.ScreenMapLineStationContainer }>
        <FlatList
          data={ this.state.stations }
          keyExtractor={(item) => item.id}
          extraData={this.props.user_station}
          ref="FlatListStations"
          renderItem={ ({ item }) => {
            if (this.props.user_station.station.id == item.id)
            {
              return (<CurrentStationItemView ref="CurrentStationItemView" station={ item } lineStation={ this.props.user_station.line } />);
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
