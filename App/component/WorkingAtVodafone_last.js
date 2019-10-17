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

import FadeInView from './FadeInView';

import img1 from '../assets/workingAtVodafoneCongrats.png';




export default class Organisation1 extends Component {
    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.navigate("Video7")
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

    static navigationOptions = {
        //header styling
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        Congratulations!
                    </Text>
                    <Text style={styles.text2}>You’ve been awarded with the letter</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={img1} style={styles.img} />
                </View>
                {/*  <View style={styles.NextButtonView}> */}
                {/* <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} > */}
                {/*   <TouchableOpacity style={styles.button} onPress={() => navigate("Brand")} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </View> */}
            </View >

        );
    }

}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        padding: DEVICE_WIDTH * 0.05,
        marginTop: DEVICE_HEIGHT * 0.1,
    },
    text1: {
        // width: 334,
        // height: 44,
        // fontFamily: "VodafoneRg",
        fontSize: 37,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 44,
        letterSpacing: 0,
        textAlign: "center",
        color: "#e60000"
    },
    text2: {
        // width: 334,
        // height: 24,
        // fontFamily: "VodafoneRg",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#4b464d"
    },
    imageContainer: {
        flexDirection: 'column',
        // flexWrap: 'wrap',
        alignItems: 'center',
        flex: 6,
        marginTop: DEVICE_HEIGHT * 0.04,
    },
    img: {
        // width: '90%',
        // margin: '1%',
    },
    button: { // button design
        /*    width: 70,
           height: 25, */
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    NextButtonView: { //wrapper for button 
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});