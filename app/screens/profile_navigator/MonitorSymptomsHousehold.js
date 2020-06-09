
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
    TouchableOpacity} from 'react-native';

import {stylesGlobal} from '../../styles/stylesGlobal' 
import Global from '../../Global/Global';


export default class MonitorSymptomsHousehold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fever_check: 0,
            cough_check: 0,
            muscle_check: 0,
            breath_check: 0,
            diarrhoea_check: 0,
            other_check: 0,
            no_one_check: 0,
            live_alone_check: 0,
            
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
                    <Text style = {stylesGlobal.sub_header}>Medical History</Text>
                    <View style = {{flex: 1, width: '100%'}}>
                        <ScrollView style = {{width: '100%', marginTop: 40}}>
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Is anyone in your household experiencing any of the following symptoms related to COVID-19 right now:</Text>
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(Press twice for unsure)</Text>
                            <View style = {{flex: 1, width: '100%', }}>
                                <View style = {[styles.component_view, {borderColor: this.state.fever_check == 0 ? '#c0c0c0' : this.state.fever_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Fever</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.fever_check == 0) {
                                                this.setState({fever_check: 1})
                                            } else if(this.state.fever_check == 1) {
                                                this.setState({fever_check: 2})
                                            } else if(this.state.fever_check == 2) {
                                                this.setState({fever_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.fever_check == 0 ? 'transparent' : this.state.fever_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.fever_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.fever_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.cough_check == 0 ? '#c0c0c0' : this.state.cough_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Cough</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.cough_check == 0) {
                                                this.setState({cough_check: 1})
                                            } else if(this.state.cough_check == 1) {
                                                this.setState({cough_check: 2})
                                            } else if(this.state.cough_check == 2) {
                                                this.setState({cough_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.cough_check == 0 ? 'transparent' : this.state.cough_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.cough_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.cough_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.muscle_check == 0 ? '#c0c0c0' : this.state.muscle_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Muscle pain</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.muscle_check == 0) {
                                                this.setState({muscle_check: 1})
                                            } else if(this.state.muscle_check == 1) {
                                                this.setState({muscle_check: 2})
                                            } else if(this.state.muscle_check == 2) {
                                                this.setState({muscle_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.muscle_check == 0 ? 'transparent' : this.state.muscle_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.muscle_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.muscle_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.breath_check == 0 ? '#c0c0c0' : this.state.breath_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Shortness of breath</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.breath_check == 0) {
                                                this.setState({breath_check: 1})
                                            } else if(this.state.breath_check == 1) {
                                                this.setState({breath_check: 2})
                                            } else if(this.state.breath_check == 2) {
                                                this.setState({breath_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.breath_check == 0 ? 'transparent' : this.state.breath_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.breath_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.breath_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.diarrhoea_check == 0 ? '#c0c0c0' : this.state.diarrhoea_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Diarrhoea and/or vomitting</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.diarrhoea_check == 0) {
                                                this.setState({diarrhoea_check: 1})
                                            } else if(this.state.diarrhoea_check == 1) {
                                                this.setState({diarrhoea_check: 2})
                                            } else if(this.state.diarrhoea_check == 2) {
                                                this.setState({diarrhoea_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.diarrhoea_check == 0 ? 'transparent' : this.state.diarrhoea_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.diarrhoea_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.diarrhoea_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.other_check == 0 ? '#c0c0c0' : this.state.other_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Other</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.other_check == 0) {
                                                this.setState({other_check: 1})
                                            } else if(this.state.other_check == 1) {
                                                this.setState({other_check: 2})
                                            } else if(this.state.other_check == 2) {
                                                this.setState({other_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.other_check == 0 ? 'transparent' : this.state.other_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.other_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.other_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.no_one_check == 0 ? '#c0c0c0' : this.state.no_one_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>No one has symptoms</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.no_one_check == 0) {
                                                this.setState({no_one_check: 1})
                                            } else if(this.state.no_one_check == 1) {
                                                this.setState({no_one_check: 2})
                                            } else if(this.state.no_one_check == 2) {
                                                this.setState({no_one_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.no_one_check == 0 ? 'transparent' : this.state.no_one_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.no_one_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.no_one_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.live_alone_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>I live alone</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.live_alone_check == 0) {
                                                this.setState({live_alone_check: 1})
                                            } else if(this.state.live_alone_check == 1) {
                                                this.setState({live_alone_check: 0})
                                            } 
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.live_alone_check == 0 ? 'transparent' : '#0093B8'}]}>
                                        {
                                            this.state.live_alone_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                    onPress = {() => {
                                        this.props.navigation.navigate("MonitorSymptomsNHSTrust");
                                    }}
                                >
                                    <Text style = {stylesGlobal.submit_button_text}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    
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