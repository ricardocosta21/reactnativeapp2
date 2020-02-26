/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Platform,
  Image,
  ScrollView,
  ToolbarAndroid,
  ImageBackground,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  Dimensions,
  ToastAndroid,
  YellowBox,
  TouchableOpacity,
} from 'react-native';

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

import styles from '../style';

// 3rd party libraries
import {Icon} from 'react-native-elements';

const LIGHT_GREEN = '#ddfff6';
const MEDIUM_GREEN = '#96ffe3';
const HARD_GREEN = '#53d1af';
const LIGHT_GRAY = '#ECECEC';
const WHITE = '#FFFFFF';
const TRANSPARENT = 'rgba(52, 52, 52, alpha)';

const SettingsArray = ['Setting1', 'Setting2', 'Setting3'];

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrencySymbol: '$',
    };
  }
  render() {
    const viewStyles = [styles.splashContainer, {backgroundColor: 'white'}];
    const textStyles = {
      color: '#53d1af',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <ImageBackground
        source={require('../asset/gradient.png')}
        style={styles.imageContainer}>
        <View style={styles.container}>
          <Header
            style={styles.headerContainer}
            androidStatusBarColor={TRANSPARENT}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="menu" color="#000000" />
              </Button>
            </Left>

            <Body>
              <Title style={styles.h2}>FireCalc</Title>
            </Body>

            <Right>
              <Icon
                name="save"
                type="font-awesome"
                color="#000000"
                reverseColor="false"
                iconStyle={styles.headerIcon}
                onPress={() => this.saveData()}
              />
            </Right>
          </Header>
        </View>

        <View style={styles.flatListSettingsContainer}>
          <ScrollView>
            <FlatList
              style={styles.flatList}
              data={SettingsArray}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({item, index}) => (
                <Text style={styles.flatListSettingsLeft}>{item}</Text>
              )}
            />
          </ScrollView>

          <Picker
            selectedValue={this.state.currencySymbol}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({currencySymbol: itemValue})
            }>
            <Picker.Item label="$" value="DOL" />
            <Picker.Item label="£" value="GBP" />
            <Picker.Item label="€" value="EUR" />
          </Picker>
        </View>
      </ImageBackground>
    );
  }
}
