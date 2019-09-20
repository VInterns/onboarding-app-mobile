import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    Text
} from 'react-native';

import A from '../assets/A.png';

export default class Brand7 extends Component {
    static navigationOptions = {//header styling
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ width: '100%', height: '100%', flex: 1, alignItems: "center" }}>

                <Text style={styles.redText}>
                    Congratulations!
                </Text>
                <Text style={styles.blackText}>
                    You’ve been awarded with the letter
                </Text>
                <Image source={A} style={styles.Letter}>
                </Image>

            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Letter:
    {
        // marginLeft: DEVICE_WIDTH / 2 - 107,
        marginTop: DEVICE_HEIGHT / 3
    },
    blackText: {
        color: 'black',
        fontSize: 15,
    },
    redText: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: DEVICE_HEIGHT / 5
    },
});