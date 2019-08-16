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
    Button,
    Linking,//for linking a button to a link
} from 'react-native';


import backgroundImg from '../assets/group.png';
import mobile from '../assets/mobile.png'
//import backgroundImg from '../assets/background.png';
export default class walkTrough1 extends Component {

    static navigationOptions = {//header styling
        title: 'walkTrough 1',
        fontWeight: 'bold'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={backgroundImg} style={styles.wallpaper}>{/*background*/}
                <Image source={mobile} />{/* top corner logo*/}
            </ImageBackground >



        );
    }
}
const styles = StyleSheet.create({
    wallpaper: { //background style
        flex: 1,
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center'

    },

    
});