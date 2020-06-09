
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


export default class AddSymptomResult extends Component {
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
                    <Text style = {stylesGlobal.sub_header}>Result</Text>
                    <View style = {{flex: 1, width: '100%', marginTop: 40, marginBottom: 20}}>
                        <View style = {{flex: 1, width: '100%', borderRadius: 15, backgroundColor: '#00c838', padding: 15}}>
                            <ScrollView style = {{width: '100%'}}>
                                <Text style = {[stylesGlobal.sub_header, {color: '#ffffff'}]}>Your responses indicate that the symptoms typically associated with COVID-19 are not displayed.{"\n\n"}Plase check in tomorrow.{"\n\n"}REMEMBER{"\n"}If you live with someone who has symptoms, you'll need to self-isolate for 14 days from the day their symptoms started.</Text>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#ffffff'}]}>{"\n\n"}For advice on how to self isolate please go to</Text>
                                <TouchableOpacity>
                                    <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#0054dd'}]}>this NHS website.</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style = {{marginTop: 20, width: '100%', alignItems: 'center'}}>
                            <View style = {{width: '100%'}}>
                                <Image style = {{width: '100%', height: 50, resizeMode: 'contain'}} source={require("../../icons/text_logo_1.png")}></Image>
                            </View>
                            <View style = {{width: '100%', height: 50, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/result_logo_2.png")}></Image>
                            </View>
                        </View>
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