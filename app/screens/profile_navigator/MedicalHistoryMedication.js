
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


export default class MedicalHistoryMedication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ace_check: 0,
            angiotensin_check: 0,
            anti_inflammatory_check: 0,
            presnisolone_check: 0,
            hydroxychloroquine_check: 0,
            drug_check: 0,
            
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
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Do you take any of following medication:</Text>
                            {/* <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(Press twice for unsure)</Text> */}
                            <View style = {{flex: 1, width: '100%', }}>
                                <View style = {[styles.component_view, {borderColor: this.state.ace_check == 0 ? '#c0c0c0' : this.state.ace_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>ACE inhibitor</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.ace_check == 0) {
                                                this.setState({ace_check: 1})
                                            } else if(this.state.ace_check == 1) {
                                                this.setState({ace_check: 2})
                                            } else if(this.state.ace_check == 2) {
                                                this.setState({ace_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.ace_check == 0 ? 'transparent' : this.state.ace_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.ace_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.ace_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.angiotensin_check == 0 ? '#c0c0c0' : this.state.angiotensin_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Angiotensin Receptor Blocker</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.angiotensin_check == 0) {
                                                this.setState({angiotensin_check: 1})
                                            } else if(this.state.angiotensin_check == 1) {
                                                this.setState({angiotensin_check: 2})
                                            } else if(this.state.angiotensin_check == 2) {
                                                this.setState({angiotensin_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.angiotensin_check == 0 ? 'transparent' : this.state.angiotensin_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.angiotensin_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.angiotensin_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.anti_inflammatory_check == 0 ? '#c0c0c0' : this.state.anti_inflammatory_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Anti-inflammatory painkillers</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.anti_inflammatory_check == 0) {
                                                this.setState({anti_inflammatory_check: 1})
                                            } else if(this.state.anti_inflammatory_check == 1) {
                                                this.setState({anti_inflammatory_check: 2})
                                            } else if(this.state.anti_inflammatory_check == 2) {
                                                this.setState({anti_inflammatory_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.anti_inflammatory_check == 0 ? 'transparent' : this.state.anti_inflammatory_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.anti_inflammatory_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.anti_inflammatory_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.presnisolone_check == 0 ? '#c0c0c0' : this.state.presnisolone_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Presnisolone</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.presnisolone_check == 0) {
                                                this.setState({presnisolone_check: 1})
                                            } else if(this.state.presnisolone_check == 1) {
                                                this.setState({presnisolone_check: 2})
                                            } else if(this.state.presnisolone_check == 2) {
                                                this.setState({presnisolone_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.presnisolone_check == 0 ? 'transparent' : this.state.presnisolone_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.presnisolone_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.presnisolone_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.hydroxychloroquine_check == 0 ? '#c0c0c0' : this.state.hydroxychloroquine_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Hydroxychloroquine</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.hydroxychloroquine_check == 0) {
                                                this.setState({hydroxychloroquine_check: 1})
                                            } else if(this.state.hydroxychloroquine_check == 1) {
                                                this.setState({hydroxychloroquine_check: 2})
                                            } else if(this.state.hydroxychloroquine_check == 2) {
                                                this.setState({hydroxychloroquine_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.hydroxychloroquine_check == 0 ? 'transparent' : this.state.hydroxychloroquine_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.hydroxychloroquine_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.hydroxychloroquine_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', marginVertical: 15}]}>If you answered Yes to any of above medications, please specify the name of drug(s) you take:</Text>

                                <View style = {[styles.component_view, {borderColor: this.state.drug_check == 0 ? '#c0c0c0' : this.state.drug_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>{this.state.drug_check == 0 ? 'Name of the drug' : this.state.drug_check == 1 ? 'Drug name' : 'Please specify'}</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.drug_check == 0) {
                                                this.setState({drug_check: 1})
                                            } else if(this.state.drug_check == 1) {
                                                this.setState({drug_check: 2})
                                            } else if(this.state.drug_check == 2) {
                                                this.setState({drug_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.drug_check == 0 ? 'transparent' : this.state.drug_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.drug_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.drug_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                    onPress = {() => {
                                        // Global.medical_history_add = true;
                                        // this.props.navigation.goBack(null);
                                        this.props.navigation.navigate("MedicalHistorySmoking");
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