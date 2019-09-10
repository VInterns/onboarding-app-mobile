import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Button,
    Linking,//for linking a button to a link
} from 'react-native';

import FadeInView from './FadeInView';
import backgroundImg from '../assets/grouplo.png';
export default class brand extends Component {
    static navigationOp = {
        title: "Branding baby",
        fontWeight: 'bold'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.TextContainer}>
                        <View style={styles.blackTextView}>
                            <FadeInView>
                                <Text style={styles.blackText}>Our</Text>
                            </FadeInView>
                        </View>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.redText}>BRAND</Text>
                        </FadeInView>
                    </View>

                </View>

                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <ImageBackground source={backgroundImg} style={styles.wallpaper}>{  /* background */}
                    </ImageBackground>

                    <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("brand1", {})} >
                            <Text style={styles.ButtonText}>
                                NEXT
       </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    wallpaper: { //background style
        //    flex: 1,
        height: 220,
        width: 400,
        resizeMode: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 2,
        position: 'absolute',
    },

    blackText: {//welcome to word style
        // alignItems: 'center',
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },

    redText: {//login word text style

        color: 'red',
        fontWeight: 'bold',
        fontSize: 45,

    },

    blackView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        left: 40
    },

    redView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    button: { // button design
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        right: 30,
        //   backgroundColor:'#DDDD',

    },
    BackButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        left: 30,
        //  backgroundColor:'#DDDD',

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },


});
