import React, { Component } from 'react';
import { createTabNavigator, TabBarBottom } from 'react-navigation';

import ScreenHome from './../Screens/Home';
import ScreenStationAlarm from './../Screens/StationAlarm';

import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Abas
 */
const navigatorTabs = {
  Home: {
    screen: ScreenHome,
    title: 'Estações',
    icon: 'subway',
  },
  StationAlarm: {
    screen: ScreenStationAlarm,
    title: 'Notificações',
    icon: 'bell-o',
  }
};

//////////////////////////////////////////////////////////

const tabBarOptions = {
  activeTintColor: "#ff9900",
  inactiveTintColor: "#888",
  style: {
    height: 58,
    paddingVertical: 5,
    backgroundColor: "#fafafa"
  },
  labelStyle: {
    fontSize: 11,
    lineHeight: 18,
    fontFamily: "CircularStd-Book"
  },
}

const Navigator = createTabNavigator(
  navigatorTabs,
  {
    tabBarOptions: tabBarOptions,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      const icon = navigatorTabs[routeName].icon || "";
      const title = navigatorTabs[routeName].title || routeName;

      return {
        tabBarIcon: ({ focused, tintColor }) => {
          return (<Icon name={ icon } size={22} focused={ focused } color={ tintColor } style={{ paddingTop: 6 }} />);
        },
        title: title
      };
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true,
    lazy: false,
    initialRouteName: 'Home'
  }
);

export default Navigator;
