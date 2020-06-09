
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

export default class Verification extends Component {
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
                    <KeyboardAvoidingView style = {{width: '100%'}} behavior={'padding'} >
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 40}]}>Optional contact information</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {fontSize: 14}]}>Please share your name and phone number. This is opional but would allow someone to contact you in the event of an emergency.</Text>
                        <View style = {[styles.component_view, {marginTop: 30}]}>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, margin: 0,}]} placeholder = {'Name'} onChangeText = {(text) => this.setState({name: text})}>{this.state.name}</TextInput>
                        </View>
                        <View style = {styles.component_view}>
                            <TextInput style = {[stylesGlobal.landing_screen_text, {height: 30, borderBottomWidth: 0.5, borderBottomColor: '#808080', padding: 0, }]} keyboardType = {'phone-pad'} placeholder = {'Your phone number'} onChangeText = {(text) => this.setState({phone_number: text})}>{this.state.phone_number}</TextInput>
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <View style = {{width: '100%'}}>
                    <View style = {[stylesGlobal.landing_screen_button_view, {flexDirection: 'row'}]}>
                        <View style = {{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => {}}>
                                <Text style = {stylesGlobal.submit_button_text}>Add</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("LandingSummary1")}>
                                <Text style = {stylesGlobal.submit_button_text}>Skip</Text>
                            </TouchableOpacity>
                        </View>
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
    }
    
});