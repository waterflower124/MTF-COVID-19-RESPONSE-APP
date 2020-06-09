
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

export default class LandingSummary2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone_number: ''
        }
    }

    UNSAFE_componentWillMount() {
        
    }


    render() {
        const data = Array.from({ length: 300 });
        return (
            <SafeAreaView style = {styles.container} onStartShouldSetResponder = {() => Keyboard.dismiss()}>
                <View style = {stylesGlobal.header_view}>
                    <Image style = {stylesGlobal.header_heart_image} source={require("../../icons/cora_icon.png")}></Image>
                    {/* <Text style = {stylesGlobal.title_header}>Save lives</Text> */}
                </View>
                <View style = {{flex: 1, width: '100%', paddingHorizontal: 30, paddingTop: 50, alignItems: 'center'}}>
                    <Text style = {[stylesGlobal.sub_header, {marginBottom: 10}]}>Every answer matters</Text>
                    <Text style = {styles.content_text}>With each question you help answer, we get closer to winning this fight.</Text>
                    <Text style = {[styles.content_text, {marginTop: 20}]}>Your contributions could lead to a breakthough.</Text>
                    <View style = {{width: '70%', aspectRatio: 3, marginTop: 50}}>
                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source = {require('../../icons/landing_summary2_icon.png')}></Image>
                    </View>
                </View>
                <View style = {{width: '100%', }}>
                    <View style = {stylesGlobal.landing_screen_button_view}>
                        <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("MainTabNavigator")}>
                            <Text style = {stylesGlobal.submit_button_text}>Start saving lives</Text>
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
        // alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    component_view: {
        width: '100%',
        marginBottom: 20
    },
    content_text: {
        fontSize: 18, 
        color: '#000000', 
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }
    
});