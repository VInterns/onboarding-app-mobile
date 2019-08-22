
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

class ErrorAlert extends Component {
    static navigationOptions = {
        title: 'ERROR',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={{ position: 'absolute', top: 80 }}>
                    <Image source={confused} />{/* centered mobile logo*/}
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: 'red', fontSize: 26, fontWeight: 'bold' }}>
                        Oops !
                    </Text>
                </View>


                <View style={{ position: 'absolute', top: 350 }}>
                    <Text style={{ color: 'black', fontSize: 21 }}>
                        you guessed wrong
                    </Text>
                </View>

                <KeyboardAvoidingView behavior="padding" style={styles.ButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History1", {})} >
                        <Text style={styles.ButtonText}>
                            Try again
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>


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
        backgroundColor:'red',
        borderRadius :10
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
export default ErrorAlert;