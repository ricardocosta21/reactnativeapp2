/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import CardView from 'react-native-cardview'
import styles from "./style";

import SQLite from "react-native-sqlite-2";
import Slider from "react-native-slider";



import {
  Platform,
  Image,
  ScrollView,
  ToolbarAndroid,
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions,
  ToastAndroid,
  Alert,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  // Icon
} from "native-base";

// 3rd party libraries
import { Icon } from 'react-native-elements'

const LIGHT_GREEN = "#ddfff6";
const MEDIUM_GREEN = "#96ffe3";
const HARD_GREEN = "#53d1af";
const LIGHT_GRAY = "#ECECEC";
const WHITE = "#FFFFFF";

let deviceWidth = Dimensions.get('window').width

let maxValue = 500000;


//import FireData from '../models/FireData';
//import { createFireData, updateFireData } from '../controllers/FireDataController';


export default class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      //fireData: new FireData(),
      
      age: "27",
      investment: 22000,
      income: 70000,
      spending: 35000,
      savingsNumber: "",
      savings: "",
      savingsPercentage: "",
      incGrowth: "3",
      retSpending: 40000,
      wrRate: "4",
      invReturns: "7",
      fireNumber: "",
      fireDisplayNumber: "",

      isFocused: false,
      currencySymbol: "£",
      percentageSymbol: "%",

      fireDataArray: []

    };
    

  }


 

  componentWillMount() {
    //  if (!this.state.fireData)
    //         return;

    //this.createFireData();
      
  }



// createFireData = () => {
//         if (!this.state.fireData)
//             return;

//         createFireData(this.state.fireData).then(({ result, message }) => {
//            if(Platform.OS == 'ios')
//             {
//               alert(message);
//             }  
//             else
//             {
//               ToastAndroid.show(message, ToastAndroid.SHORT);
//             }
            
//             if (result) {
//                 this.setState({ fireData: new FireData() });
//                 Keyboard.dismiss();
//                 if (this.state.event)
//                     this.state.event.emit('onCreateFireData');
//             }
//         });
//     }





