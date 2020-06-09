
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


export default class MedicalHistoryDiagnoses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asthma_check: 0,
            emphysema_check: 0,
            other_chronic_check: 0,
            diabetes__type1_check: 0,
            diabetes__type2_check: 0,
            diabetes__other_check: 0,
            diabetes__unsure: false,
            heart_disease_check: 0,
            previous_stroke: 0,
            v_check: 0,
            hypertension_check: 0,
            vasculitis_check: 0,
            inflammatory_check: 0,
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
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Have you diagnosed with any of following conditions:</Text>
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(Press twice for unsure)</Text>
                            <View style = {{flex: 1, width: '100%', }}>
                                <View style = {[styles.component_view, {borderColor: this.state.asthma_check == 0 ? '#c0c0c0' : this.state.asthma_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Asthma</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.asthma_check == 0) {
                                                this.setState({asthma_check: 1})
                                            } else if(this.state.asthma_check == 1) {
                                                this.setState({asthma_check: 2})
                                            } else if(this.state.asthma_check == 2) {
                                                this.setState({asthma_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.asthma_check == 0 ? 'transparent' : this.state.asthma_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.asthma_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.asthma_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.emphysema_check == 0 ? '#c0c0c0' : this.state.emphysema_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Emphysema or COPD</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.emphysema_check == 0) {
                                                this.setState({emphysema_check: 1})
                                            } else if(this.state.emphysema_check == 1) {
                                                this.setState({emphysema_check: 2})
                                            } else if(this.state.emphysema_check == 2) {
                                                this.setState({emphysema_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.emphysema_check == 0 ? 'transparent' : this.state.emphysema_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.emphysema_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.emphysema_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.other_chronic_check == 0 ? '#c0c0c0' : this.state.other_chronic_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Other chronic lung condition</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.other_chronic_check == 0) {
                                                this.setState({other_chronic_check: 1})
                                            } else if(this.state.other_chronic_check == 1) {
                                                this.setState({other_chronic_check: 2})
                                            } else if(this.state.other_chronic_check == 2) {
                                                this.setState({other_chronic_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.other_chronic_check == 0 ? 'transparent' : this.state.other_chronic_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.other_chronic_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.other_chronic_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {flexDirection: 'column', borderColor: (this.state.diabetes__type1_check == 1 || this.state.diabetes__type2_check == 1 || this.state.diabetes__other_check == 1 ) ? '#0093B8' : (this.state.diabetes__type1_check == 2 || this.state.diabetes__type2_check == 2 || this.state.diabetes__other_check == 2 ) ? '#808080' : '#c0c0c0'}]}>
                                    <View style = {{width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                        <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Diabetes</Text>
                                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                        {
                                            (this.state.diabetes__type1_check == 1 || this.state.diabetes__type2_check == 1 || this.state.diabetes__other_check == 1) &&
                                            <Text style = {[stylesGlobal.landing_screen_text,]}>Type I</Text>
                                        }
                                            
                                            <TouchableOpacity style = {styles.check_button_view} 
                                                onPress = {() => {
                                                    if(this.state.diabetes__type1_check == 0) {
                                                        if(this.state.diabetes__type2_check == 2 || this.state.diabetes__other_check == 2) {
                                                            this.setState({diabetes__type1_check: 0})
                                                        } else {
                                                            this.setState({diabetes__type1_check: 1})
                                                        }
                                                    } else if(this.state.diabetes__type1_check == 1) {
                                                        this.setState({diabetes__type1_check: 2})
                                                    } else if(this.state.diabetes__type1_check == 2) {
                                                        this.setState({diabetes__type1_check: 0})
                                                    }
                                                    this.setState({
                                                        diabetes__type2_check: 0,
                                                        diabetes__other_check: 0
                                                    })
                                                }}
                                            >
                                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.diabetes__type1_check == 1 ? '#0093B8' : (this.state.diabetes__type1_check == 2 || this.state.diabetes__type2_check == 2 || this.state.diabetes__other_check == 2) ? '#808080' : 'transparent'}]}>
                                                {
                                                    this.state.diabetes__type1_check == 1 &&
                                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                                }
                                                {
                                                    (this.state.diabetes__type1_check == 2 || this.state.diabetes__type2_check == 2 || this.state.diabetes__other_check == 2) &&
                                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                                }
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                {
                                    (this.state.diabetes__type1_check == 1 || this.state.diabetes__type2_check == 1 || this.state.diabetes__other_check == 1) &&
                                    <View style = {{width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                        <View style = {{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                            <Text style = {[stylesGlobal.landing_screen_text,]}>Other</Text>
                                            <TouchableOpacity style = {styles.check_button_view} 
                                                onPress = {() => {
                                                    if(this.state.diabetes__other_check == 0) {
                                                        this.setState({diabetes__other_check: 1})
                                                    } else if(this.state.diabetes__other_check == 1) {
                                                        this.setState({diabetes__other_check: 2})
                                                    } else if(this.state.diabetes__other_check == 2) {
                                                        this.setState({diabetes__other_check: 0})
                                                    }
                                                    
                                                    this.setState({
                                                        diabetes__type1_check: 0,
                                                        diabetes__type2_check: 0
                                                    })
                                                }}
                                            >
                                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.diabetes__other_check == 0 ? 'transparent' : this.state.diabetes__other_check == 1 ? '#0093B8' : '#808080'}]}>
                                                {
                                                    this.state.diabetes__other_check == 1 &&
                                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                                }
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                            <Text style = {[stylesGlobal.landing_screen_text,]}>Type II</Text>
                                            <TouchableOpacity style = {styles.check_button_view} 
                                                onPress = {() => {
                                                    if(this.state.diabetes__type2_check == 0) {
                                                        this.setState({diabetes__type2_check: 1})
                                                    } else if(this.state.diabetes__type2_check == 1) {
                                                        this.setState({diabetes__type2_check: 2})
                                                    } else if(this.state.diabetes__type2_check == 2) {
                                                        this.setState({diabetes__type2_check: 0})
                                                    }
                                                    this.setState({
                                                        diabetes__type1_check: 0,
                                                        diabetes__other_check: 0
                                                    })
                                                }}
                                            >
                                                <View style = {[styles.check_circle_view, {backgroundColor: this.state.diabetes__type2_check == 0 ? 'transparent' : this.state.diabetes__type2_check == 1 ? '#0093B8' : '#808080'}]}>
                                                {
                                                    this.state.diabetes__type2_check == 1 &&
                                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                                }
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.heart_disease_check == 0 ? '#c0c0c0' : this.state.heart_disease_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Heart disease/angina/attack</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.heart_disease_check == 0) {
                                                this.setState({heart_disease_check: 1})
                                            } else if(this.state.heart_disease_check == 1) {
                                                this.setState({heart_disease_check: 2})
                                            } else if(this.state.heart_disease_check == 2) {
                                                this.setState({heart_disease_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.heart_disease_check == 0 ? 'transparent' : this.state.heart_disease_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.heart_disease_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.heart_disease_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.previous_stroke == 0 ? '#c0c0c0' : this.state.previous_stroke == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Previous stroke</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.previous_stroke == 0) {
                                                this.setState({previous_stroke: 1})
                                            } else if(this.state.previous_stroke == 1) {
                                                this.setState({previous_stroke: 2})
                                            } else if(this.state.previous_stroke == 2) {
                                                this.setState({previous_stroke: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.previous_stroke == 0 ? 'transparent' : this.state.previous_stroke == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.previous_stroke == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.previous_stroke == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.v_check == 0 ? '#c0c0c0' : this.state.v_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>v</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.v_check == 0) {
                                                this.setState({v_check: 1})
                                            } else if(this.state.v_check == 1) {
                                                this.setState({v_check: 2})
                                            } else if(this.state.v_check == 2) {
                                                this.setState({v_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.v_check == 0 ? 'transparent' : this.state.v_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.v_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.v_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.hypertension_check == 0 ? '#c0c0c0' : this.state.hypertension_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Hypertension</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.hypertension_check == 0) {
                                                this.setState({hypertension_check: 1})
                                            } else if(this.state.hypertension_check == 1) {
                                                this.setState({hypertension_check: 2})
                                            } else if(this.state.hypertension_check == 2) {
                                                this.setState({hypertension_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.hypertension_check == 0 ? 'transparent' : this.state.hypertension_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.hypertension_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.hypertension_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.vasculitis_check == 0 ? '#c0c0c0' : this.state.vasculitis_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Vasculitis</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.vasculitis_check == 0) {
                                                this.setState({vasculitis_check: 1})
                                            } else if(this.state.vasculitis_check == 1) {
                                                this.setState({vasculitis_check: 2})
                                            } else if(this.state.vasculitis_check == 2) {
                                                this.setState({vasculitis_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.vasculitis_check == 0 ? 'transparent' : this.state.vasculitis_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.vasculitis_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.vasculitis_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style = {[styles.component_view, {borderColor: this.state.inflammatory_check == 0 ? '#c0c0c0' : this.state.inflammatory_check == 1 ? '#0093B8' : '#808080'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>Inflammatory bowel disease</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.inflammatory_check == 0) {
                                                this.setState({inflammatory_check: 1})
                                            } else if(this.state.inflammatory_check == 1) {
                                                this.setState({inflammatory_check: 2})
                                            } else if(this.state.inflammatory_check == 2) {
                                                this.setState({inflammatory_check: 0})
                                            }
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.inflammatory_check == 0 ? 'transparent' : this.state.inflammatory_check == 1 ? '#0093B8' : '#808080'}]}>
                                        {
                                            this.state.inflammatory_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        {
                                            this.state.inflammatory_check == 2 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/question_mark.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                {/* <View style = {{marginTop: 40, width: '100%'}}>
                                    <Text style = {stylesGlobal.query_text}>Do you suffer from any lung disease, asthma, or COPD?</Text>
                                    <View style = {stylesGlobal.query_answer_view}>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{marginTop: 40, width: '100%'}}>
                                    <Text style = {stylesGlobal.query_text}>Do you suffer from any kidney disease?</Text>
                                    <View style = {stylesGlobal.query_answer_view}>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{marginTop: 40, width: '100%'}}>
                                    <Text style = {stylesGlobal.query_text}>Do you suffer from any heart disease?</Text>
                                    <View style = {stylesGlobal.query_answer_view}>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{marginTop: 40, width: '100%'}}>
                                    <Text style = {stylesGlobal.query_text}>If so, do you take prescription medication for any of the above?</Text>
                                    <View style = {stylesGlobal.query_answer_view}>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{marginTop: 40, width: '100%'}}>
                                    <Text style = {stylesGlobal.query_text}>Do you smake regularly?</Text>
                                    <View style = {stylesGlobal.query_answer_view}>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                            <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> */}

                                <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                    onPress = {() => {
                                        // Global.medical_history_add = true;
                                        // this.props.navigation.goBack(null);
                                        this.props.navigation.navigate("MedicalHistoryTransplant");
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