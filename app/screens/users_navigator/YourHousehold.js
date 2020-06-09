
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

export default class YourHousehold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            household_basic_add: false,
            household_daily_add: false,
            househole_regularvisitor_add: false,
            household_daily_mobility_add: false,
            household_workplace_scholl_add: false,
            household_frontline_add: false,
        }
    }

    UNSAFE_componentWillMount() {
        
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.init_screen.bind(this));
    }

    init_screen() {
        this.setState({
            household_basic_add: Global.household_basic_add,
            household_daily_add: Global.household_daily_add,
            househole_regularvisitor_add: Global.househole_regularvisitor_add,
            household_daily_mobility_add: Global.household_daily_mobility_add,
            household_workplace_scholl_add: Global.household_workplace_scholl_add,
            household_frontline_add: Global.household_frontline_add,
        })
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
                        <ScrollView style = {{width: '100%'}}>
                            <Text style = {stylesGlobal.sub_header}>About your household</Text>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {backgroundColor: '#3c7bba', flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("AboutHousehold")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Basics</Text>
                                {
                                    !this.state.household_basic_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- Location</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- Number of people</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.household_basic_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {backgroundColor: '#3c7bba', flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("BeforeCovid")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Daily Commute</Text>
                                {
                                    !this.state.household_daily_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- Before Covid-19</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- After Covide-19</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.household_daily_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {backgroundColor: '#3c7bba', flexDirection: 'row', alignItems: 'center'}]}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Regular visitors</Text>
                                {
                                    !this.state.househole_regularvisitor_add &&
                                    <Text style = {stylesGlobal.red_big_button_subtext}>- Helpers, Carer, Family</Text>
                                }
                                </View>
                            {
                                this.state.househole_regularvisitor_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>

                            <Text style = {[stylesGlobal.sub_header, {marginTop: 30}]}>Your mobility pattern</Text>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {backgroundColor: '#3c7bba', flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("DailyMobility")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Daily mobility</Text>
                                {
                                    !this.state.household_daily_mobility_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- Before Covid-19</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- After Covid-19</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.household_daily_mobility_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {backgroundColor: '#3c7bba', flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("WorkplaceSchool")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Workplace/School</Text>
                                {
                                    !this.state.household_workplace_scholl_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- Before Covid-19</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- After Covid-19</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.household_workplace_scholl_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {backgroundColor: '#3c7bba', flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("AboutHousehold")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Frontline workers</Text>
                                {
                                    !this.state.household_frontline_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- Before Covid-19</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>- After Covid-19</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.household_frontline_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
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