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

import letter from "../assets/group_2.png";


export default class walkThrough2 extends Component {
    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.navigate("Video2")
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

    static navigationOptions = {//header styling
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>

                <View style={styles.TextContainer}>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.RedText}> Congratulations! </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.blackView}>
                        <FadeInView>
                            <Text style={styles.blackText}>You've been awarded with the letter</Text>
                        </FadeInView>
                    </View>
                </View>

                <Image source={letter} style={{ marginTop: DEVICE_HEIGHT * 0.13 }} />


                {/*  button view */}
                {/*               <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={this.tryNavigate} >
                        <Image source={require('../assets/arrow.png')} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>
                </View> */}

            </View>


        );
    }
}
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({

    RedText: {//welcome to word style
        color: 'red',
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * 0.089,

    },

    blackText: {//login word text style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.0507,
        //  fontWeight: 'bold'
    },

    redView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.15
    },

    blackView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    /*  button: { // button design
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
     }, */
});
