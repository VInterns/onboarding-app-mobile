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

import centerImg from '../assets/group_1.png'
//import backgroundImg from '../assets/background.png';
export default class History5 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} style={{ position: 'absolute', top: 300 }} />{/* centered mobile logo*/}

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={{ flexDirection: 'column' }}>

                        <View style={styles.blackView}>
                            <FadeInView>
                                <Text style={styles.BoldblackText}>With partnerships in over</Text>
                            </FadeInView>
                        </View>

                        <View style={{ flexDirection: 'row' ,alignItems:'center',justifyContent:'center'}}>

                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <FadeInView>
                                    <Text style={{
                                        color: 'red',
                                        fontWeight: 'bold',
                                        fontSize: 30,
                                    }}>50 </Text>
                                </FadeInView>
                            </View>

                            <View style={styles.blackView}>
                                <FadeInView>
                                    <Text style={styles.BoldblackText}>more countries</Text>
                                </FadeInView>
                            </View>


                        </View>

                    </View>

                </View>

                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History6", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History4", {})} >
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
        fontSize: 25,
        fontWeight: 'bold'
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
        top: 200,
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