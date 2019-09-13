import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    Text
} from 'react-native';

import FadeInView from './FadeInView';
import halfTriLeft from '../assets/group1.png';
import halfTriRight from '../assets/group9.png';
export default class Brand1 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image source={halfTriLeft} style={styles.wallpaper}>{/*background*/}
                </Image>
                <Image source={halfTriRight} style={styles.wallpaperRight}>{/*background*/}
                </Image>


                <View style={styles.TextContainer}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 125 }}>
                        <Text style={styles.blackText}>
                            <Text style={styles.redText}>Vodafone </Text>
                            introduced a new logo  {'\n'}
                            designed by Brand Union as part of a {'\n'}
                            global brand repositioning. As part of a {'\n'}
                            major global rebranding and brand re- {'\n'}
                            positioning, Vodafone Group has {'\n'}
                            launched a new campaign called "Hello" {'\n'}
                            which forms part of the brand's biggest {'\n'}
                            advertising campaign in its 33-year {'\n'}
                            history.
                        </Text>
                    </View>
                </View>

                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Brand2", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Brand", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    wallpaper: { //background style
        resizeMode: 'center',
        height: 325,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 250,
        left: 1,
        top: 50
        //bottom: 25
    },
    wallpaperRight: { //background style
        resizeMode: 'center',
        height: 325,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 1,
        left: 260,
        top: 50
        //bottom: 25
    },
    WelcomeText: {//welcome to word style
        // alignItems: 'center',
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },

    onBoardText: {//login word text style
        //textAlign: 'center',
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 30,
        /*    position: 'absolute',
           left: 40 */
    },

    welcomTextView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    WelcomOnBoardTextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 40
    },

    onBoardView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: { // button design
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonimageStyle: {//button icon
        margin: 13,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        transform: [ //to adjust the arrow inside the button 
            { rotate: '315deg' }
        ],
    },
    buttonView: { //wrapper for button 

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30

    },
    BoldblackText: {//welcome to word style
        // alignItems: 'center',
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },
    blackText: {//welcome to word style
        // alignItems: 'center',
        color: 'black',
        fontSize: 17,
        //fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },
    redText: {
        color: 'red',
        fontSize: 17
    },
    NextButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        right: 30,
        //   backgroundColor:'#DDDD',

    },
    BackButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        left: 30,
        //  backgroundColor:'#DDDD',

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
