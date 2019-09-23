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
import BrandImage from '../assets/BrandLogo/group.png';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class Brand extends Component {
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
                            <Text style={styles.blackText}>Our</Text>
                        </FadeInView>
                    </View>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.redText}>BRAND</Text>
                        </FadeInView>
                    </View>

                </View>

                <Image source={BrandImage} style={styles.BrandImg} />

                <View style={styles.NextButtonView}>

                    <TouchableOpacity style={styles.button} onPress={() => navigate("Brand1", {})} >
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
        fontSize: 35,
        fontWeight: 'bold'
    },
    redText: {//login word text style
        color: 'red',
        fontWeight: 'bold',
        fontSize: 45,
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
    BrandImg: {
        marginTop: DEVICE_HEIGHT * 0.17
    }
});