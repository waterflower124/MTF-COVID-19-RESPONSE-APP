
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
    KeyboardAvoidingView,
    Keyboard,
    PermissionsAndroid
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import {stylesGlobal} from '../../styles/stylesGlobal';
import Global from '../../Global/Global';
import ToggleSwitch from '../../component/togglebutton/ToggleSwitch';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');

var {height, width} = Dimensions.get('window');

export default class LocationHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map_setting_view: false,

            washing_toggle_status: false,
            contact_toggle_status: false,
            proximity_toggle_status: false,

            current_lat: 0,
            current_lng: 0,

            map_region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15
            },

            location_sharing_status: false,

            transport_show: false,
            transport_car1_select: true,
            transport_train_select: false,
            transport_bus_select: false,
            transport_uber_select: true,
            transport_taxi_select: false,
            transport_car2_select: false,
        }
    }

    async UNSAFE_componentWillMount() {
        this.requestAccess();
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', this.init_screen.bind(this));
    }

    init_screen() {
        
    }

    requestAccess = async () => {
        if(Platform.OS == "android") {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Location Permission',
                        'message': 'Wichz would like to access your location to get your things.'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // console.warn("You can use locations ")
                } else {
                    // console.warn("Location permission denied")
                }
            } catch (err) {
                // console.warn(err)
            }
        }
        this.watchID = navigator.geolocation.watchPosition((position) => {
            this.setState({
                current_lat: position.coords.latitude,
                current_lng: position.coords.longitude,
                map_region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 10,
                    longitudeDelta: 10
                }
            });
            
        }, (error)=>console.log(error.message),
        {enableHighAccuracy: false, timeout: 3, maximumAge: 1, distanceFilter: 1}
        );
    }

    location_sharing = () => {
        this.setState({
            location_sharing_status: !this.state.location_sharing_status
        })
    }

    home_map_option_action = (routeName) => {
        // let resetAction = StackActions.reset({
        //     index: 2,
        //     actions: [
        //       NavigationActions.navigate({ routeName: 'LocationHome' })
        //     ],
        // });
        
        // this.props.navigation.dispatch(resetAction);
        // this.props.navigation.navigate('UsersNavigator');

        const navigateAction = NavigationActions.navigate({
            routeName,
            action: this.props.navigation.popToTop(),
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        
        return (
            <SafeAreaView style = {styles.container} onStartShouldSetResponder = {() => Keyboard.dismiss()}>
                <View style = {stylesGlobal.header_view}>
                    <Image style = {stylesGlobal.header_heart_image} source={require("../../icons/cora_icon.png")}></Image>
                    {/* <Text style = {stylesGlobal.title_header}>Save lives</Text> */}
                </View>
                <View style = {[stylesGlobal.main_view, {paddingHorizontal: 0}]}>
                    <View style = {{flex: 1, width: '100%', }}>
                        <KeyboardAvoidingView style = {{flex: 1, width: '100%'}} behavior = {'padding'}>
                            <View style = {[stylesGlobal.sub_header_view, {paddingHorizontal: 30}]}>
                                <Text style = {stylesGlobal.sub_header}>Map</Text>
                                <TouchableOpacity onPress = {() => this.setState({map_setting_view: !this.state.map_setting_view})}>
                                    <Image style = {stylesGlobal.sub_header_image} source={require("../../icons/subheader_setting.png")}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style = {{flex: 1, width: '100%', marginTop: 10}}>
                            {
                                this.state.map_setting_view &&
                                <View style = {{position: 'absolute', width: '100%', top: 0, left: 0, backgroundColor: '#ffffff', paddingHorizontal: 20, zIndex: 20}}>
                                    <View style = {{width: '100%', paddingVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#808080', borderBottomWidth: 0.5}}>
                                        <Text style = {stylesGlobal.location_map_option_text}>Alert for hand wasing on return</Text>
                                        <View style = {{width: 60, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                                            <ToggleSwitch
                                                isOn={this.state.washing_toggle_status}
                                                size='medium'
                                                onColor = '#4bd763'
                                                offColor = '#d0d0d0'
                                                onToggle={ (isOn) => this.setState({washing_toggle_status: !this.state.washing_toggle_status}) }
                                            />
                                        </View>
                                    </View>
                                    <View style = {{width: '100%', paddingVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#808080', borderBottomWidth: 0.5}}>
                                        <Text style = {stylesGlobal.location_map_option_text}>Alert close contact with confirmed case</Text>
                                        <View style = {{width: 60, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                                            <ToggleSwitch
                                                isOn={this.state.contact_toggle_status}
                                                size='medium'
                                                onColor = '#4bd763'
                                                offColor = '#d0d0d0'
                                                onToggle={ (isOn) => this.setState({contact_toggle_status: !this.state.contact_toggle_status}) }
                                            />
                                        </View>
                                    </View>
                                    <View style = {{width: '100%', paddingVertical: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#808080', borderBottomWidth: 0.5}}>
                                        <Text style = {stylesGlobal.location_map_option_text}>Alert close proximity of prolonged time</Text>
                                        <View style = {{width: 60, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                                            <ToggleSwitch
                                                isOn={this.state.proximity_toggle_status}
                                                size='medium'
                                                onColor = '#4bd763'
                                                offColor = '#d0d0d0'
                                                onToggle={ (isOn) => this.setState({proximity_toggle_status: !this.state.proximity_toggle_status}) }
                                            />
                                        </View>
                                    </View>
                                </View>
                            }
                                <View style = {{position: 'absolute', top: 10, right: 10, flexDirection: 'row', alignItems: 'center', zIndex: 10}}>
                                {
                                    !this.state.location_sharing_status &&
                                    <Text style = {{fontSize: 16, fontFamily: 'Montserrat-Bold', color: '#000000', }}><Text style = {{color: '#0000ff'}}>Enable</Text> location sharing</Text>
                                }
                                    <TouchableOpacity style = {{width: 25, height: 25, marginLeft: 10}} onPress = {() => this.location_sharing()}>
                                    {
                                        this.state.location_sharing_status &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/location_share.png")}></Image>
                                    }
                                    {
                                        !this.state.location_sharing_status &&
                                        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/location_unshare.png")}></Image>
                                    }
                                    </TouchableOpacity>
                                </View>
                                <MapView style = {{width: '100%', height: '100%'}}
                                    region = {this.state.map_region}
                                    followUserLocation = {true}
                                    showsMyLocationButton = {true}
                                    showsUserLocation = {true}
                                >
                                    {/* <MapView.Marker
                                        coordinate = {{
                                            latitude: this.state.current_lat,
                                            longitude: this.state.current_lng
                                        }}
                                        title = {"Current Location"}
                                        // description = {"Marker Description"}
                                    />
                                    {
                                        this.state.restaruant_list.map((item, index) => 
                                        <MapView.Marker
                                            key = {index}
                                            coordinate = {item.coordinates}
                                            title = {item.title}
                                            // description = {"Marker Description"}
                                        />
                                        )
                                    } */}
                                </MapView>
                            </View>
                            <View style = {{width: '100%', backgroundColor: '#e0e0e0', padding: 10}}>
                                <TextInput style = {{width: '100%', height: 35, borderRadius: 10, backgroundColor: '#d0d0d0', paddingHorizontal: 10,paddingVertical: 0,fontFamily: 'Montserrat-Regular'}} placeholder = 'Search'></TextInput>
                            </View>    
                            <View style = {{width: '100%', aspectRatio: 3.5}}>
                            {
                                !this.state.transport_show &&
                                <ScrollView style = {{width: '100%'}}>
                                    <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderBottomColor: '#808080', borderBottomWidth: 0.5}}>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_home.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Home</Text>
                                            <TouchableOpacity style = {{width: '100%', alignItems: 'center'}}>
                                                <Text style = {[stylesGlobal.location_map_option_text, {color: '#0000ff'}]}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_commute.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Commute</Text>
                                            <TouchableOpacity style = {{width: '100%', alignItems: 'center'}}>
                                                <Text style = {[stylesGlobal.location_map_option_text, {color: '#0000ff'}]}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button} onPress = {() => this.setState({transport_show: true})}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_transport.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Transport</Text>
                                            <TouchableOpacity style = {{width: '100%', alignItems: 'center'}}>
                                                <Text style = {[stylesGlobal.location_map_option_text, {color: '#0000ff'}]}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_commute.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Blank</Text>
                                            <TouchableOpacity style = {{width: '100%', alignItems: 'center'}}>
                                                <Text style = {[stylesGlobal.location_map_option_text, {color: '#0000ff'}]}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderBottomColor: '#808080', borderBottomWidth: 0.5}}>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_localcases.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Local cases</Text>
                                        </View>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_highriskarea.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>High risk areas</Text>
                                        </View>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_mostvisited.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Most visited</Text>
                                        </View>
                                        <View style = {styles.map_option_view}>
                                            <TouchableOpacity style = {styles.map_option_image_button}>
                                                <Image style = {styles.map_option_image_view} source={require("../../icons/map_option_yourarears.png")}></Image>
                                            </TouchableOpacity>
                                            <Text style = {stylesGlobal.location_map_option_text}>Your areas</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            }
                            {
                                this.state.transport_show &&
                                <ScrollView style = {{width: '100%'}}>
                                    <View style = {{width: '100%', paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#808080'}}>
                                        <View style = {{width: width * 0.16, aspectRatio: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image style = {{width: '80%', height: '80%', resizeMode: 'contain'}} source={require("../../icons/map_option_transport.png")}></Image>
                                        </View>
                                        <View style = {{flex: 1,}}>
                                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                                                <TextInput style = {styles.map_option_textinput} placeholder = 'From'></TextInput>
                                                <TextInput style = {styles.map_option_textinput} placeholder = 'To'></TextInput>
                                            </View>
                                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}>
                                                <TextInput style = {styles.map_option_textinput} placeholder = 'Time'></TextInput>
                                                <TextInput style = {styles.map_option_textinput} placeholder = 'Date'></TextInput>
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {{width: '100%', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#808080'}}>
                                        <View style = {{width: '100%', height: 30, backgroundColor: '#e8e8e8', borderRadius: 5, padding: 2, flexDirection: 'row', marginBottom: 5}}>
                                            <TouchableOpacity style = {{flex: 1, height: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.transport_car1_select ? '#ffffff' : 'transparent'}}
                                                onPress = {() => this.setState({
                                                    transport_car1_select: true,
                                                    transport_train_select: false,
                                                    transport_bus_select: false,
                                                })}
                                            >
                                                <Text style = {stylesGlobal.location_map_option_text}>Car</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {{flex: 1, height: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.transport_train_select ? '#ffffff' : 'transparent'}}
                                                onPress = {() => this.setState({
                                                    transport_car1_select: false,
                                                    transport_train_select: true,
                                                    transport_bus_select: false,
                                                })}
                                            >
                                                <Text style = {stylesGlobal.location_map_option_text}>Train</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {{flex: 1, height: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.transport_bus_select ? '#ffffff' : 'transparent'}}
                                                onPress = {() => this.setState({
                                                    transport_car1_select: false,
                                                    transport_train_select: false,
                                                    transport_bus_select: true,
                                                })}
                                            >
                                                <Text style = {stylesGlobal.location_map_option_text}>Bus</Text>
                                            </TouchableOpacity>
                                        </View>
                                    {
                                        !this.state.transport_train_select &&
                                        <View style = {{width: '100%', height: 30, backgroundColor: '#e8e8e8', borderRadius: 5, padding: 2, flexDirection: 'row', marginBottom: 5}}>
                                            <TouchableOpacity style = {{flex: 1, height: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.transport_uber_select? '#ffffff' : 'transparent'}}
                                                onPress = {() => this.setState({
                                                    transport_uber_select: true,
                                                    transport_taxi_select: false,
                                                    transport_car2_select: false,
                                                })}
                                            >
                                                <Text style = {stylesGlobal.location_map_option_text}>Uber</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {{flex: 1, height: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.transport_taxi_select ? '#ffffff' : 'transparent'}}
                                                onPress = {() => this.setState({
                                                    transport_uber_select: false,
                                                    transport_taxi_select: true,
                                                    transport_car2_select: false,
                                                })}
                                            >
                                                <Text style = {stylesGlobal.location_map_option_text}>Taxi</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style = {{flex: 1, height: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.transport_car2_select ? '#ffffff' : 'transparent'}}
                                                onPress = {() => this.setState({
                                                    transport_uber_select: false,
                                                    transport_taxi_select: false,
                                                    transport_car2_select: true,
                                                })}
                                            >
                                                <Text style = {stylesGlobal.location_map_option_text}>Car</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                    {
                                        !this.state.transport_train_select &&
                                        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <TextInput style = {styles.map_option_textinput} placeholder = 'Number plate'></TextInput>
                                            <TextInput style = {styles.map_option_textinput} placeholder = 'Driver Name'></TextInput>
                                        </View>
                                    }
                                    {
                                        this.state.transport_train_select &&
                                        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <TextInput style = {styles.map_option_textinput} placeholder = 'Ticket Number'></TextInput>
                                            <TouchableOpacity style = {{flexDirection: 'row', width: '48%', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: '#e8e8e8', paddingHorizontal: 5, paddingVertical: 0}}>
                                                <Text style = {stylesGlobal.location_map_option_text}>Scan Ticket</Text>
                                                <View style = {{height: '80%', aspectRatio: 1, marginLeft: 5}}>
                                                    <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/scan_code.png")}></Image>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    }   
                                    </View>
                                </ScrollView>
                            }
                            </View>  
                        </KeyboardAvoidingView>
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
    map_option_view: {
        width: '16%',
        aspectRatio: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map_option_image_button: {
        width: '80%', 
        aspectRatio: 1
    },
    map_option_image_view: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain'
    },
    map_option_textinput: {
        width: '48%', 
        height: 30, 
        borderRadius: 5, 
        backgroundColor: '#e8e8e8', 
        paddingHorizontal: 5, 
        paddingVertical: 0,
        fontFamily: 'Montserrat-Regular'
    }
});