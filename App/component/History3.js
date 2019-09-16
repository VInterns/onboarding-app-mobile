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
    Alert

} from 'react-native';

import FadeInView from './FadeInView'

import DataImg from '../assets/data.png'


import VletterRed from '../assets/active.png';


import OletterRed from '../assets/active_1.png';

import Dletter from '../assets/inactive_2.png';
import DletterRed from '../assets/active_6.png';

import Aletter from '../assets/inactive_3.png';
import AletterRed from '../assets/active_7.png';


import FletterRed from '../assets/active_2.png';


import NletterRed from '../assets/active_4.png';


import EletterRed from '../assets/active_5.png';


export default class History3 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    constructor() {
        super();
        this.state = {

            D_show: false,
            A_show: false,


            DimageURL: Dletter,
            AimageURL: Aletter,


            showHideVoiceWord: false,
            counter: 0,
            ButtonStateHolder: false,
            // Default Value for ButtonStateHolder State. Now the button is Enabled.
        };
    }


    D_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.D_show == true) {
            this.setState({ D_show: false });
        }
        else {
            this.setState({ D_show: true });
        }
    };

    A_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.A_show == true) {
            this.setState({ A_show: false });
        }
        else {
            this.setState({ A_show: true });
        }
    };

    load_D_letter = () => {
        if (this.state.D_show == true) {
            this.setState({
                DimageURL: Dletter
            })
        } else {
            this.setState({

                DimageURL: DletterRed
            })
        }
    }
    load_A_letter = () => {
        if (this.state.A_show == true) {
            this.setState({
                AimageURL: Aletter
            })
        } else {
            this.setState({

                AimageURL: AletterRed
            })
        }
    }

    validatePressedLetters = () => {
        if (this.state.D_show == true
            && this.state.A_show == true) {
            // Alert.alert("right letters")
            if (this.state.counter == 0) {
                this.setState({
                    showHideVoiceWord: true,
                    counter: this.state.counter + 1
                })
            }
            else {
                this.props.navigation.navigate("GreatJob", {})
            }
        }
        else {
            this.setState({
                showHideVoiceWord: false
            })
            this.props.navigation.navigate("ErrorAlert3", {});
        }
    }

    DisableButtonFunction = () => {

        this.setState({

            // On State True it will Disable the button.
            ButtonStateHolder: true,

            ButtonTitle: 'Button Disabled'

        })

    }

    DisableButtonFunction = () => {//disable button after pressing next 

        this.setState({
            // On State True it will Disable the button.
            ButtonStateHolder: true,
        })

    }

    render() {
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        let marginFraction = 15 / DEVICE_WIDTH
        const { navigate } = this.props.navigation;
        const showVoiceWord =
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: DEVICE_HEIGHT * 0.027 }}>
                <Image source={DletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />{/* centered mobile logo*/}
                <Image source={AletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />{/* centered mobile logo*/}

                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginBottom: DEVICE_HEIGHT * 0.03 }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}> = Data</Text>
                </View>
            </View>


        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    <FadeInView>
                        <Text style={styles.Text}>can you guess which two letters will form {'\n'}
                            the following word "DATA"?!{'\n'}
                        </Text>
                    </FadeInView>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flex: 1, marginTop: DEVICE_HEIGHT * 0.095 }}>

                    <TouchableOpacity disabled={true}>
                        <Image source={VletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>

                    <TouchableOpacity disabled={true}>
                        <Image source={OletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>

                    <TouchableOpacity disabled={this.state.ButtonStateHolder} onPress={() => {
                        this.D_ShowHideComponent();
                        this.load_D_letter();
                    }} >
                        <Image source={this.state.DimageURL} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>

                    <TouchableOpacity disabled={this.state.ButtonStateHolder} onPress={() => {
                        this.A_ShowHideComponent();
                        this.load_A_letter();
                    }} >
                        <Image source={this.state.AimageURL} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>

                    <TouchableOpacity disabled={true}>
                        <Image source={FletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>


                    <TouchableOpacity disabled={true}>
                        <Image source={OletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>


                    <TouchableOpacity disabled={true}>
                        <Image source={NletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>

                    <TouchableOpacity disabled={true}>
                        <Image source={EletterRed} style={{ margin: -(DEVICE_WIDTH * marginFraction) }} />
                    </TouchableOpacity>

                </View>


                <Image source={DataImg} style={{ justifyContent: 'center', alignItems: 'center' }} />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.showHideVoiceWord ? showVoiceWord : null}
                </View>
                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History2", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.validatePressedLetters();
                            this.DisableButtonFunction();
                        }}>
                            <Text style={styles.ButtonText}>
                                NEXT
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View >

        );
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

    Text: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.047,
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.1
    },

    button: { // button design
        /*   width: 70,
          height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    BackButtonView: { //wrapper for button 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    /*     ButtonimageStyle: {//button icon
            margin: -15
        }, */
});