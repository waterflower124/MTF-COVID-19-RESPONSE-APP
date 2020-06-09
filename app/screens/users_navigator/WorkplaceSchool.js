
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

import {stylesGlobal} from '../../styles/stylesGlobal';
import Global from '../../Global/Global';


export default class WorkplaceSchool extends Component {

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
                    <Text style = {stylesGlobal.title_header}>Your workplace/school</Text>
                    <View style = {{flex: 1, width: '100%', }}>
                        <ScrollView style = {{width: '100%'}}>
                            <Text style = {[stylesGlobal.sub_header, {marginTop: 30}]}>Before COVID-19</Text>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Where was your work/school?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Postcode'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>How many days per week?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Number of times per week'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>How many hours per week?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Number of hours per week'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>How many did you interact with?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Size of your work place/school'>
                                    
                                    </TextInput>
                                </View>
                            </View>

                            <Text style = {[stylesGlobal.sub_header, { marginTop: 30}]}>During COVID-19</Text>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>Are yoiu still commuting to work?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Postcode'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>How many days per week?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Number of times per week'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>How many hours per week?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Number of hours per week'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            <View style = {{marginTop: 20, width: '100%'}}>
                                <Text style = {[stylesGlobal.query_text, {fontFamily: 'Montserrat-Bold'}]}>How many did you interact with?</Text>
                                <View style = {[stylesGlobal.query_answer_view, {borderBottomWidth: 0}]}>
                                    <TextInput style = {stylesGlobal.query_answer_textinput} placeholder = 'Size of your work place/school'>
                                    
                                    </TextInput>
                                </View>
                            </View>
                            
                            <TouchableOpacity style = {[stylesGlobal.submit_button, {marginTop: 40}]}
                                onPress = {() => {
                                    Global.household_workplace_scholl_add = true;
                                    this.props.navigation.goBack(null);
                                }}
                            >
                                <Text style = {stylesGlobal.submit_button_text}>Add</Text>
                            </TouchableOpacity>
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
    
});