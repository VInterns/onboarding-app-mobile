import React, { Component } from 'react';
import { Toast } from "native-base";
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements'

export default class Survey extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Card title="Thank You!" containerStyle={styles.card} titleStyle={styles.titleStyle}>
                    <Text style={styles.text}>
                        Hope You Enjoyed the Journey, Welcome on board.
                    </Text>
                </Card>
                <View style={styles.NextButtonView}>

<TouchableOpacity style={styles.button} onPress={() => navigate("Menu", {})} >
    <Text style={styles.ButtonText}>
        NEXT
        </Text>
</TouchableOpacity>
</View>

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
        marginTop: DEVICE_HEIGHT * 0.3,

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
    NextButtonView: { //wrapper for button 
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
        marginBottom: DEVICE_HEIGHT * 0.05,
        marginLeft: DEVICE_WIDTH * 0.68
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonText: { // text inside button
        color: 'red',
        fontWeight: 'bold',
        fontSize: (20 / DEVICE_WIDTH) * DEVICE_WIDTH,
    },
});