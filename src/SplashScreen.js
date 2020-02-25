import React, {Component} from 'react';
import styles from '../style';

import {ImageBackground, Text, View} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    // const viewStyles = [styles.splashContainer, {backgroundColor: 'white'}];
    // const textStyles = {
    //   color: '#53d1af',
    //   fontSize: 40,
    //   fontWeight: 'bold',
    // };

    return (
      <ImageBackground
        source={require('../asset/gradient.png')}
        style={styles.imageContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Age</Text>
        </View>
      </ImageBackground>
    );
  }
}
