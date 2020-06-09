
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

import {stylesGlobal} from '../../styles/stylesGlobal' 


export default class AddSymptoms extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                </View>
                <View style = {stylesGlobal.main_view}>
                    <Text style = {stylesGlobal.sub_header}>Daily check-up</Text>
                    <View style = {{flex: 1, width: '100%', marginTop: 40}}>
                        <ScrollView style = {{width: '100%'}}>
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>For whom are you adding symptoms:</Text>
                            <View style = {{width: '100%', justifyContent: 'center', paddingHorizontal: 30}}>
                                <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomColor: '#808080', borderBottomWidth: 0.5, paddingVertical: 10}}>
                                    <View style = {{width: 35, height: 35, alignItems: 'center', justifyContent: 'flex-end', marginRight: 15}}>
                                        <Image source={require('../../icons/tab_profile.png')} style = {{width: 30, height: 30, resizeMode: 'contain', tintColor: '#65a4e2'}} />
                                        <Image source={require('../../icons/circle_check.png')} style = {{width: 15, height: 15, position: 'absolute', left: 0, bottom: 0, resizeMode: 'contain'}} />
                                    </View>
                                    <Text style = {[stylesGlobal.query_text]}>Reece Jeanes</Text>
                                </View>
                                <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomColor: '#808080', borderBottomWidth: 0.5, paddingVertical: 10}}>
                                    <View style = {{width: 35, height: 35, alignItems: 'center', justifyContent: 'flex-end', marginRight: 15}}>
                                        <Image source={require('../../icons/tab_profile.png')} style = {{width: 30, height: 30, resizeMode: 'contain', tintColor: '#65a4e2'}} />
                                        <Image source={require('../../icons/circle_question_mark.png')} style = {{width: 15, height: 15, position: 'absolute', left: 0, bottom: 0, resizeMode: 'contain'}} />
                                    </View>
                                    <Text style = {[stylesGlobal.query_text]}>John Doe</Text>
                                </View>
                            </View>
                            <View style = {{marginTop: 40, width: '100%'}}>
                                <Text style = {stylesGlobal.query_text}>Have you/they been tested for COVID-19?</Text>
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
                                <Text style = {stylesGlobal.query_text}>If so, when was the test conducted?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <View style = {{width: '27%'}}>
                                        <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'DD'>
                                        
                                        </TextInput>
                                    </View>
                                    <View style = {{width: '27%'}}>
                                        <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'MM'>
                                        
                                        </TextInput>
                                    </View>
                                    <View style = {{width: '37%', justifyContent: 'flex-end'}}>
                                        <TextInput style = {[stylesGlobal.query_answer_textinput, {textAlign: 'right'}]} placeholder = 'YYYY'>
                                        
                                        </TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style = {{marginTop: 40, width: '100%'}}>
                                <Text style = {stylesGlobal.query_text}>Has you health changed recently?</Text>
                                <View style = {stylesGlobal.query_answer_view}>
                                    <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                        <Text style = {stylesGlobal.query_answerbutton_text}>Same as yesterday</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                        <Text style = {stylesGlobal.query_answerbutton_text}>Yes It has</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {{marginTop: 40, width: '100%'}}>
                                <Text style = {stylesGlobal.query_text}>Do you have a new continuous cough?</Text>
                                <View style = {stylesGlobal.query_answer_view}>
                                    <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                        <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                        <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {{marginTop: 40, width: '100%'}}>
                                <Text style = {stylesGlobal.query_text}>Have you developed a temperature/fever?</Text>
                                <View style = {stylesGlobal.query_answer_view}>
                                    <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                        <Text style = {stylesGlobal.query_answerbutton_text}>No</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                        <Text style = {stylesGlobal.query_answerbutton_text}>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} onPress = {() => this.props.navigation.navigate("AddSymptomResult")}>
                                <Text style = {stylesGlobal.submit_button_text}>Submit</Text>
                            </TouchableOpacity>
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
    
});