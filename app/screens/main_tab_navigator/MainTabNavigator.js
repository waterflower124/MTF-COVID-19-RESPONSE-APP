
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

import ProfileNavigator from '../profile_navigator/ProfileNavigator';
import UsersNavigator from '../users_navigator/UsersNavigator';
import LocationNavigator from '../location_navigator/LocationNavigator';
import NotificationHome from '../notification_navigator/NotificationHome';
import TipNavigator from '../tip_navigator/TipNavigator';

const Tab = createBottomTabNavigator();

export default class MainTabNavigator extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            // <NavigationContainer>
                <Tab.Navigator initialRouteName = "Profile"
                    tabBarOptions={{
                        activeTintColor: '#65a4e2',
                        style: {
                            backgroundColor: '#f5f5f5'
                        },
                        labelStyle: {
                            fontFamily: 'Montserrat-Regular',
                        },
                        headerMode: 'none'
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size, focused }) => {
                            let iconName
                            if (route.name == 'Tip') {
                                iconName = require('../../icons/tab_lamp.png');
                            } else if (route.name == 'Notification') {
                                iconName = require('../../icons/tab_alarm.png');
                            } else if (route.name == 'Location') {
                                iconName = require('../../icons/tab_pin.png');
                            } else if (route.name == 'Users') {
                                iconName = require('../../icons/tab_users.png');
                            } else if (route.name == 'Profile') {
                                iconName = require('../../icons/tab_profile.png');
                            }
                            return <Image source={iconName} style = {{height: '60%', resizeMode: 'contain', tintColor: focused ? '#65a4e2' : null}} />
                        }
                    })}
                >
                    <Tab.Screen name="Tip" component={TipNavigator} />
                    <Tab.Screen name="Notification" component={NotificationHome} />
                    <Tab.Screen name="Location" component={LocationNavigator} />
                    <Tab.Screen name="Users" component={UsersNavigator} />
                    <Tab.Screen name="Profile" component={ProfileNavigator} />
                </Tab.Navigator>
            // </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({

});

