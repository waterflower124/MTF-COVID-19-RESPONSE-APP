
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


export default class AddOtherSymptoms extends Component {
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
                    <Text style = {stylesGlobal.sub_header}>Add others symptoms</Text>
                    <View style = {{flex: 1, width: '100%', }}>
                        <View style = {{marginTop: 40, width: '100%'}}>
                            <Text style = {stylesGlobal.query_text}>Are you living with this person?</Text>
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
                            <Text style = {stylesGlobal.query_text}>Have they been tested for COVID-19?</Text>
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
                            <Text style = {stylesGlobal.query_text}>How do they feel right now?</Text>
                            <View style = {stylesGlobal.query_answer_view}>
                                <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                    <Text style = {stylesGlobal.query_answerbutton_text}>Health as normal</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {stylesGlobal.query_answer_button}>
                                    <Text style = {stylesGlobal.query_answerbutton_text}>No quite right</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]}>
                            <Text style = {stylesGlobal.submit_button_text}>Submit</Text>
                        </TouchableOpacity>
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