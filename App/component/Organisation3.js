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

import img1 from '../assets/vssStructure.png';


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
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        VSS Organizational Structure              
                    </Text>
                    <Text style={styles.text}>
                        is as follows :                    
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                <Image source={img1} style={styles.img}/> 
                </View>
                <View style={styles.NextButtonView}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} > */}
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation2")} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation4")} >
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
        padding: DEVICE_WIDTH * 0.05,
        flexWrap:'wrap',
        flexDirection:'row',
        marginTop: DEVICE_HEIGHT * 0.06,
    },
    text: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontFamily: "VodafoneBold",
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d",
    },
    imageContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // alignItems: 'center',
        alignContent: 'center',
        flex: 8,
        flexWrap: 'wrap',
        // backgroundColor: '#EEE8AA',

    },
    img:{
        // width: '100%',
        // height: '80%',
        // marginRight: '5%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        // flexWrap: 'wrap',
        backgroundColor: '#EEE8AA',
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