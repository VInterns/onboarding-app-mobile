import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

import FadeInView from './FadeInView';
import HSImage from '../assets/HS.png';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class HealthAndSafety extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={styles.TextContainer}>
                    <View style={styles.blackTextView}>
                        <FadeInView>
                            <Text style={styles.blackText}>Health</Text>
                        </FadeInView>
                    </View>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.redText}>and Safety</Text>
                        </FadeInView>
                    </View>

                </View>

                <Image source={HSImage} style={styles.HSImg} />

                <View style={styles.NextButtonView}>

                    <TouchableOpacity style={styles.button} onPress={() => navigate("HealthAndSafety1", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                            </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    blackText: {//welcome to word style
        color: 'black',
        fontSize: 45,
    },
    redText: {//login word text style
        color: 'red',
        fontWeight: 'bold',
        fontSize: 44,
    },
    blackTextView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.1,
        marginRight: (DEVICE_WIDTH / 2) - (DEVICE_WIDTH * 0.09),
    },
    redView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    NextButtonView: { //wrapper for button 
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginLeft: DEVICE_WIDTH * 0.68
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    HSImg: {
        marginTop: DEVICE_HEIGHT * 0.17
    }
});