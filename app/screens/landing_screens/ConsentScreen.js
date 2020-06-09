
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
    KeyboardAvoidingView,
    TextInput,
    Keyboard
} from 'react-native';

import {stylesGlobal} from '../../styles/stylesGlobal';
import Global from '../../Global/Global';

export default class ConsentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            read_participant_doc: false,
            read_privacy: false,
            to_research: false,
            to_nhs_link: false,
            to_location_tracking: false,
            to_future_research: false,
            for_study: false,
        }
    }

    UNSAFE_componentWillMount() {
        
    }


    render() {
        const data = Array.from({ length: 300 });
        return (
            <SafeAreaView style = {styles.container} onStartShouldSetResponder = {() => Keyboard.dismiss()}>
                <View style = {[stylesGlobal.header_view, {height: 30}]}>
                    <Image style = {[stylesGlobal.header_heart_image, {position: 'absolute', top: 0, left: 10}]} source={require("../../icons/cora_icon.png")}></Image>
                    <View style = {{flex: 1, marginLeft: 40, opacity: this.state.header_opacityAnim}}>
                        <Text style = {[stylesGlobal.title_header]}>Beat Corona</Text>
                    </View>
                </View>
                <View style = {{flex: 1, width: '85%', paddingTop: 50}}>
                    <Text style = {[stylesGlobal.sub_header, { marginBottom: 10}]}>Consent</Text>
                    <ScrollView style = {{width: '100%'}} behavior={'padding'}>
                        <View style = {[styles.component_view, {borderColor: this.state.read_participant_doc ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>I have read the Information for Participants Document <Text style = {{fontSize: 12, color: '#808080'}}>(22/04/20)</Text></Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({read_participant_doc: !this.state.read_participant_doc})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.read_participant_doc ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.read_participant_doc &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {[styles.component_view, {borderColor: this.state.read_privacy ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>I have read the Privacy notice <Text style = {{fontSize: 12, color: '#808080'}}>(22/04/20)</Text></Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({read_privacy: !this.state.read_privacy})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.read_privacy ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.read_privacy &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {[styles.component_view, {borderColor: this.state.to_research ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>To BEAT-CORONA research</Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({to_research: !this.state.to_research})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.to_research ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.to_research &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {[styles.component_view, {borderColor: this.state.to_nhs_link ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>To NHS data linkage</Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({to_nhs_link: !this.state.to_nhs_link})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.to_nhs_link ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.to_nhs_link &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {[styles.component_view, {borderColor: this.state.to_location_tracking ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>To location tracking</Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({to_location_tracking: !this.state.to_location_tracking})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.to_location_tracking ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.to_location_tracking &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {[styles.component_view, {borderColor: this.state.to_future_research ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>To be approached for future research</Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({to_future_research: !this.state.to_future_research})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.to_future_research ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.to_future_research &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {[styles.component_view, {borderColor: this.state.for_study ? '#0093B8' : '#c0c0c0'}]}>
                            <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>For the studay team to approach relevant healthcare providers in the event you are hospitalised inrelation to COVID-19</Text>
                            <TouchableOpacity style = {styles.check_button_view} onPress = {() => this.setState({for_study: !this.state.for_study})}>
                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.for_study ? '#0093B8' : 'transparent'}]}>
                                {
                                    this.state.for_study &&
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                }
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    </ScrollView>
                </View>
                <View style = {{width: '100%'}}>
                    <View style = {stylesGlobal.landing_screen_button_view}>
                        <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("TermsAndCondition")}>
                            <Text style = {stylesGlobal.submit_button_text}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {stylesGlobal.logo_text_view}>
                        <Text style = {stylesGlobal.logo_text}>perfeXia Health Technologies Ltd</Text>
                    </View>
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
        alignItems: 'center',
        // backgroundColor: '#ffffff'
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