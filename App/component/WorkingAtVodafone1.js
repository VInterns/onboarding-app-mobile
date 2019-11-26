import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Text,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import centerImg from '../assets/workingHours.png'
import WPImg from '../assets/workingPlace.png'

//import backgroundImg from '../assets/background.png';
export default class WorkingAtVodafone extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={{ justifyContent: 'center', alignItems: 'stretch', flex: 1, marginTop: 90 }}>
                <ScrollView>

                    <View style={styles.imageContainer}>
                        <Image source={centerImg} />
                    </View>

                    <View style={styles.TextContainer}>
                        <Text style={styles.redText}>Flexible</Text>
                        <Text style={styles.headerblackText}>Working Hours</Text>
                        <Text style={{ fontSize: DEVICE_WIDTH * (5 / DEVICE_WIDTH) }}>
                            {'\n'}
                        </Text>
                        <Text>
                            Based on your department you can start as early </Text>
                        <Text>
                            as 8:00 AM and finish at 4:30 PM or as late as </Text>
                        <Text>
                            10 AM and finish at 6:30 PM.This includes half an hour daily break.
                    </Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image source={WPImg} />
                    </View>
                    <View style={styles.LowerTextContainer}>
                        <Text style={styles.redText}>Flexible</Text>
                        <Text style={styles.headerblackText}>Working Place</Text>
                        <Text style={{ fontSize: DEVICE_WIDTH * (5 / DEVICE_WIDTH) }}>
                            {'\n'}
                        </Text>
                        <Text>
                            Based on your department you can work from ANYWHERE once per
                    </Text>
                        <Text>
                            week or you can even work from nearest
                    </Text>
                        <Text>
                            Vodafone premises.
                            {'\n'}

                        </Text>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("WorkingAtVodafone")} >
                            <Text style={styles.ButtonText}>
                                Back
                       </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("events")} >
                            <Text style={styles.ButtonText}>
                                NEXT
                       </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.8,
        marginTop: (10 / DEVICE_HEIGHT) * DEVICE_HEIGHT,
        //backgroundColor: 'yellow'
    },

    blackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * (22 / DEVICE_WIDTH),
        //fontWeight: 'bold'
    },

    headerblackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * (25 / DEVICE_WIDTH),
        fontWeight: 'bold'
    },

    redText: {//login word text style
        color: 'red',
        //fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * (25 / DEVICE_WIDTH),
    },


    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //backgroundColor: 'green',
        marginLeft: DEVICE_WIDTH * (30 / DEVICE_WIDTH),
        marginTop: DEVICE_HEIGHT * (10 / DEVICE_HEIGHT),
    },
    LowerTextContainer: {/* Welcome back and vodabuddy wrapper */
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //backgroundColor: 'green',
        marginLeft: DEVICE_WIDTH * (30 / DEVICE_WIDTH),
        marginTop: DEVICE_HEIGHT * (3 / DEVICE_HEIGHT),

    },

    button: { // button design
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
        marginLeft: DEVICE_WIDTH * 0.095,
        flexWrap: 'wrap',
        flexDirection: 'row',
        //backgroundColor: 'red'
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});