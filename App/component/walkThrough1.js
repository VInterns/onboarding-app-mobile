import React, { Component } from "react";

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Animated,
    BackHandler
} from "react-native";

import FadeInView from "./FadeInView";
import backgroundImg from "../assets/Group2.png";
import mobile from "../assets/mobile.png";
//import backgroundImg from '../assets/background.png';

export default class walkThrough1 extends Component {

    constructor() {
        super();

        this.state = {
            lastScreen: ""
        };
    }

    props: {
        tryNavigate: (nextScreen: string) => void
    };

    static navigationOptions = {
        //header styling
        header: null
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    }
    handleBackButton() {
        return true;
    }

    tryNavigate = () => {
        // console.log("inside tryNavigate walkThrough1");
        this.props.tryNavigate("walkThrough2");
        this.props.navigation.navigate("walkThrough2");
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1, }}>
                {/*welcome  and on board text view*/}

                <View style={styles.WelcomOnBoardTextContainer}>

                    <View style={styles.welcomTextView}>
                        <FadeInView>
                            <Text style={styles.WelcomeText}>Welcome </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.onBoardView}>
                        <FadeInView>
                            <Text style={styles.onBoardText}>on board</Text>
                        </FadeInView>
                    </View>
                </View>

                <ImageBackground source={backgroundImg} style={styles.wallpaper} >
                    <Image source={mobile} style={{ justifyContent: 'center', alignItems: 'center', marginTop: DEVICE_HEIGHT * 0.06 }} />
                </ImageBackground>

                {/*  button view */}
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={this.tryNavigate}>
                        <Image source={require('../assets/arrow.png')} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>
                </View>

            </View >


        );
    }
}
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({

    wallpaper: { //background style
        // flex: 1,
        resizeMode: 'center',
        marginTop: DEVICE_WIDTH * 0.1,
        height: DEVICE_WIDTH * 0.93,
        width: DEVICE_WIDTH * 0.93,
        justifyContent: 'center',
        alignItems: 'center',

        //  backgroundColor: 'blue'
    },
    WelcomeText: {//welcome to word style
        color: 'red',
        fontSize: DEVICE_WIDTH * 0.085,
        fontWeight: 'bold'
    },

    onBoardText: {//login word text style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.085,
    },

    welcomTextView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    WelcomOnBoardTextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.1,
    },

    onBoardView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: { // button design
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderColor: 'red',
        transform: [     //to create rhombus shape by rotating the square shape
            { rotate: '45deg' }
        ],
        borderRadius: 10,

    },
    ButtonimageStyle: {//button icon
        margin: 13,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        transform: [ //to adjust the arrow inside the button 
            { rotate: '315deg' }
        ],
    },
    buttonView: { //wrapper for button 
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        /*         position: 'absolute',
                bottom: 30,
                right: 30 */
        marginBottom: DEVICE_HEIGHT * 0.05,
        marginLeft: DEVICE_WIDTH * 0.65,


    },
});

