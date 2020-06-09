
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
                    <Text style = {stylesGlobal.sub_header}>Medical Background</Text>
                    <View style = {{flex: 1, width: '100%'}}>
                        <ScrollView style = {{width: '100%', marginTop: 40}}>
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Do you have any of the listed underlying health problems?</Text>
                            <View style = {{flex: 1, width: '100%', }}>
                                <View style = {{marginTop: 40, width: '100%'}}>
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
                                </View>
                                <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                    onPress = {() => {
                                        Global.medical_background_add = true;
                                        this.props.navigation.goBack(null)
                                    }}
                                >
                                    <Text style = {stylesGlobal.submit_button_text}>Add</Text>
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
    
});