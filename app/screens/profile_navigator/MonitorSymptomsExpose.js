
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

export default class MonitorSymptomsExpose extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asymptomatic_check: 0,
            symptomatic_check: 0,
            hospital_check: 0,
            applicable_check: 0,
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
                        <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>If you think, you've' been exposed to COVID-19, are you:</Text>
                        {/* <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(live unticked if not)</Text> */}
                        <View style = {{flex: 1, width: '100%', }}>
                            <View style = {[styles.component_view, {borderColor: this.state.asymptomatic_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Asymptomatic</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.asymptomatic_check == 0) {
                                            this.setState({asymptomatic_check: 1})
                                        } else if(this.state.asymptomatic_check == 1) {
                                            this.setState({asymptomatic_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.asymptomatic_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.asymptomatic_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style = {[styles.component_view, {borderColor: this.state.symptomatic_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Symptomatic</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.symptomatic_check == 0) {
                                            this.setState({symptomatic_check: 1})
                                        } else if(this.state.symptomatic_check == 1) {
                                            this.setState({symptomatic_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.symptomatic_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.symptomatic_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style = {[styles.component_view, {borderColor: this.state.hospital_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Admitted to hospital</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.hospital_check == 0) {
                                            this.setState({hospital_check: 1})
                                        } else if(this.state.hospital_check == 1) {
                                            this.setState({hospital_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.hospital_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.hospital_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style = {[styles.component_view, {borderColor: this.state.applicable_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>No applicable</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.applicable_check == 0) {
                                            this.setState({applicable_check: 1})
                                        } else if(this.state.applicable_check == 1) {
                                            this.setState({applicable_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.applicable_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.applicable_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                onPress = {() => {
                                    this.props.navigation.navigate("MonitorSymptomsIsolating");
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
        padding: 10, 
        borderRadius: 5, 
        borderColor: '#c0c0c0', 
        borderWidth: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 10,
    },
    check_button_view: {
        width: 30, 
        height: 30, 
        marginLeft: 10, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    check_circle_view: {
        width: 20, 
        height: 20, 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#c0c0c0'
    }
});