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

import centerImg from '../assets/DressCodeMale.png'
//import backgroundImg from '../assets/background.png';
export default class WorkingAtVodafone3 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={styles.ScreenContainer}>
                <View style={styles.TextContainer}>
                    <Text style={styles.blackText}>You are</Text>
                    <Text style={styles.redText}>Free to wear</Text>
                </View>
                <View style={styles.imageAndTextContainer}>
                    <View style={styles.TextPointsContainer}>
                        <Text style={styles.text}>
                            - Jackets{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Shirts{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Pants{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Non-ripped Jeans{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Classic footwear{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Sneakers{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - T-shirts{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Sweatshirts{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - V-cut shirts{'\n'}
                            <Text style={{fontSize: (10 / DEVICE_WIDTH) * DEVICE_WIDTH,}}>{'\n'}</Text>
                            - Hoodies{'\n'}
                        </Text>

                    </View>

                    <View style={styles.imageContainer}>
                        <Image source={centerImg} style={styles.imageStyle} />
                    </View>
                </View>

                <View style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("WorkingAtVodafone2")} >
                        <Text style={styles.ButtonText}>
                            Back
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("WorkingAtVodafone4")} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </View>

            </View >

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ScreenContainer: {
        //flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        flex: 1,
        // backgroundColor: 'grey'
    },
    imageAndTextContainer: {
        flexDirection: 'row',
        flex: 8
    },
    TextPointsContainer: {
        //backgroundColor:'green',
        marginLeft: DEVICE_WIDTH * (25 / DEVICE_WIDTH),
        paddingTop: DEVICE_HEIGHT * (20 / DEVICE_HEIGHT),
        //alignItems: 'flex-start',
        //justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: (17 / DEVICE_WIDTH) * DEVICE_WIDTH,
        color: 'black',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 8,
        //flexWrap: 'wrap',
        //paddingTop:10,
        // marginTop: (10 / DEVICE_HEIGHT) * DEVICE_HEIGHT,
        // backgroundColor: 'yellow'
    },
    imageStyle: {
        flex: 1,
        resizeMode: 'stretch',
        width: DEVICE_HEIGHT * 0.09,
    },

    blackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * (35 / DEVICE_WIDTH),
        fontWeight: 'bold'
    },

    redText: {//login word text style
        color: 'red',
        //fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * (35 / DEVICE_WIDTH),
    },


    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flex: 1.3,
        //width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: 'blue',
        marginLeft: DEVICE_WIDTH * (25 / DEVICE_WIDTH),
        //paddingTop: DEVICE_HEIGHT * (60 / DEVICE_HEIGHT),
        marginTop: DEVICE_HEIGHT * (60 / DEVICE_HEIGHT),
        //marginRight: (DEVICE_WIDTH / 2) - (DEVICE_WIDTH * 0.09),
    },

    button: { // button design
        /*    width: 70,
           height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        /*   // width: '100%',
           flexDirection: 'row',
           justifyContent: 'space-around',
           alignItems: 'center',
           flex: 1,
           paddingBottom: DEVICE_HEIGHT * (10 / DEVICE_HEIGHT),
           //marginBottom: DEVICE_HEIGHT * (15 / DEVICE_HEIGHT),
           /*
           marginRight: (70 / DEVICE_WIDTH) * DEVICE_WIDTH,
           marginBottom: DEVICE_HEIGHT * (15 / DEVICE_HEIGHT), */
        //marginLeft: DEVICE_WIDTH * 0.68,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
        marginLeft: DEVICE_WIDTH * 0.095,
        flexWrap: 'wrap',
        flexDirection: 'row',
        //backgroundColor: 'green',
        flex: 0.5

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});