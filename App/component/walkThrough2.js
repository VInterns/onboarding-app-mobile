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
    // BackHandler
} from "react-native";

import FadeInView from "./FadeInView";
import backgroundImg from "../assets/WalkThrough1.png";
import mobile from "../assets/group4.png";


export default class walkThrough2 extends Component {

    constructor() {
        super();

        this.state = {
            lastScreen: ""
        };
    }

    props: {
        tryNavigate: (nextScreen: string) => void,
        userId: string,
        sectionNumber: Number
    };

    static navigationOptions = {
        //header styling
        header: null
    };

    // componentDidMount() {
    //   BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    // }

    // componentWillUnmount() {
    //   BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    // }
    // handleBackButton() {
    //   return true;
    // }

    tryNavigate = () => {
        if (this.props.sectionNumber < 2) {

            this.props.tryNavigate("walkThrough3", this.props.userId, 2);
        }
        this.props.navigation.navigate("walkThrough3");
    };


    render() {
        const { navigate } = this.props.navigation;
        this.navg
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>

                <View style={styles.TextContainer}>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.RedText}>This app will guide you to </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.blackView}>
                        <FadeInView>
                            <Text style={styles.blackText}>know more about Vodafone</Text>
                        </FadeInView>
                    </View>
                </View>

                <ImageBackground source={backgroundImg} style={styles.wallpaper}>
                    <FadeInView>
                        <Image source={mobile} style={{ justifyContent: 'center', alignItems: 'center', marginTop: DEVICE_HEIGHT * 0.045, marginLeft: DEVICE_WIDTH, }} />
                    </FadeInView>
                </ImageBackground >

                {/*  button view */}
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={this.tryNavigate} >
                        <Image source={require('../assets/arrow.png')} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>
                </View>

            </View>


        );
    }
}
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
    wallpaper: { //background style
        resizeMode: 'center',
        marginTop: DEVICE_WIDTH * 0.05,
        height: DEVICE_WIDTH * 0.93,
        width: DEVICE_WIDTH * 0.93,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: DEVICE_WIDTH
    },
    RedText: {//welcome to word style
        color: 'red',
        fontSize: DEVICE_WIDTH * 0.065,
        fontFamily: "VodafoneRg"

    },

    blackText: {//login word text style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.065,
        fontWeight: 'bold',
        fontFamily: "VodafoneBold"

    },

    redView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.1
    },

    blackView: {
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
        marginBottom: DEVICE_HEIGHT * 0.05,
        marginLeft: DEVICE_WIDTH * 0.65,
    },
});
