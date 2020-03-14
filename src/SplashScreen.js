import React, {Component} from 'react';
import styles from '../style';

import {ImageBackground, Text, View} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../asset/angryimg.png')}
        style={styles.imageContainer}>
        <View style={styles.container} />
      </ImageBackground>
    );
  }
}
