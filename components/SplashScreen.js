
import React, {Component} from 'react';
import styles from "../style";

import {
  Text,
  View
} from "react-native";

export default class SplashScreen extends React.Component {
    render() {
      const viewStyles = [
        styles.splashContainer,
        { backgroundColor: 'white' }
      ];
      const textStyles = {
        color: '#53d1af',
        fontSize: 40,
        fontWeight: 'bold'
      };
  
      return (
        <View style={viewStyles}>
          <Text style={textStyles}>
            Splash Screen
          </Text>
        </View>
      );
    }
  }