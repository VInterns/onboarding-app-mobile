import React, { Component } from 'react';
import { Toast } from "native-base";
import {
    StyleSheet,
    View,
    Dimensions,
    Text
} from 'react-native';
import { Card } from 'react-native-elements'

export default class Survey extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Card title="Thank You!" containerStyle={styles.card} titleStyle={styles.titleStyle}>
                    <Text style={styles.text}>
                        Hope You Enjoyed the Journey, Welcome on board.
                    </Text>
                </Card>
            </View >

        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    textAreaContainer: {
        marginTop: DEVICE_HEIGHT * (10 / DEVICE_HEIGHT),
        borderColor: 'grey',
        borderWidth: 0.5,
        padding: 5
    },

    textArea: {
        width: DEVICE_WIDTH * (270 / DEVICE_WIDTH),
        height: DEVICE_HEIGHT * (150 / DEVICE_HEIGHT),
        justifyContent: "flex-start"
    },
    textContainer: {
        marginTop: DEVICE_HEIGHT * (12 / DEVICE_HEIGHT)
    },
    StarContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //backgroundColor: 'yellow'
    },
    container: {
        paddingTop: (10 / DEVICE_WIDTH) * DEVICE_WIDTH
    },
    card: {
        width: '90%',
        //backgroundColor:'yellow'
    },
    titleStyle: {
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * (24 / DEVICE_WIDTH),
        color: 'red'
    },
    text: {
        fontSize: (20 / DEVICE_WIDTH) * DEVICE_WIDTH,
        fontFamily: "VodafoneRg",
        // fontWeight: "300"
    },


    button: { // button design
        width: DEVICE_WIDTH * (130 / DEVICE_WIDTH),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },

    ButtonView: { //wrapper for button 

        marginTop: DEVICE_HEIGHT * (12 / DEVICE_HEIGHT),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: { // text inside button
        color: 'red',
        fontWeight: 'bold',
        fontSize: (20 / DEVICE_WIDTH) * DEVICE_WIDTH,
    },
});