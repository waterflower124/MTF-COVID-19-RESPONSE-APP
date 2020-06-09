
//
//  
//  Beat Corona
//  Copyright © 2020 perfeXia Health Technologies Ltd. All rights reserved.
//


import * as React from 'react';
import {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TipHome from "./TipHome";
import WhoRisk from "./WhoRisk";
import Precaution from "./Precaution";
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
                    <Stack.Screen name="TipHome" component={TipHome} />
                    <Stack.Screen name="WhoRisk" component={WhoRisk} />
                    <Stack.Screen name="Precaution" component={Precaution} />
                    {/* <Stack.Screen name="DailyMobility" component={DailyMobility} />
                    <Stack.Screen name="WorkplaceSchool" component={WorkplaceSchool} /> */}
                </Stack.Navigator>
            // </NavigationContainer>
        )
    }
}
