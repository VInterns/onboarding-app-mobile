import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    Text
} from 'react-native';

import D from '../assets/D.png';

export default class HealthAndSafety11 extends Component {
    static navigationOptions = {//header styling
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={{ width: '100%', height: '100%', flex: 6, alignItems: "center", flexDirection: "column" }}>

                    <View style={styles.TextContainer}>
                        <Text style={styles.redText}>
                            Congratulations!
                </Text>
                        <Text style={styles.blackText}>
                            You’ve been awarded with the letter
                </Text>
                    </View>
                    <Image source={D} style={styles.Letter}>
                    </Image>

                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.ButtonsView}>
                        <TouchableOpacity style={styles.BackButton} onPress={() => navigate("HealthAndSafety10", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                 </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.NextButton} onPress={() => navigate("HealthAndSafety11", {})} >
                            <Text style={styles.ButtonText}>
                                NEXT
                 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    TextContainer:
    {
        // flex: 1
    },
    Letter:
    {
        // marginLeft: DEVICE_WIDTH / 2 - 107,
        marginTop: DEVICE_HEIGHT / 3.2,
        // flex: 2
    },
    blackText: {
        color: 'black',
        fontSize: 15,
    },
    redText: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: DEVICE_HEIGHT / 6
    },
    ButtonsView: {
        // width: DEVICE_WIDTH,
        height: 45,
        flexDirection: 'row',
        marginTop: DEVICE_HEIGHT * 0.93,
        // marginBottom: DEVICE_HEIGHT * 0.03,
        backgroundColor: "#0000",
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 22,
        shadowOpacity: 1,
        elevation: 3,
        // position: "absolute"
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
});