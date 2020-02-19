import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from "../style";

class Detail extends Component {

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
            Olaaaaaa
          </Text>
        </View>
      );
    }
}

export default Detail;