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
import styles from './styles/history7.styles';
import centerImg from '../assets/group2_2.png'

export default class History7 extends Component {

    static navigationOptions = {//header styling
        title: 'History7',
        fontWeight: 'bold'
    };


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} />{/* centered mobile logo*/}

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>  
                        <FadeInView>
                            <Text style={styles.Text}>
                            Can you guess which of the following {'\n'}
                            Vodafone operators have the most {'\n'}
                            subscribers? </Text>
                        </FadeInView>
                </View>

                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => 
                        navigate("History8", {})
                        //this.validatePressedLetters();
                    }>
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History6", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View >


        );
    }
}
