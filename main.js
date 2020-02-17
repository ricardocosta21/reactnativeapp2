import React, { Component } from 'react';

import Main from './src/Main'
import Detail from './src/detail'

import Screen1 from './src/screens/drawer/screen1'
import Screen2 from './src/screens/drawer/screen2'


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createStackNavigator} from '@react-navigation/stack';



const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default class App extends Component {

    createHomeStack =() =>
    <Stack.Navigator>
        <Stack.Screen name = "Main" component={Main} />
        <Stack.Screen name = "Detail" component={Detail} />
    </Stack.Navigator>

    render()
    {
        return(
           
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack} />
                    <Drawer.Screen name="About" component={Screen2} />            
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}