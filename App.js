/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import styles from './style'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Platform,Image, ScrollView, ImageBackground,ToolbarAndroid, Text, View, TextInput, FlatList, Dimensions} from 'react-native';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
const WHITE = "#FFFFFF";

export default class App extends Component {
  
  state = {
    isFocused: false,
    age: '',
    investment: '',
    income: '',
    spending: '',
    savings: '',
    incGrowth: '',
    retSpending: '',
    wrRate: '',
    invReturns: '',
    fireNumber: ''
};

handleFocus = event => {
  this.setState({ isFocused: true });
  if (this.props.onFocus) {
    this.props.onFocus(event);
  }
};

handleBlur = event => {
  this.setState({ isFocused: false });
  if (this.props.onBlur) {
    this.props.onBlur(event);
  }
};

onActionSelected(position) {
}

handleTextChanged(text) {
  console.warn('text changed !');
  this.setState({ text });
}

  render() {

    const { isFocused } = this.state;
    const { onFocus, onBlur, otherProps } = this.props;
    const {age} = this.state;    

    // const data = [
    //   {id: 'Age', value: '0'},
    //   {id: 'Investments', value: '0'},
    //   {id: 'Income(-Tax)', value: '0'},      
    //   {id: 'Spending', value: '0'},
    //   {id: 'Savings', value: '0'},      
    //   {id: 'Income Growth', value: '0'},
    // ];

    return (
    
      <View style={styles.container}>

      <ToolbarAndroid
        style={styles.toolbar}
        title="FireCalc"
        onActionSelected={this.onActionSelected}
        titleColor= "#FFFFFF"        
        actions = {[
          {title: "Log out", show: "never"}
        ]}
      />

      <ScrollView>
{/*        
      <View>
      {
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View  style = {styles.itemContainer}>
              <TextInput
                label='Name'
                placeholder={item.id}                
                placeholderTextColor = "#133420"     
                keyboardType = "numeric"
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.itemInput}
                onChangeText={(textAge) => this.setState({textAge})}
                value={this.state.textAge}
              />
            </View>
          )}
          keyExtractor={item => item.id} />
      }
      </View> */}

      {/* <ImageBackground source={require('./asset/trianglify.png')} style={styles.container}> */}
     
      <View style={styles.MoneyRowText}>       
        <View style={styles.h2}>
          <Text style={styles.text}>Age</Text>
          <TextInput
            label='Name'
            maxLength={2}    
            keyboardType = "numeric"
            selectionColor={BLUE}
            underlineColorAndroid={
              isFocused ? BLUE : LIGHT_GRAY
            }
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={styles.textInput}
            onChangeText={(age) => this.setState({age})}
            value={this.state.age}
          />
        </View>
        <View style={styles.h2}>
          <Text style={styles.text}>Investments</Text>
          <TextInput
            label='Name'    
            keyboardType = "numeric"
            selectionColor={BLUE}
            underlineColorAndroid={
              isFocused ? BLUE : LIGHT_GRAY
            }
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={styles.textInput}
            onChangeText={(investment) => this.setState({investment})}
            value={this.state.investment}
          />
        </View>
      </View>

      <View style={styles.MoneyRowText}>
        <View style={styles.h2}>
            <Text style={styles.text}>Income(-Tax)</Text>
            <TextInput
              label='Name'  
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(income) => this.setState({income})}
              value={this.state.income}
            />
        </View>
        <View style={styles.h2}>
            <Text style={styles.text}>Spending</Text>
            <TextInput
              label='Name'   
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(spending) => this.setState({spending})}
              value={this.state.spending}
            />
        </View>
        <View style={styles.h2}>
            <Text style={styles.text}>Savings</Text>
            <Text style={styles.textInput}>{this.state.income - this.state.spending }</Text>
            
          </View>
        </View>

        <View style={styles.MoneyRowText}>
          <View style={styles.h2}>
            <Text style={styles.text}>Inc. Growth</Text>
            <TextInput
              label='Name'   
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(incGrowth) => this.setState({incGrowth})}
              value={this.state.incGrowth}
            />
          </View>

          <View style={styles.h2}>
            <Text style={styles.text}>Ret. Spending</Text>
            <TextInput
              label='Name'    
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(retSpending) => this.setState({retSpending})}
              value={this.state.retSpending}
            />
          </View>
          <View style={styles.h2}>
            <Text style={styles.text}>WR Rate</Text>
            <TextInput
              label='Name'     
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(wrRate) => this.setState({wrRate})}
              value={this.state.wrRate}
            />
          </View>
        </View>

        <View style={styles.MoneyRowText}>
          <View style={styles.h2}>
            <Text style={styles.text}>Inv. Returns</Text>
            <TextInput
              label='Name'     
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(invReturns) => this.setState({invReturns})}
              value={this.state.invReturns}
            />
          </View>
          <View style={styles.h2}>
            <Text style={styles.text}>FIRE #</Text>
            <Text style={styles.textInput}>{ (this.state.retSpending / this.state.wrRate) * 100 }</Text>
            
          </View>

        </View>

      {/* </ImageBackground> */}

      </ScrollView>

      </View>
    );
  }        
}