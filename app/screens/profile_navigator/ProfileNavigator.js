
//
//  
//  Beat Corona
//  Copyright © 2020 perfeXia Health Technologies Ltd. All rights reserved.
//


import * as React from 'react';
import {Component} from 'react';

import ProfileHome from "./ProfileHome";
import AddSymptoms from "./AddSymptoms";
import AddOtherSymtoms from "./AddOtherSymtoms";

import MedicalBackground from "./MedicalBackground";
import AddSymptomResult from "./AddSymptomResult";

import WorkEnvironmentProfession from "./WorkEnvironmentProfession";
import WorkEnvironmentSetting from "./WorkEnvironmentSetting";
import WorkEnvironmentWorkArea from "./WorkEnvironmentWorkArea";
import WorkEnvironmentExposure from "./WorkEnvironmentExposure";

import MedicalHistoryDiagnoses from "./MedicalHistoryDiagnoses";
import MedicalHistoryTransplant from "./MedicalHistoryTransplant";
import MedicalHistoryCancer from "./MedicalHistoryCancer";
import MedicalHistoryOtherDiagnosis from "./MedicalHistoryOtherDiagnosis";
import MedicalHistoryMedication from "./MedicalHistoryMedication";
import MedicalHistorySmoking from "./MedicalHistorySmoking";

import MonitorSymptomsCurrentStatus from "./MonitorSymptomsCurrentStatus";
import MonitorSymptomsDate from "./MonitorSymptomsDate";
import MonitorSymptomsRelated from "./MonitorSymptomsRelated";
import MonitorSymptomsExpose from "./MonitorSymptomsExpose";
import MonitorSymptomsIsolating from "./MonitorSymptomsIsolating";
import MonitorSymptomsHousehold from "./MonitorSymptomsHousehold";
import MonitorSymptomsNHSTrust from "./MonitorSymptomsNHSTrust";
import MonitorSymptomsTest from "./MonitorSymptomsTest";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class ProfileNavigotor extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            // <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="ProfileHome"
                    screenOptions={({ route }) => ({
                        headerShown: false
                    })}
                    headerMode="none"
                >
                    <Stack.Screen name="ProfileHome" component={ProfileHome} />
                    <Stack.Screen name="AddSymptoms" component={AddSymptoms} />
                    <Stack.Screen name="AddOtherSymtoms" component={AddOtherSymtoms} />
                    
                    <Stack.Screen name="MedicalBackground" component={MedicalBackground}/>
                    <Stack.Screen name="AddSymptomResult" component={AddSymptomResult}/>
                    
                    <Stack.Screen name="WorkEnvironmentProfession" component={WorkEnvironmentProfession}/>
                    <Stack.Screen name="WorkEnvironmentSetting" component={WorkEnvironmentSetting}/>
                    <Stack.Screen name="WorkEnvironmentWorkArea" component={WorkEnvironmentWorkArea}/>
                    <Stack.Screen name="WorkEnvironmentExposure" component={WorkEnvironmentExposure}/>

                    <Stack.Screen name="MedicalHistoryDiagnoses" component={MedicalHistoryDiagnoses}/>
                    <Stack.Screen name="MedicalHistoryTransplant" component={MedicalHistoryTransplant}/>
                    <Stack.Screen name="MedicalHistoryCancer" component={MedicalHistoryCancer}/>
                    <Stack.Screen name="MedicalHistoryOtherDiagnosis" component={MedicalHistoryOtherDiagnosis}/>
                    <Stack.Screen name="MedicalHistoryMedication" component={MedicalHistoryMedication}/>
                    <Stack.Screen name="MedicalHistorySmoking" component={MedicalHistorySmoking}/>

                    <Stack.Screen name="MonitorSymptomsCurrentStatus" component={MonitorSymptomsCurrentStatus}/>
                    <Stack.Screen name="MonitorSymptomsDate" component={MonitorSymptomsDate}/>
                    <Stack.Screen name="MonitorSymptomsRelated" component={MonitorSymptomsRelated}/>
                    <Stack.Screen name="MonitorSymptomsExpose" component={MonitorSymptomsExpose}/>
                    <Stack.Screen name="MonitorSymptomsIsolating" component={MonitorSymptomsIsolating}/>
                    <Stack.Screen name="MonitorSymptomsHousehold" component={MonitorSymptomsHousehold}/>
                    <Stack.Screen name="MonitorSymptomsNHSTrust" component={MonitorSymptomsNHSTrust}/>
                    <Stack.Screen name="MonitorSymptomsTest" component={MonitorSymptomsTest}/>
                </Stack.Navigator>
            // </NavigationContainer>
        )
    }
}
