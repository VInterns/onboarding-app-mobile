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
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * 0.105, flex: 1}} />{/* centered mobile logo*/}

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.blackText}>
                            <Text style={styles.BoldblackText}>Vodafone started back in UK in 1985, {'\n'}</Text>
                            where after several acquisitions of other {'\n'}
                            operators such as Omnitel, Airtel and {'\n'}
                            Panafon which are now Vodafone Italy, {'\n'}
                            Vodafone Spain & Vodafone Greece {'\n'}
                            respectively.
                        </Text>
                    </View>

                </View>

                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History1", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History5", {})}>
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
        fontSize: DEVICE_WIDTH * 0.041,
        fontWeight: 'bold'
    },
    blackText: {//welcome to word style
        // alignItems: 'center',
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.041,

    },


    blackView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.053
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