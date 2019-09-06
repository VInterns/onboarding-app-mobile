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
    Animated,
    BackHandler

} from 'react-native';

import FadeInView from './FadeInView'
import backgroundImg from '../assets/group.png';
import mobile from '../assets/mobile.png'
//import backgroundImg from '../assets/background.png';
export default class WalkThrough1 extends Component {

    constructor() {
        super();

        this.state = {
            lastScreen: ""
        };
      }

    props: {
        tryNavigate: (nextScreen: string) => void,
      };

    static navigationOptions = {//header styling
      header:null
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
        return true;
    } 


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <ImageBackground source={backgroundImg} style={styles.wallpaper}>
                    <Image source={mobile} style={{ marginTop: 38 }} />{/* centered mobile logo*/}
                </ImageBackground>

                {/*welcome  and on board text view*/}
                <View style={styles.WelcomOnBoardTextContainer}>

                    <View style={styles.welcomTextView}>
                        <FadeInView>
                            <Text style={styles.WelcomeText}>Welcome </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.onBoardView}>
                        <FadeInView>
                            <Text style={styles.onBoardText}>on board</Text>
                        </FadeInView>
                    </View>
                </View>

                {/*  button view */}
                <TouchableOpacity style={styles.button} onPress={() => 
                        this.props.tryNavigate("walkthrought2")}
                >
                        <Image source={require('../assets/arrow.png')} style={styles.ButtonimageStyle} />
                </TouchableOpacity>

            </View >


        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    wallpaper: { //background style
        //flex: 1,
        resizeMode: 'cover',
        height: 340,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',

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
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderColor: 'red',
        transform: [     //to create rhombus shape by rotating the square shape
            { rotate: '45deg' }
        ],
        borderRadius: 10,

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
});