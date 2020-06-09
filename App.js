
//
//  
//  Beat Corona
//  Copyright © 2020 perfeXia Health Technologies Ltd. All rights reserved.
//


import * as React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './app/screens/main_tab_navigator/MainTabNavigator';
import LandingScreen from './app/screens/landing_screens/LandingScreen';
import ConsentScreen from './app/screens/landing_screens/ConsentScreen';
import TermsAndCondition from './app/screens/landing_screens/TermsAndCondition';
import SignUpScreen from './app/screens/landing_screens/SignUpScreen';
import Verification from './app/screens/landing_screens/Verification';
import LandingSummary1 from './app/screens/landing_screens/LandingSummary1';
import LandingSummary2 from './app/screens/landing_screens/LandingSummary2';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator 
                initialRouteName = "LandingScreen"
                screenOptions={({ route }) => ({
                    headerShown: false
                })}
                headerMode="none"
            >
                <Stack.Screen name="LandingScreen" component={LandingScreen} />
                <Stack.Screen name="ConsentScreen" component={ConsentScreen} />
                <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="LandingSummary1" component={LandingSummary1} />
                <Stack.Screen name="LandingSummary2" component={LandingSummary2} />

                <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
                
            </Stack.Navigator>
        </NavigationContainer>
            // <NavigationContainer>
            //     <Tab.Navigator initialRouteName = "Profile"
            //         tabBarOptions={{
            //             activeTintColor: '#65a4e2',
            //             style: {
            //                 // backgroundColor: '#ffd700'
            //             },
            //             headerMode: 'none'
            //         }}
            //         screenOptions={({ route }) => ({
            //             tabBarIcon: ({ color, size }) => {
            //                 let iconName
            //                 if (route.name == 'Home') {
            //                     iconName = require('./app/icons/tab_lamp.png');
            //                 } else if (route.name == 'Home1') {
            //                     iconName = require('./app/icons/tab_alarm.png');
            //                 } else if (route.name == 'Home2') {
            //                     iconName = require('./app/icons/tab_pin.png');
            //                 } else if (route.name == 'Users') {
            //                     iconName = require('./app/icons/tab_users.png');
            //                 } else if (route.name == 'Profile') {
            //                     iconName = require('./app/icons/tab_profile.png');
            //                 }
            //                 return <Image source={iconName} style = {{height: '60%', resizeMode: 'contain'}} />
            //             }
            //         })}
            //     >
            //         <Tab.Screen name="Home" component={ProfileNavigator} />
            //         <Tab.Screen name="Home1" component={ProfileNavigator} />
            //         <Tab.Screen name="Home2" component={ProfileNavigator} />
            //         <Tab.Screen name="Users" component={UsersNavigator} />
            //         <Tab.Screen name="Profile" component={ProfileNavigator} />
            //     </Tab.Navigator>
            // </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({

});

