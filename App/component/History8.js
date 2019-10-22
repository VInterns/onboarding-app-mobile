import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Alert

} from 'react-native';

import FadeInView from './FadeInView'
import styles from './styles/history8.styles';

import india from '../assets/rank_1.png'
import egypt from '../assets/rankCopy.png'
import zambia from '../assets/rankCopy2.png'
import germany from '../assets/rankCopy3.png'
import turkey from '../assets/rankCopy4.png'
import italy from '../assets/rankCopy5.png'
import uk from '../assets/rankCopy6.png'
import spain from '../assets/rankCopy7.png'
import romania from '../assets/rankCopy8.png'
import { DeviceSensor } from 'expo-sensors';

export default class History8 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    constructor() {
        super();
        this.state = {
            answer: false,
            /*    ButtonIsPressed: false,
               ButtonBackgroundColor: 'white' */
        }
    }
    validatePressedPhoto = () => {
        if (this.state.answer == true) {

            this.props.navigation.navigate("GreatJob2", {})
            // Alert.alert("correct answer")
        }
        else {
            //   Alert.alert("wrong answer")
            this.props.navigation.navigate("ErrorAlert4", {});
        }
    }
    /*     checkButtonPressed = () => {
            if (this.state.ButtonIsPressed == true) {
                this.setState({ ButtonBackgroundColor: 'grey' })
            } else {
                this.setState({ ButtonBackgroundColor: 'white' })
            }
    
        } */
    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                {/* text view*/}
                <View style={styles.TextContainer}>
                    <FadeInView>
                        <Text style={styles.Text}>
                            Can you <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>guess</Text> which of the following {'\n'}
                            Vodafone operators have the most {'\n'}
                            subscribers? </Text>
                    </FadeInView>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: DEVICE_HEIGHT * 0.075 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ backgroundColor: this.state.ButtonBackgroundColor }} onPress={() => {
                            this.setState({ answer: true,/*  ButtonIsPressed: !this.state.ButtonIsPressed  */ });
                            setTimeout(() => {// delay 3lshan yedy wa2t lel state to be changed 
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                            //this.validatePressedPhoto();

                        }} >
                            <Image source={india} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }} >
                            <Image source={egypt} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }} >
                            <Image source={zambia} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }} >
                            <Image source={germany} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>


                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }}>
                            <Image source={turkey} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>


                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }}>
                            <Image source={italy} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }} >
                            <Image source={uk} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }}>
                            <Image source={spain} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{}} onPress={() => {
                            this.setState({ answer: false });
                            setTimeout(() => {
                                //his.checkButtonPressed();
                                this.validatePressedPhoto();
                            }, 1);
                        }}>
                            <Image source={romania} style={{ margin: DEVICE_WIDTH * 0.07 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                {/*  button view */}
                {/*                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03, }}>
 */}
                <View style={styles.BackButtonView}>

                    <TouchableOpacity style={styles.button} onPress={() => navigate("History6", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                            </Text>
                    </TouchableOpacity>
                </View>


            </View >


        );
    }
}
