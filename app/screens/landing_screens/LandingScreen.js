
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
    Animated
} from 'react-native';

import {stylesGlobal} from '../../styles/stylesGlobal';
import Global from '../../Global/Global';
var {width, height} = Dimensions.get('window');
const isIphoneX = Platform.OS === 'ios' && (Dimensions.get('window').height === 812 || Dimensions.get('window').height === 896);
const toppadding = isIphoneX ? 22 : 0;

export default class LandingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_animation: false,
            show_main_view: false,

            bold_status: false,

            positive_animate: true,

            animate_duration: 1000,
            header_opacityAnim: new Animated.Value(0),
            main_texts_composeAnim: new Animated.Value(0),
            show_sec_third_text: true,
            savelive_textAnim: new Animated.Value(0),
            heart_textAnim: new Animated.Value(0),
            first_textviewAnim: new Animated.Value(0),
            second_textviewAnim: new Animated.Value(0),
            third_textviewAnim: new Animated.Value(0),

            hearttextview_x: 0,
            hearttextview_y: 0,

            logo_text_transAnim: new Animated.Value(0),
            cctu_logo_opacityAnim: new Animated.Value(0),
            disappear_cctu_logo: false,
            cctu_logo_opacityInverseAnim: new Animated.Value(0),

            logo_textview_x: 0,
            toHeaderAnim: new Animated.Value(0),

            safe_width: 0,
            safe_height: 0,
            beat_coronawidth: 0,
        }
    }

    UNSAFE_componentWillMount() {
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                start_animation: true
            }, () => {
                this.animate_logo_text();
                this.animate_univercity_logo();
            })
        }, 1000);
        // setTimeout(() => {
        //     this.setState({
        //         bold_status: true
        //     }, () => {
        //         this.animate_main_texts();
                
        //     })
        // }, 1000);
        
    }
    
    animate_logo_text = () => {
        this.state.logo_text_transAnim.setValue(0)
        Animated.timing(this.state.logo_text_transAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                this.setState({
                    disappear_cctu_logo: true
                }, () => this.animate_disappear_cctu())
            }, 1000);
            
        });
    }

    animate_univercity_logo = () => {
        this.state.cctu_logo_opacityAnim.setValue(0)
        Animated.timing(this.state.cctu_logo_opacityAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start();
    };

    animate_disappear_cctu = () => {
        this.state.cctu_logo_opacityInverseAnim.setValue(0)
        Animated.timing(this.state.cctu_logo_opacityInverseAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start(() => {
            this.animate_toHeader();
        });
    };

    animate_toHeader = () => {
        this.state.toHeaderAnim.setValue(0)
        Animated.timing(this.state.toHeaderAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start(() => {
            this.setState({
                show_main_view: true
            }, () => {
                this.animate_first_textview();
            })
        });
    };
    // animate_header_text = () => {
    //     this.state.header_opacityAnim.setValue(0)
    //     Animated.timing(this.state.header_opacityAnim, {
    //         toValue: 1, // Animate to opacity: 1 (opaque)
    //         duration: 2 * this.state.animate_duration, // Make it take a while
    //         useNativeDriver: true
    //     }).start();
    // };

    // animate_main_texts = () => {
    //     this.state.main_texts_composeAnim.setValue(0)
    //     Animated.timing(this.state.main_texts_composeAnim, {
    //         toValue: 1, // Animate to opacity: 1 (opaque)
    //         duration: this.state.animate_duration, // Make it take a while
    //         useNativeDriver: false
    //     }).start(() => {
    //         this.setState({
    //             show_sec_third_text: false
    //         })
    //         this.animate_savelive_text();
    //     });
    // };

    // animate_savelive_text = () => {
    //     this.setState({
    //         positive_animate: true
    //     })
    //     this.state.savelive_textAnim.setValue(0);
    //     Animated.timing(this.state.savelive_textAnim, {
    //         toValue: 1, // Animate to opacity: 1 (opaque)
    //         duration: this.state.animate_duration, // Make it take a while
    //         useNativeDriver: true
    //     }).start(() => {
    //         setTimeout(() => {
    //             this.animate_heart_text();
    //             this.animate_header_text();
    //         }, 1000);
    //     });
    // };

    // animate_heart_text = () => {
    //     this.setState({
    //         positive_animate: false
    //     })
    //     this.state.heart_textAnim.setValue(0)
    //     Animated.timing(this.state.heart_textAnim, {
    //         toValue: 1, // Animate to opacity: 1 (opaque)
    //         duration: this.state.animate_duration, // Make it take a while
    //         useNativeDriver: true
    //     }).start(() => {
    //         this.setState({
    //             show_main_view: true
    //         }, () => {
    //             this.animate_first_textview()
    //         })
    //     });
    // };

    animate_first_textview = () => {
        
        this.state.first_textviewAnim.setValue(0)
        Animated.timing(this.state.first_textviewAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start(() => {
            this.animate_second_textview()
        });
    };

    animate_second_textview = () => {
        
        this.state.second_textviewAnim.setValue(0)
        Animated.timing(this.state.second_textviewAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start(() => {
            this.animate_third_textview()
        });
    };

    animate_third_textview = () => {
        
        this.state.third_textviewAnim.setValue(0)
        Animated.timing(this.state.third_textviewAnim, {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: this.state.animate_duration, // Make it take a while
            useNativeDriver: true
        }).start();
    };


    NHS_site_open = () => {
        alert("NHS site open");
    }

    render() {
        
        return (
            <View style = {styles.container}>
                <SafeAreaView style = {{flex: 1, width: '100%',}} onLayout = {(event) => this.setState({safe_width: event.nativeEvent.layout.width, safe_height: event.nativeEvent.layout.height})}>
                {
                    this.state.show_main_view &&
                    <View style = {[stylesGlobal.header_view, {height: 30,}]}>
                        <Image style = {[stylesGlobal.header_heart_image, {width: 30, height: 30, position: 'absolute', top: 0, left: 10}]} source={require("../../icons/cora_icon.png")}></Image>
                        <View style = {{flex: 1, marginLeft: 40, }}>
                            <Text style = {[stylesGlobal.title_header]}>Beat Corona</Text>
                        </View>
                    </View>
                }
                {
                    !this.state.show_main_view &&
                    <View style = {{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Animated.View style = {{height: 80, flexDirection: 'row', position: 'absolute', alignSelf: 'center', zIndex: 10,
                            transform: [
                                {
                                    translateY: this.state.logo_text_transAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -80],
                                        extrapolate: 'clamp'
                                    })
                                }
                            ],}}
                            onLayout = {(event) => this.setState({logo_textview_x: event.nativeEvent.layout.x, })}
                        >
                            <Animated.View style = {{height: '100%', aspectRatio: 1,
                                    transform: [
                                        {
                                            translateX: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -(this.state.logo_textview_x + 10)],
                                                extrapolate: 'clamp'
                                            })
                                        },
                                        {
                                            translateY: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -(height / 2 - 40 - 80 - toppadding)],
                                                extrapolate: 'clamp'
                                            })
                                        },
                                        {
                                            scale: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 0.4],
                                                extrapolate: 'clamp'
                                            })
                                        }
                                    ],
                            }}>
                                <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/cora_icon.png")}></Image>
                            </Animated.View>
                            <Animated.View style = {{height: '100%', justifyContent: 'space-between', marginLeft: 5,
                                    transform: [
                                        {
                                            translateX: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -(this.state.logo_textview_x - this.state.logo_textview_x / 2)],
                                                extrapolate: 'clamp'
                                            })
                                        },
                                        {
                                            translateY: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -(height / 2 - height / 4)],
                                                extrapolate: 'clamp'
                                            })
                                        }
                                    ],
                                    opacity: this.state.toHeaderAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0],
                                        extrapolate: 'clamp'
                                    })
                            }}>
                                <Text style = {{fontSize: 32, fontFamily: 'Montserrat-Bold'}}>BEAT</Text>
                                <Text style = {{fontSize: 32, fontFamily: 'Montserrat-Bold' }}>CORONA</Text>
                            </Animated.View>
                        </Animated.View>
                    {
                        this.state.start_animation &&
                        <Animated.View style = {{alignItems: 'center', 
                                opacity: !this.state.disappear_cctu_logo ? this.state.cctu_logo_opacityAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1],
                                    extrapolate: 'clamp'
                                }) : this.state.cctu_logo_opacityInverseAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0],
                                    extrapolate: 'clamp'
                                })
                            }}
                        >
                            <Text style = {{fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#d0d0d0'}}>Trial sponser</Text>
                            <Image style = {{height: 50, aspectRatio: 2, resizeMode: 'contain'}} source={require("../../icons/cctu_icon.png")}></Image>
                        </Animated.View>
                    }
                    {
                        this.state.start_animation &&
                        <View style = {{position: 'absolute', width: '100%', bottom: 30, left: 0, alignItems: 'center'}}>
                            <View style = {{alignItems: 'center', width: '100%'}}>
                                <Animated.View style = {[{opacity: this.state.cctu_logo_opacityAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 1],
                                            extrapolate: 'clamp'
                                        })
                                    }, {transform: [
                                        {
                                            translateX: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -100],
                                                extrapolate: 'clamp'
                                            })
                                        },
                                        {
                                            translateY: this.state.toHeaderAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -200],
                                                extrapolate: 'clamp'
                                            })
                                        }
                                    ],
                                    opacity: this.state.toHeaderAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0],
                                        extrapolate: 'clamp'
                                    })}]}
                                >
                                    <Text style = {{fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#d0d0d0'}}>Powered by</Text>
                                </Animated.View>
                                <Animated.View style = {{position: 'absolute', height: 25,
                                        transform: [
                                            {
                                                translateX: this.state.toHeaderAnim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, -((width - this.state.beat_coronawidth) / 2 - 50)],
                                                    extrapolate: 'clamp'
                                                })
                                            },
                                            {
                                                translateY: this.state.toHeaderAnim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, -(this.state.safe_height - 30 - 25 - 5 - 25 - 44 - 34 - 10)],
                                                    extrapolate: 'clamp'
                                                })
                                            }
                                        ],
                                        opacity: this.state.toHeaderAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 1],
                                            extrapolate: 'clamp'
                                        })
                                    }}
                                    onLayout = {(event) => this.setState({beat_coronawidth: event.nativeEvent.layout.width, })}
                                >
                                    <Text style = {{fontSize: 24, fontFamily: 'Montserrat-Bold', color: '#000000', opacity: 1}}>Beat Corona</Text>
                                </Animated.View>
                                <Animated.View style = {{opacity: !this.state.disappear_cctu_logo ? this.state.cctu_logo_opacityAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 1],
                                            extrapolate: 'clamp'
                                        }) : this.state.cctu_logo_opacityInverseAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 0],
                                            extrapolate: 'clamp'
                                        })
                                    }}
                                >
                                    <Image style = {{height: 25, resizeMode: 'contain', marginTop: 5}} source={require("../../icons/perfexia_logo.png")}></Image>
                                </Animated.View>
                            </View>
                        </View>
                    }
                        {/* <View style = {{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Animated.View style = {{height: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                                    opacity: this.state.positive_animate ? this.state.savelive_textAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1],
                                        extrapolate: 'clamp'
                                    }) : this.state.heart_textAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0],
                                        extrapolate: 'clamp'
                                    })
                                }}
                            >
                                <Image style = {{height: '100%', resizeMode: 'contain'}} source={require("../../icons/result_logo_2.png")}></Image>
                            </Animated.View>
                        </View>
                        <Animated.View style = {{height: 100, flexDirection: 'row', zIndex: 10,
                                transform: [
                                    {
                                        translateY: this.state.savelive_textAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, -120],
                                            extrapolate: 'clamp'
                                        })
                                    }
                                ],
                            }}
                            onLayout = {(event) => this.setState({hearttextview_x: event.nativeEvent.layout.x, hearttextview_y: event.nativeEvent.layout.y})}
                        >
                            <Animated.View style = {{height: '80%', aspectRatio: 1,
                                    transform: [
                                        {
                                            translateX: this.state.heart_textAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -(this.state.hearttextview_x + 10)],
                                                extrapolate: 'clamp'
                                            })
                                        },
                                        {
                                            translateY: this.state.heart_textAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -(height / 2 - 150)],
                                                extrapolate: 'clamp'
                                            })
                                        },
                                        {
                                            scale: this.state.heart_textAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 0.4],
                                                extrapolate: 'clamp'
                                            })
                                        }
                                    ],
                                }}
                            >
                                <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require("../../icons/cora_icon.png")}></Image>
                            </Animated.View>
                            <Animated.View style = {{
                                    opacity: this.state.heart_textAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0],
                                        extrapolate: 'clamp'
                                    })
                                }}
                            >
                                <Animated.View style = {{
                                    height: '33%',
                                    transform: [
                                    {
                                        translateY: this.state.main_texts_composeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 33],
                                            extrapolate: 'clamp'
                                        })
                                    }
                                ]}}>
                                    <Text style = {{fontSize: 24, fontFamily: this.state.bold_status ? 'Montserrat-Bold' : 'Montserrat-Regular',}}>{this.state.show_sec_third_text ? "Covid" : "Cov ID"}</Text>
                                </Animated.View>
                            
                                <Animated.View style = {{
                                    height: '33%',
                                    width: this.state.main_texts_composeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['100%', '10%'],
                                        extrapolate: 'clamp'
                                    }),
                                    transform: [
                                        {
                                            translateX: this.state.main_texts_composeAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, 60],
                                                extrapolate: 'clamp'
                                            })
                                        }
                                    ]}}>
                                {
                                    this.state.show_sec_third_text &&
                                    <Text style = {{fontSize: 24, fontFamily: this.state.bold_status ? 'Montserrat-Bold' : 'Montserrat-Regular', }}>Information</Text>
                                }
                                </Animated.View>
                                <Animated.View style = {{
                                    height: '33%',
                                    width: this.state.main_texts_composeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['100%', '10%'],
                                        extrapolate: 'clamp'
                                    }),
                                    transform: [
                                        {
                                            translateX: this.state.main_texts_composeAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, 65],
                                                extrapolate: 'clamp'
                                            }),
                                        },
                                        {
                                            translateY: this.state.main_texts_composeAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -33],
                                                extrapolate: 'clamp'
                                            }),
                                        }
                                    ]}}>
                                {
                                    this.state.show_sec_third_text &&
                                    <Text style = {{fontSize: 24, fontFamily: this.state.bold_status ? 'Montserrat-Bold' : 'Montserrat-Regular'}}>Diary</Text>
                                }
                                </Animated.View>
                            </Animated.View>
                        </Animated.View> */}
                        
                    </View>
                }
                {
                    this.state.show_main_view &&
                    <View style = {{flex: 1, width: '100%', paddingHorizontal: 30, paddingTop: 30}}>
                        <Animated.View style = {{width: '100%', marginBottom: 20, opacity: this.state.first_textviewAnim}}>
                            <Text style = {[stylesGlobal.sub_header]}>How you can help.</Text>
                            <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 5, marginTop: 15}}>
                                <View style = {styles.circle_view}></View>
                                <Text style = {[stylesGlobal.landing_screen_text]}>Better protect those at risk.</Text>
                            </View>
                            <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 5, marginTop: 15}}>
                                <View style = {styles.circle_view}></View>
                                <Text style = {[stylesGlobal.landing_screen_text]}>(What we need(known impact))</Text>
                            </View>
                        </Animated.View>
                        <Animated.View style = {{width: '100%', marginBottom: 20, opacity: this.state.second_textviewAnim}}>
                            <Text style = {[stylesGlobal.sub_header]}>How we can help you.</Text>
                            <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 5, marginTop: 15}}>
                                <View style = {styles.circle_view}></View>
                                <Text style = {[stylesGlobal.landing_screen_text]}>Rerduce occupational risk.</Text>
                            </View>
                            <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 5, marginTop: 15}}>
                                <View style = {styles.circle_view}></View>
                                <Text style = {stylesGlobal.landing_screen_text}>Understand how to help.</Text>
                            </View>
                            <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 5, marginTop: 15}}>
                                <View style = {styles.circle_view}></View>
                                <Text style = {stylesGlobal.landing_screen_text}>Better protect yourself.</Text>
                            </View>
                            <View style = {{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 5, marginTop: 15}}>
                                <View style = {styles.circle_view}></View>
                                <Text style = {stylesGlobal.landing_screen_text}>(Value position)</Text>
                            </View>
                        </Animated.View>
                    </View>
                }
                </SafeAreaView>
            {/* {
                this.state.show_main_view &&
                <Animated.View style = {{width: '100%', backgroundColor: '#e8e8e8', paddingBottom: isIphoneX ? 30 : 0, borderTopLeftRadius: 30, borderTopRightRadius: 30, shadowColor: '#808080', shadowOpacity: 0.3, shadowRadius: 3, opacity: this.state.third_textviewAnim}}>
                    <View style = {{width: '100%', paddingTop: 20, alignItems: 'center'}}>
                        <Image style = {{width: '70%', height: 25, resizeMode: 'contain'}} source={require("../../icons/perfexia_logo.png")}></Image>
                    </View>
                    <View style = {{width: '100%', paddingVertical: 10, alignItems: 'center'}}>
                        <Image style = {{width: '70%', height: 50, resizeMode: 'contain'}} source={require("../../icons/text_logo_1.png")}></Image>
                    </View>
                    <View style = {{width: '100%', alignItems: 'center'}}>
                        <Text style = {styles.help_text}>This app is used to help the UK population and the NHS.</Text>
                        <Text style = {styles.help_text}>This app does not give medical health advice.</Text>
                        <Text style = {styles.help_text}>please visit the <Text style = {{fontFamily: 'Montserrat-Bold', textDecorationLine: 'underline'}} onPress = {() => this.NHS_site_open()}>NHS website</Text> if you need health advice.</Text>
                    </View>
                    <View style = {stylesGlobal.landing_screen_button_view}>
                        <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("TermsAndCondition")}>
                            <Text style = {stylesGlobal.submit_button_text}>Create account</Text>
                            <Text style = {{fontSize: 14, color: '#ffffff', fontFamily: 'Montserrat-Regular'}}>Save Lives</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {stylesGlobal.logo_text_view}>
                        <Text style = {stylesGlobal.logo_text}>perfeXia Health Technologies Ltd</Text>
                    </View>
                </Animated.View>
            } */}
            {
                this.state.show_main_view &&
                <Animated.View style = {{width: '100%', backgroundColor: '#e8e8e8', paddingBottom: isIphoneX ? 30 : 0, borderTopLeftRadius: 30, borderTopRightRadius: 30, shadowColor: '#808080', shadowOpacity: 0.3, shadowRadius: 3, opacity: this.state.third_textviewAnim}}>
                    <View style = {{width: '100%', paddingTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                        <Image style = {{width: '25%', aspectRatio: 2, resizeMode: 'contain'}} source={require("../../icons/cctu_icon.png")}></Image>
                        <Image style = {{width: '40%', resizeMode: 'contain'}} source={require("../../icons/nihr_icon.png")}></Image>
                    </View>
                    <View style = {{width: '100%', paddingVertical: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                        <Image style = {{width: '30%', aspectRatio: 6, resizeMode: 'contain'}} source={require("../../icons/university_logo.png")}></Image>
                        <Image style = {{width: '30%', aspectRatio: 6, resizeMode: 'contain', marginLeft: 20}} source={require("../../icons/perfexia_logo.png")}></Image>
                    </View>
                    <View style = {{width: '100%', alignItems: 'center'}}>
                        <Text style = {styles.help_text}>This app is used to help the UK population and the NHS.</Text>
                        <Text style = {styles.help_text}>This app does not give medical health advice.</Text>
                        <Text style = {styles.help_text}>please visit the <Text style = {{fontFamily: 'Montserrat-Bold', textDecorationLine: 'underline'}} onPress = {() => this.NHS_site_open()}>NHS website</Text> if you need health advice.</Text>
                    </View>
                    <View style = {stylesGlobal.landing_screen_button_view}>
                        <TouchableOpacity style = {stylesGlobal.landing_screen_button} onPress = {() => this.props.navigation.navigate("SignUpScreen")}>
                            <Text style = {stylesGlobal.submit_button_text}>Login</Text>
                            {/* <Text style = {{fontSize: 14, color: '#ffffff', fontFamily: 'Montserrat-Regular'}}>Beat Corona</Text> */}
                        </TouchableOpacity>
                    </View>
                    <View style = {stylesGlobal.logo_text_view}>
                        <Text style = {stylesGlobal.logo_text}>perfeXia Health Technologies Ltd</Text>
                    </View>
                </Animated.View>
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    circle_view: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 0.5,
        marginRight: 10
    },
    help_text: {
        fontSize: 12, 
        color: '#303030',
        fontFamily: 'Montserrat-Regular'
    }
    
});