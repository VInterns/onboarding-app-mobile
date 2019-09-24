import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Alert

} from 'react-native';

import FadeInView from './FadeInView'


import NickImg from '../assets/group_3.png'
import { Left } from 'native-base';

export default class History10 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        const DEVICE_HEIGHT = Dimensions.get('window').height;
        const DEVICE_WIDTH = Dimensions.get('window').width;

        let marginFraction = 42 / DEVICE_WIDTH

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                {/* text view*/}
                <View style={styles.TextContainer}>
                    <FadeInView>
                        <Text style={styles.Text}>
                            Get to know more about our Group{'\n'}
                            CEO:{'\n'}
                        </Text>
                    </FadeInView>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap',/* marginLeft:30 */ /* marginLeft: (40 / DEVICE_WIDTH) * DEVICE_WIDTH */ }}>
                    <Image source={NickImg} style={{ /* marginRight: 0.025 * DEVICE_WIDTH */marginLeft: (20 / DEVICE_WIDTH) * DEVICE_WIDTH }} />
                    <Text style={styles.NickText}>
                        <Text style={styles.Text}>Nick Read{'\n'}</Text>
                        <Text style={styles.RedText}>CEO Vodafone Group{'\n'}</Text>
                        10/2018-PRESENT
                    </Text>

                </View>

                <View style={styles.paragraphContainer}>

                    <Text style={styles.NickText}>
                        He worked for United Business Media Plc{'\n'}
                        and Federal Express Worldwide, rising to{'\n'}
                        chief financial officer for the EMEA{'\n'}
                        (Europe, Middle East and Africa) region.{'\n'}
                        He joined Vodafone UK in 2001,{'\n'}
                        becoming chief executive on 1 May{'\n'}
                        2006, when Arun Sarin was the chief{'\n'}
                        executive of Vodafone.{'\n'}
                        He has served as the chief financial{'\n'}
                        officer of Vodafone since 2014 and{'\n'}
                        became the chief executive officer of{'\n'}
                        Vodafone Group in October 2018.{'\n'}
                        In May 2018, Vittorio Colao announced{'\n'}
                        that he would step down as Vodafone{'\n'}
                        CEO, effective October 2018, and that he{'\n'}
                        would be succeeded by Read.
                    </Text>

                </View>

                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 0.2, marginBottom: DEVICE_HEIGHT * 0.03, }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History9", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History11", {})}>
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

    Text: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.047,
        fontWeight: 'bold'
    },
    NickText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.047,
    },
    RedText: {//welcome to word style
        color: 'red',
        fontSize: DEVICE_WIDTH * 0.047,
        fontWeight: 'bold'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.1,
    },
    paragraphContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 3,
        marginTop:DEVICE_HEIGHT * (5 / DEVICE_WIDTH),
        //marginLeft: DEVICE_WIDTH * (20 / DEVICE_WIDTH),
        marginHorizontal:DEVICE_WIDTH * (10 / DEVICE_WIDTH),
        //backgroundColor: 'green',
        paddingLeft:DEVICE_WIDTH * (18 / DEVICE_WIDTH)
        //marginLeft: DEVICE_WIDTH * (20 / DEVICE_WIDTH),
        //padding: 2,
        /* marginTop: DEVICE_HEIGHT * (20 / DEVICE_WIDTH),
 */
        //backgroundColor: 'green',
        /*    marginLeft:20,
           paddingLeft:20 */

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