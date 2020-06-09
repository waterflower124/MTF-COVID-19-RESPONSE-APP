
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

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            sex_male: false,
            sex_female: false,
            health_care_worker: '', // yes, no
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
                    {/* <View style = {{flex: 1, alignItems: 'center'}}>
                        <Text style = {stylesGlobal.landing_screen_text}>COVID Response</Text>
                    </View> */}
                    <View style = {{flex: 1, marginLeft: 40, opacity: this.state.header_opacityAnim}}>
                        <Text style = {[stylesGlobal.title_header]}>Beat Corona</Text>
                    </View>
                </View>
                <View style = {{flex: 1, width: '100%', paddingHorizontal: 30, paddingTop: 50}}>
                    <ScrollView style = {{flex: 1, width: '100%'}} >
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 40}]}>Create an account</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {fontSize: 14}]}><Text style = {{color: '#0000ff'}} onPress = {() => {}}>Log in</Text> if you already have an account</Text>
                        <View style = {[styles.component_view, {marginTop: 50}]}>
                            <Text style = {stylesGlobal.landing_screen_text}>Email</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, margin: 0,}]} placeholder = {'email'} onChangeText = {(text) => this.setState({email: text})}>{this.state.firstname}</TextInput>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>Password</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, }]} placeholder = {'password'} onChangeText = {(text) => this.setState({password: text})}>{this.state.lastname}</TextInput>
                        </View>
                        {/* <View style = {[styles.component_view, {marginTop: 50}]}>
                            <Text style = {stylesGlobal.landing_screen_text}>First Name</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, margin: 0,}]} placeholder = {'Your first name'} onChangeText = {(text) => this.setState({firstname: text})}>{this.state.firstname}</TextInput>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>Surname</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, }]} placeholder = {'Your last name'} onChangeText = {(text) => this.setState({lastname: text})}>{this.state.lastname}</TextInput>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>When were you born?</Text>
                            <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                <View style = {{width: '30%'}}>
                                    <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'MM'>
                                    
                                    </TextInput>
                                </View>
                                <View style = {{width: '30%'}}>
                                    <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'MM'>
                                    
                                    </TextInput>
                                </View>
                                <View style = {{width: '30%'}}>
                                    <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'YYYY'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>Ethinity</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, }]} placeholder = {'Your ethinity'} onChangeText = {(text) => {}}></TextInput>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>Your sex at birth</Text>
                            <View style = {stylesGlobal.query_answer_view}>
                                <TouchableOpacity style = {[stylesGlobal.query_answer_button, {backgroundColor: this.state.sex_female ? '#0093B8' : 'transparent', borderColor: this.state.sex_female ? '#0093B8' : '#000000'}]} onPress = {() => this.setState({sex_male: false, sex_female: true})}>
                                    <Text style = {[stylesGlobal.query_answerbutton_text, {color: this.state.sex_female ? '#ffffff' : '#000000'}]}>Female</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[stylesGlobal.query_answer_button, {backgroundColor: this.state.sex_male ? '#0093B8' : 'transparent', borderColor: this.state.sex_male ? '#0093B8' : '#000000'}]} onPress = {() => this.setState({sex_male: true, sex_female: false})}>
                                    <Text style = {[stylesGlobal.query_answerbutton_text, {color: this.state.sex_male ? '#ffffff' : '#000000'}]}>Male</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>Are you a health care worker?</Text>
                            <View style = {stylesGlobal.query_answer_view}>
                                <TouchableOpacity style = {[stylesGlobal.query_answer_button, {backgroundColor: this.state.health_care_worker == "yes" ? '#0093B8' : 'transparent', borderColor: this.state.health_care_worker == "yes" ? '#0093B8' : '#000000'}]} onPress = {() => this.setState({health_care_worker: "yes"})}>
                                    <Text style = {[stylesGlobal.query_answerbutton_text, {color: this.state.health_care_worker == "yes" ? '#ffffff' : '#000000'}]}>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {[stylesGlobal.query_answer_button, {backgroundColor: this.state.health_care_worker == "no" ? '#0093B8' : 'transparent', borderColor: this.state.health_care_worker == "no" ? '#0093B8' : '#000000'}]} onPress = {() => this.setState({health_care_worker: "no"})}>
                                    <Text style = {[stylesGlobal.query_answerbutton_text, {color: this.state.health_care_worker == "no" ? '#ffffff' : '#000000'}]}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>NHS number</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, }]} placeholder = {'if applicable'} onChangeText = {(text) => {}}></TextInput>
                        </View>
                        <View style = {styles.component_view}>
                            <Text style = {stylesGlobal.landing_screen_text}>CHI number</Text>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, }]} placeholder = {'if applicable'} onChangeText = {(text) => {}}></TextInput>
                        </View> */}
                        <View style = {{width: '100%'}}>
                            <View style = {stylesGlobal.landing_screen_button_view}>
                                {/* <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("Verification")}> */}
                                <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("LandingSummary1")}>
                                    <Text style = {stylesGlobal.submit_button_text}>Login</Text>
                                </TouchableOpacity>
                            </View>
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
        marginBottom: 20
    }
    
});