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
import HS1Image from '../assets/HS1.png';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class HealthAndSafety1 extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.MainView}>
                <View style={styles.ImageContainer}>
                    <Image source={HS1Image} style={styles.ImageStyle} />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>
                        <Text style={styles.BoldText}>
                            We at Vodafone,
                    </Text>
                        we not only care about you inside the premises, but also when commuting externally.
                </Text>
                </View>
                <View style={styles.ButtonsView}>
                    <TouchableOpacity style={styles.BackButton} onPress={() => navigate("HealthAndSafety", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.NextButton} onPress={() => navigate("HealthAndSafety2", {})} >
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
    MainView:
    {
        flex: 1
    },
    ImageContainer:
    {
        alignItems: "center",
        justifyContent: "center",
        flex: 5,
        marginTop: DEVICE_HEIGHT * 0.1
    },
    TextContainer:
    {
        flex: 6,
        alignItems: "center",
        marginLeft: 20
    },
    Text:
    {
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d",
    },
    BoldText:
    {
        fontWeight: "bold",

    },
    ButtonsView: {
        // width: DEVICE_WIDTH,
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
    BackButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: DEVICE_WIDTH * 0.11
    },
    NextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: DEVICE_WIDTH * 0.5
    },
    ButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
})