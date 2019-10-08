import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
} from 'react-native';

import img1 from '../assets/D.png';

export default class HealthAndSafety11 extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate("HealthAndSafety")
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        Congratulations!
                    </Text>
                    <Text style={styles.text2}>You’ve been awarded with the letter</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={img1} style={styles.img} />
                </View>
            </View >
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        padding: DEVICE_WIDTH * 0.05,
        marginTop: DEVICE_HEIGHT * 0.1,
    },
    text1: {
        fontSize: 37,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 44,
        letterSpacing: 0,
        textAlign: "center",
        color: "#e60000"
    },
    text2: {
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#4b464d"
    },
    imageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 6,
        marginTop: DEVICE_HEIGHT * 0.04,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    NextButtonView: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
    },
    ButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});