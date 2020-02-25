import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../style';

import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Button,
} from 'native-base';

// 3rd party libraries
import {Icon} from 'react-native-elements';

const LIGHT_GREEN = '#ddfff6';
const MEDIUM_GREEN = '#96ffe3';
const HARD_GREEN = '#53d1af';
const LIGHT_GRAY = '#ECECEC';
const WHITE = '#FFFFFF';

export default class About extends Component {
  render() {
    const viewStyles = [styles.splashContainer, {backgroundColor: 'white'}];
    const textStyles = {
      color: '#53d1af',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={styles.container}>
        <Header
          iosBarStyle="light-content"
          androidStatusBarColor={HARD_GREEN}
          style={{backgroundColor: HARD_GREEN}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" color="#ffffff" />
            </Button>
          </Left>

          <Body>
            <Title style={styles.h2}>FireCalc</Title>
          </Body>

          <Right>
            <Icon
              name="save"
              type="font-awesome"
              color="#ffffff"
              reverseColor="false"
              underlayColor="#1fb28a"
              iconStyle={styles.headerIcon}
              onPress={() => this.saveData()}
            />
          </Right>
        </Header>
      </View>
    );
  }
}