////////////////////////////////////////////////////////////////////////////////
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

  onActionSelected(position) { }

  handleTextChanged(text) {
    this.setState({ text });
  }
 

  onFireReady = () => {
    //this.state.fireData = [];

    const incomeFieldAux = this.state.income;

    const spendingFieldAux = this.state.spending;

    const investmentFieldAux = this.state.investment;

    const retSpendingFieldAux = this.state.retSpending;
    this.state.savingsNumber = incomeFieldAux - spendingFieldAux;

    this.state.savingsPercentage = (
      100 -
      (spendingFieldAux * 100) / incomeFieldAux
    ).toFixed(1);

    if (this.state.wrRate <= 0) return;

    // Calculate FireNumber
    this.state.fireNumber = (
      (retSpendingFieldAux / this.state.wrRate) *
      100
    ).toFixed(0);

    this.compound(
      investmentFieldAux,
      this.state.invReturns / 100 + 1,
      this.state.age,
      incomeFieldAux,
      spendingFieldAux,
      this.state.savingsNumber,
      this.state.fireNumber
    );

  };

  // onFireReady = () => {
  //   this.state.fireData = [];

  //   const incomeFieldAux = this.state.income;

  //   const spendingFieldAux = this.state.spending;

  //   const investmentFieldAux = this.state.investment;

  //   const retSpendingFieldAux = this.state.retSpending;
  //   this.state.savingsNumber = incomeFieldAux - spendingFieldAux;

  //   this.state.savingsPercentage = (
  //     100 -
  //     (spendingFieldAux * 100) / incomeFieldAux
  //   ).toFixed(1);

  //   if (this.state.wrRate <= 0) return;

  //   // Calculate FireNumber
  //   this.state.fireNumber = (
  //     (retSpendingFieldAux / this.state.wrRate) *
  //     100
  //   ).toFixed(0);

  //   this.compound(
  //     investmentFieldAux,
  //     this.state.invReturns / 100 + 1,
  //     this.state.age,
  //     incomeFieldAux,
  //     spendingFieldAux,
  //     this.state.savingsNumber,
  //     this.state.fireNumber
  //   );

  // };

  increaseIncome(income) {
    return (income *= this.state.incGrowth / 100 + 1);
  }

  increaseSavings(income, spending) {
    return (newSavingsValue =
      income * (this.state.incGrowth / 100 + 1) - spending);
  }

  formatNumber(number) {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits:0
    }).format(number);
  }


  callAlert(){
      
    if(Platform.OS == 'ios')
    {
      alert('Spending cannot exceed Income');
    }   
    else
    {
        ToastAndroid.showWithGravityAndOffset(
          'Spending cannot exceed Income',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );    
      }
  };

  compound(investment, interest, age, income, spending, savings, fireNumber) {

    var accumulated = parseInt(investment);

    for (i = age, j = 0; accumulated < fireNumber; i++ , j++) {

      accumulated = parseInt((accumulated + savings) * interest.toFixed(2));

      savings = this.increaseSavings(income, spending);

      income = this.increaseIncome(income);

      var objToPush = {
        index: j,
        age: i,
        value: accumulated.toFixed(0)
      };

      if (accumulated < 0) {
        this.state.savings = 0;

        this.state.savingsPercentage = 0;

        var newStateArray = this.state.slice();

        newStateArray.push();

        this.setState({ fireDataArray: newStateArray });

        this.state.fireDataArray = newStateArray;

        return;
      }

      this.state.savings = savings;

      var newStateArray = this.state.fireDataArray.slice();

      newStateArray.push(objToPush);

      this.state.fireDataArray = newStateArray;

      this.setState({ fireDataArray: newStateArray });
    }
  }

 

  componentDidMount() {

    //this.createFireData();

    this.onFireReady();
  } 

  render() {
    const { isFocused } = this.state;
    let colors = [WHITE, LIGHT_GRAY];

    return (
      <View style={styles.container}>
        <Header
          iosBarStyle="light-content"
          androidStatusBarColor={HARD_GREEN}
          style={{ backgroundColor: HARD_GREEN }}>
           <Left>
            <Button transparent>
              <Icon name="menu"
              color='#ffffff' />              
            </Button>

          </Left>    

          <Body>
            <Title style={styles.h2}>FireCalc</Title>
          </Body>

          <Right>
            <Icon            
              name='save'
              type='font-awesome'
              color='#ffffff'
              reverseColor='false'
              underlayColor= '#1fb28a'
              iconStyle={styles.headerIcon}
              onPress={() => this.saveDataState()} />
          </Right>
          
        </Header>

        <ScrollView>
            <View style={styles.MoneyRowText}>
              <CardView style={styles.cardContainer}>
                <Text style={styles.text}>Age</Text>
                <TextInput
                  maxLength={2}
                  keyboardType="numeric"
                  style={styles.textInput}
                  selectionColor={LIGHT_GREEN}
                  underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}   
                  onChangeText={age => this.setState({ age })}
                  onSelectionChange={() => this.onFireReady()}
                  value={this.state.age}
                />                
              </CardView>

             


              <CardView style={styles.cardContainer}>
                   <Text style={styles.text}>WR Rate</Text>
                  <View style={styles.textPercentageReturns}>
                 
                    <TextInput
                      keyboardType="numeric"
                      maxLength={2}
                      style={styles.textInput}
                      selectionColor={LIGHT_GREEN}
                      underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                      onChangeText={wrRate => this.setState({ wrRate })}
                      onSelectionChange={() => this.onFireReady()}
                      value={this.state.wrRate}
                    />
                    <Text style={styles.text}>{this.state.percentageSymbol}</Text>
                  </View>                 
                </CardView>


                <CardView style={styles.cardContainer}>
                  <Text style={styles.text}>Inc. Growth</Text>
                  <View style={styles.textPercentageReturns}>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.textInput}
                      selectionColor={LIGHT_GREEN}
                      underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                      onChangeText={incGrowth => this.setState({ incGrowth })}
                      onSelectionChange={() => this.onFireReady()}
                      value={this.state.incGrowth}
                    />
                    <Text style={styles.text}>{this.state.percentageSymbol}</Text>
                  </View>                 
                </CardView>


              <CardView style={styles.cardContainer}>
                <Text style={styles.text}>Returns</Text>
                <View style={styles.textPercentageReturns}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInput}
                    selectionColor={LIGHT_GREEN}
                    underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                    onChangeText={invReturns => this.setState({ invReturns })}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.invReturns}
                  />
                  <Text style={styles.text}>{this.state.percentageSymbol}</Text>
                </View>              
              </CardView>
            </View>

        

 {/*//////////////////////////////////////////  Investments   //////////////////////////////////////////////////////*/}

       
                <CardView style={styles.cardContainer}>
                   <Text style={styles.text}>Investments</Text>
                   <Text>{this.formatNumber(this.state.investment)}</Text>
                   <Slider
                      style={{width: deviceWidth - 70, height: 40}}
                      minimumValue={0}
                      maximumValue={maxValue}
                      minimumTrackTintColor="#1fb28a"
                      maximumTrackTintColor="#d3d3d3"
                      thumbTintColor='#1a9274'
                      value={this.state.investment}
                      onValueChange={investment => {
                       this.setState({ investment });
                      }}
                      onSlidingComplete={() => this.onFireReady()}
                    />                 
                 </CardView>
         

 {/*//////////////////////////////////////////  Income   //////////////////////////////////////////////////////*/}

                  <CardView style={styles.cardContainer}>
                  <Text style={styles.text}>Income(-Tax)</Text>
                  <Text>{this.formatNumber(this.state.income)}</Text>
                  <Slider
                      style={{width: deviceWidth - 70, height: 40}}
                      minimumValue={0}
                      maximumValue={maxValue}
                      minimumTrackTintColor="#1fb28a"
                      maximumTrackTintColor="#d3d3d3"
                      thumbTintColor='#1a9274'
                      value={this.state.income}
                      onValueChange={income => {
                       this.setState({ income });
                      }}
                      onSlidingComplete={() => this.onFireReady()}
                  />
                </CardView>

 {/*//////////////////////////////////////////  Spending   //////////////////////////////////////////////////////*/}
                
                <CardView style={styles.cardContainer}>
                  <Text style={styles.text}>Spending</Text>
                  <Text>{this.formatNumber(this.state.spending)}</Text>                  
                  <Slider
                      style={{width: deviceWidth - 70, height: 40}}
                      minimumValue={0}
                      maximumValue={maxValue}
                      minimumTrackTintColor="#1fb28a"
                      maximumTrackTintColor="#d3d3d3"
                      thumbTintColor='#1a9274'
                      value={this.state.spending}
                      onValueChange={spending => {
                       this.setState({ spending });
                      }}
                      onSlidingComplete={() => 
                      {
                        if(this.state.spending > this.state.income)
                        {
                           this.state.spending = this.state.income;
                           this.callAlert();
                        }
                        this.onFireReady()}
                      }                     
                     
                  />                 
                </CardView>
              
                  
 {/*//////////////////////////////////////////  ret spending   //////////////////////////////////////////////////////*/}               
              
                <CardView style={styles.cardContainer}>
                     <Text style={styles.text}>Ret. Spending</Text>
                     <Text>{this.formatNumber(this.state.retSpending)}</Text>
                  <Slider
                      style={{width: deviceWidth - 70, height: 40}}
                      minimumValue={0}
                      maximumValue={maxValue}
                      minimumTrackTintColor="#1fb28a"
                      maximumTrackTintColor="#d3d3d3"
                      thumbTintColor='#1a9274'
                      value={this.state.retSpending}
                      onValueChange={retSpending => {
                       this.setState({ retSpending });
                      }}
                      onSlidingComplete={() => this.onFireReady()}                    
                  />
                </CardView>
            
                <View style={styles.MoneyRowText}>

              
                <CardView style={styles.cardContainer}>
                  <Text style={styles.text}>Savings</Text>
                  <Text style={styles.textInput}>
                    {this.formatNumber(this.state.savingsNumber)}{' '}
                    <Text style={styles.textPercentage}>
                      ({this.state.savingsPercentage}
                      {this.state.percentageSymbol})
                    </Text>
                  </Text>
                </CardView>


                <CardView style={styles.cardContainer}>
                  <Text style={styles.text}> FIRE # </Text>
                  <Text style={styles.textInput}>
                    {this.formatNumber(this.state.fireNumber)}
                  </Text>                  
                </CardView>
              

              </View>

            <View style={styles.itemContainerHeader}>
              <Text style={styles.flatListHeaderLeft}>#</Text>
              <Text style={styles.flatListHeaderCenter}>Age</Text>
              <Text style={styles.flatListHeaderRight}>Balance</Text>
            </View>

            <View style={styles.itemContainer}>
            {
              <FlatList
                style={styles.flatList}
                data={this.state.fireDataArray}
                keyExtractor={(item, index) => "key" + index}
                renderItem={({ item, index }) => (                
                  <View style={{ 
                    flex: 1,
                    flexDirection: "row",
                    paddingTop: 15,
                    paddingBottom: 15,
                    backgroundColor: colors[index % colors.length] }}>
                    <Text style={styles.flatListItemLeft}>{item.index}</Text>
                    <Text style={styles.flatListItemCenter}>{item.age}</Text>
                    <Text style={styles.flatListItemRight}>{this.formatNumber(item.value)}</Text>
                  </View>
                )}
               
              />
            }
        </View>

        </ScrollView>
      </View>
    );
  }
}
