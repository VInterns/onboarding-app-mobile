
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
    Alert

} from 'react-native';

import FadeInView from './FadeInView'

import confused from '../assets/confused.png'

class ErrorAlert4 extends Component {

    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.navigate("History8")
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
    static navigationOptions = {
        header: null
    };
    render() {
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        const { navigate } = this.props.navigation;
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={{ marginTop: DEVICE_HEIGHT * 0.1 }}>
                    <Image source={confused} />{/* centered mobile logo*/}
                </View>

                <View style={{ marginTop: DEVICE_HEIGHT * (20 / DEVICE_HEIGHT) }}>
                    <Text style={{ color: 'red', fontSize: DEVICE_WIDTH * (26 / DEVICE_WIDTH), fontWeight: 'bold' }}>
                        Oops !
                    </Text>
                </View>


                <View style={{ marginTop: DEVICE_HEIGHT * (20 / DEVICE_HEIGHT) }}>
                    <Text style={{ color: 'black', fontSize: 21 }}>
                        you guessed wrong
                    </Text>
                </View>

                {/*      <KeyboardAvoidingView behavior="padding" style={styles.ButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History1", {})} >
                        <Text style={styles.ButtonText}>
                            Try again
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView> */}


            </View>
        );
    }
}

const styles = StyleSheet.create({

    button: { // button design
        width: 128,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 10
    },

    ButtonView: { //wrapper for button 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 462,


    },
    ButtonText: { // text inside button
        color: 'white',
        fontSize: 20,
    },
});
export default ErrorAlert4;