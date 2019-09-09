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

import centerImg from '../assets/undrawBuildingBlocksN0Nc.png'
//import backgroundImg from '../assets/background.png';
export default class History extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} style={{ marginTop: 60 }} />{/* centered mobile logo*/}

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.blackTextView}>
                            <FadeInView>
                                <Text style={styles.blackText}>Vodafone</Text>
                            </FadeInView>
                        </View>

                        <View style={styles.blackTextView}>
                            <FadeInView>
                                <Text style={styles.blackText}>Group</Text>
                            </FadeInView>
                        </View>
                    </View>

                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.redText}>History</Text>
                        </FadeInView>
                    </View>

                </View>

                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History1", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("walkThrough", {})} >
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
        alignItems:'center',
        justifyContent:'center'
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