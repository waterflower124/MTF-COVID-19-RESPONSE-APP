
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

export default class MonitorSymptomsCurrentStatus extends Component {

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
                        <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Have you had any of following organ transplants?</Text>
                        {/* <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(live unticked if not)</Text> */}
                        <View style = {{flex: 1, width: '100%', }}>
                            <View style = {[styles.component_view, {borderColor: this.state.confirmed_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Confirmed</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.confirmed_check == 0) {
                                            this.setState({confirmed_check: 1})
                                        } else if(this.state.confirmed_check == 1) {
                                            this.setState({confirmed_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.confirmed_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.confirmed_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style = {[styles.component_view, {borderColor: this.state.suspected_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Suspected</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.suspected_check == 0) {
                                            this.setState({suspected_check: 1})
                                        } else if(this.state.suspected_check == 1) {
                                            this.setState({suspected_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.suspected_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.suspected_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style = {[styles.component_view, {borderColor: this.state.exposed_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Exposed</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.exposed_check == 0) {
                                            this.setState({exposed_check: 1})
                                        } else if(this.state.exposed_check == 1) {
                                            this.setState({exposed_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.exposed_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.exposed_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style = {[styles.component_view, {borderColor: this.state.unknown_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Unknown</Text>
                                <TouchableOpacity style = {styles.check_button_view} 
                                    onPress = {() => {
                                        if(this.state.unknown_check == 0) {
                                            this.setState({unknown_check: 1})
                                        } else if(this.state.unknown_check == 1) {
                                            this.setState({unknown_check: 0})
                                        }
                                    }}
                                >
                                    <View style = {[styles.check_circle_view, {backgroundColor: this.state.unknown_check == 0 ? 'transparent' : '#0093B8'}]}>
                                    {
                                        this.state.unknown_check == 1 &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                    }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                onPress = {() => {
                                    // Global.initial_info_add = true;
                                    // Global.monitor_symptoms = true;
                                    // this.props.navigation.goBack();
                                    this.props.navigation.navigate("MonitorSymptomsDate");
                                }}
                            >
                                <Text style = {stylesGlobal.submit_button_text}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                        {/* <View style = {{marginTop: 40, width: '100%'}}>
                            <Text style = {stylesGlobal.query_text}>When were you born?</Text>
                            <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                <View style = {{width: '45%'}}>
                                    <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'MM'>
                                    
                                    </TextInput>
                                </View>
                                <View style = {{width: '45%', justifyContent: 'flex-end'}}>
                                    <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'YYYY'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <View style = {{marginTop: 40, width: '100%'}}>
                            <Text style = {stylesGlobal.query_text}>Your sex at birth</Text>
                            <View style = {stylesGlobal.query_answer_view}>
                                <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                    <Text style = {stylesGlobal.query_answerbutton_text}>Female</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                    <Text style = {stylesGlobal.query_answerbutton_text}>Male</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                            onPress = {() => {
                                Global.initial_info_add = true;
                                Global.monitor_symptoms = true;
                                this.props.navigation.goBack();
                            }}
                        >
                            <Text style = {stylesGlobal.submit_button_text}>Add</Text>
                        </TouchableOpacity> */}
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