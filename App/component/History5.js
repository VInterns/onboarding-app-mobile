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
import { DeviceSensor } from 'expo-sensors';
//import backgroundImg from '../assets/background.png';
export default class History5 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>


                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={{ flexDirection: 'column' }}>

                        <View style={styles.blackView}>
                            <FadeInView>
                                <Text style={styles.BoldblackText}>With partnerships in over</Text>
                            </FadeInView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <FadeInView>
                                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: DEVICE_WIDTH*0.072, }}>50 </Text>
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

                <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * 0.08 }} />{/* centered mobile logo*/}


                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History4", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                             </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History6", {})}>
                            <Text style={styles.ButtonText}>
                                NEXT
                             </Text>
                        </TouchableOpacity>
                    </View>

                </View>

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
        fontSize: DEVICE_WIDTH*0.06,
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
        marginTop: DEVICE_HEIGHT * 0.295
    },

    button: { // button design
        /*   width: 70,
          height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    BackButtonView: { //wrapper for button 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    /*     ButtonimageStyle: {//button icon
            margin: -15
        }, */
});