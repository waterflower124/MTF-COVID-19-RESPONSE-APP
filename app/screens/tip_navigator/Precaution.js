
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

export default class WhoRisk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    UNSAFE_componentWillMount() {
        
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.init_screen.bind(this));
    }

    init_screen() {
        
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
                    <ScrollView style = {{width: '100%'}}>
                        <Text style = {stylesGlobal.sub_header}>How to tackle spreding</Text>
                        <View style = {{width: 100, height: 40, backgroundColor: '#0000ff', marginTop: 30, justifyContent: 'center'}}>
                            <Text style = {[stylesGlobal.title_header, {color: '#ffffff', marginLeft: 10}]}>Do</Text>
                        </View>
                        <View style = {{width: '100%', flexDirection: 'row', marginTop: 20}}>
                            <Image style = {{width: 25, height: 25, resizeMode: 'contain', tintColor: '#027f3a', marginRight: 10}} source={require("../../icons/checkmark_white.png")}></Image>
                            <Text style = {styles.content_text}>Wash your hands whti soap and water often - do this for at least 20 seconds.</Text>
                        </View>
                        <View style = {{width: '100%', flexDirection: 'row', marginTop: 20}}>
                            <Image style = {{width: 25, height: 25, resizeMode: 'contain', tintColor: '#027f3a', marginRight: 10}} source={require("../../icons/checkmark_white.png")}></Image>
                            <Text style = {styles.content_text}>Use hand sanitiser gel if soap and water are not available.</Text>
                        </View>
                        <View style = {{width: '100%', flexDirection: 'row', marginTop: 20}}>
                            <Image style = {{width: 25, height: 25, resizeMode: 'contain', tintColor: '#027f3a', marginRight: 10}} source={require("../../icons/checkmark_white.png")}></Image>
                            <Text style = {styles.content_text}>Wash your hands as soon as you get back home.</Text>
                        </View>
                        <View style = {{width: '100%', flexDirection: 'row', marginTop: 20}}>
                            <Image style = {{width: 25, height: 25, resizeMode: 'contain', tintColor: '#027f3a', marginRight: 10}} source={require("../../icons/checkmark_white.png")}></Image>
                            <Text style = {styles.content_text}>Cover your mouth and nose with a tissue or your sleeve (not your hands) when you cough or sneeze.</Text>
                        </View>
                        <View style = {{width: '100%', flexDirection: 'row', marginTop: 20}}>
                            <Image style = {{width: 25, height: 25, resizeMode: 'contain', tintColor: '#027f3a', marginRight: 10}} source={require("../../icons/checkmark_white.png")}></Image>
                            <Text style = {styles.content_text}>Put used tissues in the bin immediately and wash your hands afterwards.</Text>
                        </View>

                        <View style = {{width: 100, height: 40, backgroundColor: '#0000ff', marginTop: 30, marginBottom: 10, justifyContent: 'center'}}>
                            <Text style = {[stylesGlobal.title_header, {color: '#ffffff', marginLeft: 10}]}>Don't</Text>
                        </View>
                        <View style = {{width: '100%', flexDirection: 'row', marginTop: 20}}>
                            <Image style = {{width: 25, height: 25, resizeMode: 'contain', tintColor: '#ff0000', marginRight: 10}} source={require("../../icons/cancel_icon.png")}></Image>
                            <Text style = {styles.content_text}>Do not touch your eyes, nose or mouth if your hands are not clean.</Text>
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
    content_text: {
        fontSize: 16, 
        color: '#000000', 
        fontFamily: 'Montserrat-Bold'
    }
    
});