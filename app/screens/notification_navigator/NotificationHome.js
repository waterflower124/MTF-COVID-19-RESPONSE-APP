
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

export default class NotificatoinHome extends Component {
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
                    
                    <View style = {{flex: 1, width: '100%', }}>
                            <Text style = {stylesGlobal.sub_header}>Notifications</Text>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flex: 1, backgroundColor: '#e3b71b'}]}>
                                <Text style = {stylesGlobal.red_big_button_text}>NHS News</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flex: 1, backgroundColor: '#e3b71b'}]}>
                                <Text style = {stylesGlobal.red_big_button_text}>Realtime updates</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flex: 1, backgroundColor: '#e3b71b'}]}>
                                <Text style = {stylesGlobal.red_big_button_text}>About your input</Text>
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