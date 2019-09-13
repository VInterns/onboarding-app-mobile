import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text
} from 'react-native';

import halfTriLeft from '../assets/group1.png';
import halfTriRight from '../assets/group9.png';
import logoGif from '../assets/loading.gif';

export default class walkTrough1 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ImageBackground source={halfTriLeft} style={styles.wallpaper}>{/*background*/}
                </ImageBackground>
                <ImageBackground source={halfTriRight} style={styles.wallpaperRight}>{/*background*/}
                </ImageBackground>


                <View style={styles.TextContainer}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 125, left: 4 }}>

                        <Text style={styles.blackText}>
                            <Text style={styles.redText}>“The story of hello” {'\n'}</Text>
                            {'\n'}
                            the video focuses on the constancy of human {'\n'}
                            interaction even while technologies evolve over time, {'\n'}
                            which makes us always think that The future is {'\n'}
                            exciting.
                        </Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Brand3", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Brand1", {})} >
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

    button: { // button design
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontSize: 15,
        //fontWeight: 'bold'
        //position: 'absolute',
        // left: 40,
        //  top: 50
    },
    redText: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold'
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
