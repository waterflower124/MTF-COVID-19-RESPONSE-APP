
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
                    <View style = {{flex: 1, width: '100%', }}>
                        <Text style = {stylesGlobal.sub_header}>Who is at risk</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold', marginVertical: 10}]}>Advice for people at high risk.</Text>
                        <Text style = {styles.content_text}>Coronavirus can make anyone serously ill, but there are some people who are at a higher risk.{"\n"}</Text>
                        <Text style = {styles.content_text}>For example, you may be at high risk from coronavirus if you:{"\n"}</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Have had an organ transplant</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Are having certain types of cancer treatment</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Have blood or bone marrow cancer, such as leukaemia</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Have a severe lung condition, such as cystic fibrosis or severe asthma.</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Have a condition that makes you much more likey to get infections.</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Are taking medicine that weakens your immune system.</Text>
                        <Text style = {[styles.content_text, {fontFamily: 'Montserrat-Bold'}]}>- Are pregnant and have a serious heart condition.{"\n\n"}</Text>
                        <Text style = {styles.content_text}>Read the full <Text style = {{color: '#0000ff'}}>advice on protecting yourself if you're at high risk from coronavirus on GOV.UK</Text>{"\n"}</Text>
                        <Text style = {[styles.content_text, {fontSize: 14}]}>Page last reviewed: 25 March 2020</Text>
                        <Text style = {[styles.content_text, {fontSize: 14}]}>Next review due: 26 March 2020</Text>
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
        fontFamily: 'Montserrat-Regular'
    }
    
});