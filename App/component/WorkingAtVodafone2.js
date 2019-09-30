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

import centerImg from '../assets/DressCode.png'
//import backgroundImg from '../assets/background.png';
export default class WorkingAtVodafone2 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{  justifyContent: 'center', alignItems: 'stretch', flex: 1 }}>
                <View style={styles.TextContainer}>
                    <Text style={styles.blackText}>Dress</Text>
                    <Text style={styles.redText}>Code</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={centerImg} /* style={styles.imageStyle}  */ />
                </View>


                <View style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("WorkingAtVodafone")} >
                        <Text style={styles.ButtonText}>
                            Back
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("WorkingAtVodafone3")} >
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: (10 / DEVICE_HEIGHT) * DEVICE_HEIGHT,
        //backgroundColor: 'yellow'
    },

    blackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.1,
        // fontWeight: 'bold'
    },

    redText: {//login word text style
        color: 'red',
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * 0.1,
    },


    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flex: 0.2,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
        marginLeft: DEVICE_WIDTH * (40 / DEVICE_WIDTH),
        marginTop: DEVICE_HEIGHT * 0.1,
        //marginRight: (DEVICE_WIDTH / 2) - (DEVICE_WIDTH * 0.09),
    },

    button: { // button design
        /*    width: 70,
           height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
     /*    width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.1,
        marginBottom: DEVICE_HEIGHT * (15 / DEVICE_HEIGHT),  */
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
        marginLeft: DEVICE_WIDTH * 0.095,
        flexWrap: 'wrap',
        flexDirection: 'row',
        /*
        marginRight: (70 / DEVICE_WIDTH) * DEVICE_WIDTH,
        marginBottom: DEVICE_HEIGHT * (15 / DEVICE_HEIGHT), */
        //marginLeft: DEVICE_WIDTH * 0.68,
        //backgroundColor: 'green'

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});