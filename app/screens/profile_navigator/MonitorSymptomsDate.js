
//
//  
//  Beat Corona
//  Copyright © 2020 perfeXia Health Technologies Ltd. All rights reserved.
//

import * as React from 'react';
import {Component} from "react";
import {
    AppState, 
    AsyncStorage, 
    Dimensions, 
    Image, 
    Platform, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
    Alert, 
    Linking,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {stylesGlobal} from '../../styles/stylesGlobal';
import { NavigationActions } from 'react-navigation';
import Global from '../../Global/Global';

const backAction = NavigationActions.back({
    key: null
});

export default class MonitorSymptomsDate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmed_check: 0,
            suspected_check: 0,
            exposed_check: 0,
            unknown_check: 0,
        }
    }

    UNSAFE_componentWillMount() {
        
    }

    render() {
        const data = Array.from({ length: 300 });
        return (
            <SafeAreaView style = {styles.container}>
                <View style = {stylesGlobal.header_view}>
                    <Image style = {stylesGlobal.header_heart_image} source={require("../../icons/cora_icon.png")}></Image>
                    {/* <Text style = {stylesGlobal.title_header}>Save lives</Text> */}
                    <View style = {{flex: 1, opacity: this.state.header_opacityAnim}}>
                        <Text style = {[stylesGlobal.title_header]}>Beat Corona</Text>
                    </View>
                </View>
                <View style = {stylesGlobal.main_view}>
                    <Text style = {stylesGlobal.sub_header}>Covid Symptoms</Text>
                    <ScrollView style = {{width: '100%', marginTop: 40}}>
                        <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>If known, please enter the date(or estimate) of the following:</Text>
                        {/* <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(live unticked if not)</Text> */}
                        <View style = {{flex: 1, width: '100%', }}>
                            <View style = {[styles.component_view]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {marginLeft: 20,}]}>Exposure</Text>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                </View>
                            </View>

                            <View style = {[styles.component_view]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {marginLeft: 20,}]}>Symptom onset</Text>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                </View>
                            </View>

                            <View style = {[styles.component_view]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {marginLeft: 20,}]}>Diagnosis (lab test)</Text>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                    <TextInput style = {[styles.textinput_style, stylesGlobal.landing_screen_text]} placeholder = 'DD' keyboardType = 'number-pad'>

                                    </TextInput>
                                </View>
                            </View>

                            <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                onPress = {() => {
                                    this.props.navigation.navigate("MonitorSymptomsRelated");
                                }}
                            >
                                <Text style = {stylesGlobal.submit_button_text}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style = {stylesGlobal.logo_text_view}>
                    <Text style = {stylesGlobal.logo_text}>perfeXia Health Technologies Ltd</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    component_view: {
        width: '100%', 
        // alignItems: 'center',
        marginTop: 30,
    },
    textinput_style: {
        width: '30%', 
        height: 30, 
        textAlign: 'center',
        borderRadius: 5,
        borderColor: '#c0c0c0',
        borderWidth: 1
    }
});