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
            <View style={styles.MainView}>

                <View style={styles.TextContainer}>
                    <Text style={styles.blackText}>Health</Text>

                    <Text style={styles.redText}>and Safety</Text>
                </View>
                <View style={styles.ImageContainer}>
                    <Image source={HSImage} />
                </View>
                <View style={styles.ButtonsView}>
                    <TouchableOpacity style={styles.NextButton} onPress={() => navigate("HealthAndSafety1", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    MainView: {
        flex: 1
    },
    TextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 2,
        marginLeft: 20,
        marginTop: DEVICE_HEIGHT * 0.07
    },
    blackText: {
        color: 'black',
        fontSize: 45,
    },
    redText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 44,
    },
    ImageContainer:
    {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    HSImg: {
    },
    ButtonsView: {
        height: 45,
        flexDirection: 'row',
        marginBottom: DEVICE_HEIGHT * 0.03,
        backgroundColor: "#0000",
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 22,
        shadowOpacity: 1,
        elevation: 3,
    },
    NextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: DEVICE_WIDTH * 0.74
    },
    ButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});