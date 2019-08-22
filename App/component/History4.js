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

} from 'react-native';

import FadeInView from './FadeInView'

import centerImg from '../assets/map.png'
//import backgroundImg from '../assets/background.png';
export default class History4 extends Component {

    static navigationOptions = {//header styling
        title: 'History4',
        fontWeight: 'bold'
    };


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} style={{ position: 'absolute', top: 60 }} />{/* centered mobile logo*/}

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={styles.blackView}>
                        <FadeInView>
                            <Text style={styles.BoldblackText}>Vodafone started back in UK in 1985,</Text>
                        </FadeInView>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.blackText}>
                                where after several acquisitions of other
                            </Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={styles.blackText}>
                                operators such as Omnitel,Airtel and
                            </Text>
                        </View>
                        {/* 
                        <FadeInView>
                            <Text style={styles.blackText}>
                                Panafon which are now Vodafone Italy, Vodafone Spain & Vodafone Greece
                            </Text>
                        </FadeInView>

                        <FadeInView>
                            <Text style={styles.blackText}>
                                respectively.
                            </Text>
                        </FadeInView> */}

                    </View>

                </View>

                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History5", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("GreatJob", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>


            </View >


        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({

    BoldblackText: {//welcome to word style
        // alignItems: 'center',
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },
    blackText: {//welcome to word style
        // alignItems: 'center',
        color: 'black',
        fontSize: 17,
        //fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },


    blackView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 370,
        //textAlign:'justify'
        //left: 40
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