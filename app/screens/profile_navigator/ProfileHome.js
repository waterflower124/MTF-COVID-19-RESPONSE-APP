
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

export default class ProfileHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work_environment_add: false,
            medical_history_add: false,
            monitor_symptoms: false,
            initial_info_add: false,
            medical_background_add: false,
            add_symptoms_add: false,
            interactions_add: false,
            in_depth_medical: false,
        }
    }

    UNSAFE_componentWillMount() {
        
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.init_screen.bind(this));
    }

    init_screen() {
        this.setState({
            work_environment_add: Global.work_environment_add,
            medical_history_add: Global.medical_history_add,
            monitor_symptoms: Global.monitor_symptoms,
            initial_info_add: Global.initial_info_add,
            medical_background_add: Global.medical_background_add,
            add_symptoms_add: Global.add_symptoms_add,
            interactions_add: Global.interactions_add,
            in_depth_medical: Global.in_depth_medical,
        })
    }

    add_initial_info_set = data => {
        this.setState(data);
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
                    
                    <View style = {{flex: 1, width: '100%', }}>
                        <ScrollView style = {{width: '100%'}}>
                            <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style = {stylesGlobal.sub_header}>Your profile</Text>
                                <TouchableOpacity onPress = {() => {}}>
                                    <Image style = {stylesGlobal.sub_header_image} source={require("../../icons/subheader_setting.png")}></Image>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("WorkEnvironmentProfession")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Work Environment</Text>
                                {
                                    !this.state.work_environment_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>Quick Yes or No</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>medical questions</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.work_environment_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("MedicalHistoryDiagnoses")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Medical History</Text>
                                {
                                    !this.state.medical_history_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>Quick Yes or No</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>medical questions</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.medical_history_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("MonitorSymptomsCurrentStatus")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Monitor Symptoms</Text>
                                {
                                    !this.state.monitor_symptoms &&
                                    <Text style = {stylesGlobal.red_big_button_subtext}>Initial and weekly log.</Text>
                                }
                                </View>
                            {
                                this.state.monitor_symptoms &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            
                            {/* <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("InitialInfo")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Initial Info</Text>
                                {
                                    !this.state.initial_info_add &&
                                    <Text style = {stylesGlobal.red_big_button_subtext}>Dob & Sex at birth</Text>
                                }
                                </View>
                            {
                                this.state.initial_info_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("MedicalBackground")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Medical Background</Text>
                                {
                                    !this.state.medical_background_add &&
                                    <View>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>Quick Yes or No</Text>
                                        <Text style = {stylesGlobal.red_big_button_subtext}>medical questions</Text>
                                    </View>
                                }
                                </View>
                            {
                                this.state.medical_background_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]} onPress = {() => this.props.navigation.navigate("AddSymptoms")}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Add symptoms</Text>
                                {
                                    this.state.add_symptoms_add &&
                                    <Text style = {stylesGlobal.red_big_button_subtext}>- Daily symptoms diary</Text>
                                }
                                </View>
                            {
                                this.state.add_symptoms_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>Interactions</Text>
                                </View>
                            {
                                this.state.interactions_add &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity>
                            <TouchableOpacity style = {[stylesGlobal.red_big_button_style, {flexDirection: 'row', alignItems: 'center'}]}>
                                <View style = {{flex: 1}}>
                                    <Text style = {stylesGlobal.red_big_button_text}>In depth medical</Text>
                                </View>
                            {
                                this.state.in_depth_medical &&
                                <View style = {{width: 30, height: 30}}>
                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/checkmark_white.png")}></Image>
                                </View>
                            }
                            </TouchableOpacity> */}
                        </ScrollView>
                        {/* <TouchableOpacity style = {stylesGlobal.red_big_button_style} onPress = {() => this.props.navigation.navigate("AddSymptoms")}>
                            <Text style = {stylesGlobal.red_big_button_text}>Add Symptoms.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {stylesGlobal.red_big_button_style}>
                            <Text style = {stylesGlobal.red_big_button_text}>Add data about you.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {stylesGlobal.red_big_button_style}>
                            <Text style = {stylesGlobal.red_big_button_text}>Add symtoms of family members.</Text>
                        </TouchableOpacity> */}
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