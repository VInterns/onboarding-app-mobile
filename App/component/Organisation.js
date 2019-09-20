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

import centerImg from '../assets/undrawConnectingTeams8Ntu.png';

export default class Organisation extends Component {

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
                    <Text style={styles.textOur}>
                        Our
                    </Text>
                    <Text style={styles.textOrganization}>
                        Organizations
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * 0.08 }} />{/* centered mobile logo*/}
                </View>
                <View style={styles.NextButtonView}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} > */}               
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation1")} >
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

    container:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
    textContainer:{
        flex:2.5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: DEVICE_WIDTH * 0.04,
        paddingTop: DEVICE_HEIGHT * 0.1
    },
    imageContainer:{
        flex: 4,
        alignItems: 'center',
        height:200

    },
    textOur:{
        // fontFamily: "VodafoneRg",
        fontSize: 50,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 65,
        letterSpacing: 0,
        color: "black",
    },
    textOrganization:{
        fontSize: 50,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 65,
        letterSpacing: 0,
        color: "#e60000",
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