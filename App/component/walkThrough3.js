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
import rocket from '../assets/rocket.png'
import readyButton from '../assets/group3.png'

export default class walkTrough3 extends Component {

      props: {
        tryNavigate: (nextScreen: string) => void
      };




    static navigationOptions = {//header styling
        header: null
    };
    constructor() {
        debugger;
        super();
        this.state = {
            show: true,
        };
        this.moveAnimation = new Animated.ValueXY({ x: 0, y: 0 })//create new animated object
    }
    _moveRocket = () => { //responsible for moving rocket
        debugger;
        Animated.timing(this.moveAnimation, {
            toValue: { x: 350, y: -100 },//new coordinates
            delay: 1000, //start moving rocket after certain delay 
            duration: 2000
        }).start()//start animation

    }

    componentDidMount() {
        debugger;
        // console.log("this state", this.state);
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    }

    ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.show == true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
      }
    handleBackButton() {
        return true;
      }

    tryNavigate = () => {
        debugger;
        this.props.tryNavigate("History");
      };  


    render() {

        const { navigate } = this.props.navigation;

        const show =

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={backgroundImg} style={styles.wallpaper}>{/*background*/}
                </ImageBackground >

                <FadeInView>
                    <Image source={rocket} style={{ marginLeft: 10 }} />{/* centered logo*/}
                </FadeInView>

                {/*header text view*/}
                <View style={styles.TextContainer}>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.RedText}>The Future is  </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.blackView}>
                        <FadeInView>
                            <Text style={styles.blackText}>exciting,</Text>
                        </FadeInView>
                    </View>
                </View>

                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.ShowHideComponent(); //hide component except the rocket
                        this._moveRocket(); //then move rocket
                        // setTimeout(function () {//finally navigate after certain delay
                        //     // navigate("Video1", {})
                        //     debugger;
                        //     this.tryNavigate;
                        // }, 3000)
                        setTimeout(this.tryNavigate, 3000);
                    }} >
                        <Image source={readyButton} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>

        const hide =
            <Animated.View style={this.moveAnimation.getLayout()}>
                <Image source={rocket} style={{ marginLeft: 10 }} />{/* centered logo*/}
            </Animated.View>

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {this.state.show ? show : hide}
            </View>

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    wallpaper: { //background style
        resizeMode: 'cover',
        height: 340,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        //left: 220
        right: DEVICE_WIDTH - (DEVICE_WIDTH + (DEVICE_WIDTH / 2))
},
    RedText: {//red text style
        // alignItems: 'center',
        color: 'red',
        fontSize: 35,
        fontWeight: 'bold',
        // position: 'absolute',
        //  left: 40,
        //  top: 50
    },

    blackText: {//black text style
        //textAlign: 'center',
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 35,
        //    position: 'absolute',
        //  left: 40
    },

    redView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextContainer: {/* textwrapper */
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        left: 40

    },

    blackView: {
        alignItems: 'center',
        justifyContent: 'center',

    },

    button: { // button design
        /*    width: 50,
           height: 50,
           backgroundColor: 'red',
           borderColor: 'red',
           transform: [     //to create rhombus shape by rotating the square shape
               { rotate: '45deg' }
           ],
           borderRadius: 10, */
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'red',
        /*         transform: [     //to create rhombus shape by rotating the square shape
                    { rotate: '45deg' }
                ],
         */
    },
    ButtonimageStyle: {//button icon
        //margin: 2,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        /*        transform: [ //to adjust the image inside the button 
                   { rotate: '315deg' }
               ], */
    },
    buttonView: { //wrapper for button 

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right: 150

    },
});