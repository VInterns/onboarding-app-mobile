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

import FadeInView from './FadeInView'

import centerImg from '../assets/map.png'
//import backgroundImg from '../assets/background.png';
export default class History4 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ /* width: '100%', height: '100%' *//* , justifyContent: 'center' */ alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * (80 / DEVICE_HEIGHT),/*  backgroundColor: 'grey' */ }} />{/* centered mobile logo*/}
                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    {/*  <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}> */}

                    <Text style={styles.BoldblackText}>Vodafone started back in UK in 1985,</Text>
                    <Text style={styles.blackText}>
                        where after several acquisitions of other {'\n'}
                        operators such as Omnitel, Airtel and {'\n'}
                        Panafon which are now Vodafone Italy, {'\n'}
                        Vodafone Spain & Vodafone Greece {'\n'}
                        respectively.{'\n'}
                    </Text>

                    {/*       </View> */}

                </View>

                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: DEVICE_HEIGHT * 0.03, }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History1", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History5", {})}>
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

    BoldblackText: {
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.05,
        fontWeight: 'bold'
    },
    blackText: {
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.05,
    },
    TextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.053,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BackButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    ButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});