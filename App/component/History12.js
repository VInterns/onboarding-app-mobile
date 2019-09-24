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

import centerImg from '../assets/image1.png'
//import backgroundImg from '../assets/background.png';
export default class History12 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>


                <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * 0.105, }} />{/* centered mobile logo*/}
                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    <FadeInView>
                        <Text style={styles.blackText}>
                            Vodafone is the largest mobile network{'\n'}
                            operator in Egypt in terms of active{'\n'}
                            subscribers.It was launched in 1998{'\n'}
                            under its former name Click GSM. In{'\n'}
                            January 2007, Egypt’s National Telecom{'\n'}
                            Regulatory Agency (NTRA) awarded{'\n'}
                            Vodafone Egypt a 15-year 3G licence.{'\n'}
                            On October 16, 2016, Vodafone Egypt{'\n'}
                            was awarded the fourth-generation 4G{'\n'}
                            mobile services license for a royalty fee{'\n'}
                            of $335 million from the Egyptian{'\n'}
                            National Telecom Regulatory Authority{'\n'}
                            (NTRA).
                            </Text>
                    </FadeInView>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History11", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History13", {})}>
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

    blackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.05,
        // fontWeight: 'bold'
    },


    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.027,
        paddingLeft: 5

    },

    redView: {
        alignItems: 'center',
        justifyContent: 'center'
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