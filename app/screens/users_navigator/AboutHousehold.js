
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
    TextInput,
} from 'react-native';

import {stylesGlobal} from '../../styles/stylesGlobal' 
import Global from '../../Global/Global';


export default class AboutHousehold extends Component {
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
                    <Text style = {stylesGlobal.sub_header}>Add Symptoms</Text>
                    <View style = {{flex: 1, width: '100%', }}>
                        <View style = {{marginTop: 40, width: '100%'}}>
                            <Text style = {stylesGlobal.query_text}>Where whould you live?</Text>
                            <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                <View style = {{width: '45%'}}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Pstcode'>
                                    
                                    </TextInput>
                                </View>
                                <View style = {{width: '45%', justifyContent: 'flex-end'}}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'House/Flat No'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <View style = {{marginTop: 40, width: '100%'}}>
                            <Text style = {stylesGlobal.query_text}>How many people live with you?</Text>
                            <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Number of people (including your self)'>
                                
                                </TextInput>
                            </View>
                        </View>
                        <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                            onPress = {() => {
                                Global.household_basic_add = true;
                                this.props.navigation.goBack(null);
                            }}
                        >
                            <Text style = {stylesGlobal.submit_button_text}>Add</Text>
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