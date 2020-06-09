
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


export default class MonitorSymptomsHousehold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_check: 0,
            
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
                    <View style = {{flex: 1, opacity: this.state.header_opacityAnim}}>
                        <Text style = {[stylesGlobal.title_header]}>Beat Corona</Text>
                    </View>
                </View>
                <View style = {stylesGlobal.main_view}>
                    <Text style = {stylesGlobal.sub_header}>Medical History</Text>
                    <View style = {{flex: 1, width: '100%'}}>
                        <ScrollView style = {{width: '100%', marginTop: 40}}>
                            <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>If you have attended to a hospital to receive COVID-19 care, please indicate the NHS Trust</Text>
                            {/* <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold', color: '#808080'}]}>(Press twice for unsure)</Text> */}
                            <View style = {{flex: 1, width: '100%', }}>

                                <View style = {[styles.component_view, {borderColor: this.state.search_check == 0 ? '#c0c0c0' : '#0093B8'}]}>
                                    <Text style = {[stylesGlobal.landing_screen_text, {flex: 1,}]}>{this.state.search_check == 0 ? 'Search' : 'Leeds general infirmary'}</Text>
                                    <TouchableOpacity style = {styles.check_button_view} 
                                        onPress = {() => {
                                            if(this.state.search_check == 0) {
                                                this.setState({search_check: 1})
                                            } else if(this.state.search_check == 1) {
                                                this.setState({search_check: 0})
                                            } 
                                        }}
                                    >
                                        <View style = {[styles.check_circle_view, {backgroundColor: this.state.search_check == 0 ? 'transparent' : '#0093B8'}]}>
                                        {
                                            this.state.search_check == 1 &&
                                            <Image style = {{width: '100%', height: '100%', resizeMode: 'contain', tintColor: '#ffffff'}} source={require("../../icons/checkmark_white.png")}></Image>
                                        }
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]} 
                                    onPress = {() => {
                                        this.props.navigation.navigate("MonitorSymptomsTest");
                                    }}
                                >
                                    <Text style = {stylesGlobal.submit_button_text}>Next</Text>
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
    component_view: {
        width: '100%', 
        padding: 10, 
        borderRadius: 5, 
        borderColor: '#c0c0c0', 
        borderWidth: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 30,
    },
    check_button_view: {
        width: 30, 
        height: 30, 
        marginLeft: 10, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    check_circle_view: {
        width: 20, 
        height: 20, 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#c0c0c0'
    }
});