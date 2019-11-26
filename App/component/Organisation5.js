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

import img1 from '../assets/VFEgyptEmp.png';




export default class Organisation1 extends Component {

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

                <View style={styles.imageContainer}>
                    <Image source={img1} style={styles.img} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        Vodafone Egypt and Vodafone shared services Egypt ( VSSE) have 6000 &
                        7000 respectively
                    </Text>
                    <Text style={styles.textBold}>and now Vodafone has a +1! .</Text>
                    <Text style={styles.text2}>
                        We can’t wait to have you on board.  </Text>

                </View>
                <View style={styles.NextButtonView}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} > */}
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation4")} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("CongratulationsR")} >
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

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        padding: DEVICE_WIDTH * 0.07,
        // backgroundColor: '#2E86C1',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text2: {
        // fontFamily: "VodafoneRg",
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#e60000"
    },
    text1: {
        // fontFamily: "VodafoneRg",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d"
    },
    textBold: {
        fontFamily: "VodafoneBold",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d"
    },
    imageContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        // padding:'10%',
        // flexWrap: 'wrap',
        flex: 2,
        // backgroundColor: '#34495E' 
    },
    img: {
        justifyContent: 'center',
        // width: '80%',
        // height: '70%',
        // marginRight: '20%',
        marginLeft: '5%',
        // backgroundColor: 'black'

    },
    button: { // button design
        /*    width: 70,
           height: 25, */
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    NextButtonView: { //wrapper for button 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
        marginLeft: DEVICE_WIDTH * 0.095,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});