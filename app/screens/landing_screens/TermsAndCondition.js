
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

import {stylesGlobal} from '../../styles/stylesGlobal';
import Global from '../../Global/Global';

export default class TermsAndConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    UNSAFE_componentWillMount() {
        
    }


    open_url = (type) => {
        if(type == "NHS") {

        } else {

        }
        alert("NHS site open");
    }

    render() {
        const data = Array.from({ length: 300 });
        return (
            <SafeAreaView style = {styles.container}>
                <View style = {[stylesGlobal.header_view, {height: 30}]}>
                    <Image style = {[stylesGlobal.header_heart_image, {position: 'absolute', top: 0, left: 10}]} source={require("../../icons/cora_icon.png")}></Image>
                    <View style = {{flex: 1, marginLeft: 40, opacity: this.state.header_opacityAnim}}>
                        <Text style = {[stylesGlobal.title_header]}>Beat Corona</Text>
                    </View>
                </View>
                <View style = {{flex: 1, width: '100%', paddingHorizontal: 30, paddingTop: 30}}>
                    <ScrollView style = {{width: '100%'}}>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>By using this app and tracking if you are well or have symptoms, you will be helping medical professionals and the NHS to better understand coronavirus and help tackle the current situation facing COVID-19.{"\n"}</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>This app allows you to help others, but does not give you health advice. If you need health advice please visit NHS website: <Text style = {{color: '#0000ff'}} onPress = {() => this.open_url("NHS")}>https://www.nhs.uk/conditions/coronavirus-covid-19/</Text>{"\n"}</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25, fontFamily: 'Montserrat-Bold'}]}>Information Sharing</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>His other design by doctors and scientists at the University of Leeds as well as.{"\n"}</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>No information you share shall be used for commercial purpose. An anonymous code will be used to replace your personal details when sharing information with the other researchers.{"\n"}</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25, fontFamily: 'Montserrat-Bold'}]}>Your consent</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>By clicking below, are consent to our using of the personal information we collect throught the use of this app in the way that we have described.{"\n"}</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>We adhere to the General Data Protection Regulation 'GDPR'. For more information about how we use and share personal information about you, please see our <Text style = {{color: '#0000ff'}} onPress = {() => this.open_url("privacy")}>privacy notice</Text>{"\n"}</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>You may withdraw your consent at any time by emailing use at @.</Text>
                        <Text style = {[stylesGlobal.landing_screen_text, {lineHeight: 25}]}>Any questions may be sent to @.</Text>
                    </ScrollView>
                </View>
                <View style = {{width: '100%', }}>
                    <View style = {stylesGlobal.landing_screen_button_view}>
                        <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("SignUpScreen")}>
                            <Text style = {stylesGlobal.submit_button_text}>I agree</Text>
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
    circle_view: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 0.5,
        marginRight: 10
    }
    
});