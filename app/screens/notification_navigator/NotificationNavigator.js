
//
//  
//  Beat Corona
//  Copyright © 2020 perfeXia Health Technologies Ltd. All rights reserved.
//


import * as React from 'react';
import {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotificationHome from "./NotificationHome";
// import AboutHousehold from "./AboutHousehold";
// import BeforeCovid from "./BeforeCovid";
// import DailyMobility from "./DailyMobility";
// import WorkplaceSchool from "./WorkplaceSchool";

const Stack = createStackNavigator();

export default class UsersNavigotor extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            // <NavigationContainer>
                <Stack.Navigator 
                    
                    screenOptions={({ route }) => ({
                        headerShown: false
                      })}
                >
                    <Stack.Screen name="NotificationHome" component={NotificationHome} />
                    {/* <Stack.Screen name="AboutHousehold" component={AboutHousehold} />
                    <Stack.Screen name="BeforeCovid" component={BeforeCovid} />
                    <Stack.Screen name="DailyMobility" component={DailyMobility} />
                    <Stack.Screen name="WorkplaceSchool" component={WorkplaceSchool} /> */}
                </Stack.Navigator>
            // </NavigationContainer>
        )
    }
}
