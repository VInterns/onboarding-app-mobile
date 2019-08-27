import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Alert

} from 'react-native';

import FadeInView from './FadeInView'
import styles from './styles/history8.styles';

import india from '../assets/rank.png'
import egypt from '../assets/rankCopy.png'
import zambia from '../assets/rankCopy2.png'
import germany from '../assets/rankCopy3.png'
import turkey from '../assets/rankCopy4.png'
import italy from '../assets/rankCopy5.png'
import uk from '../assets/rankCopy6.png'
import spain from '../assets/rankCopy7.png'
import romania from '../assets/rankCopy8.png'
import { DeviceSensor } from 'expo-sensors';

export default class History8 extends Component {

    static navigationOptions = {//header styling
        title: 'History8',
        fontWeight: 'bold'
    };

    constructor() {
        super();
        this.state = {
            answer: false
        }
    }
    validatePressedPhoto = () => {
        if (this.state.answer == true) {

                 this.props.navigation.navigate("GreatJob2", {})
           // Alert.alert("correct answer")
        }
        else {
         //   Alert.alert("wrong answer")
            this.props.navigation.navigate("ErrorAlert4", {});
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 180 }}>

                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: true })
                        }} >
                            <Image source={india} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }} >
                            <Image source={egypt} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }} >
                            <Image source={zambia} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }} >
                            <Image source={germany} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }}>
                            <Image source={turkey} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }}>
                            <Image source={italy} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }} >
                            <Image source={uk} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }}>
                            <Image source={spain} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonDesign} onPress={() => {
                            this.setState({ answer: false })
                        }}>
                            <Image source={romania} style={styles.ButtonimageStyle} />
                        </TouchableOpacity>
                    </View>

                </View>


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
                        this.validatePressedPhoto()
                    }>
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History7", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View >


        );
    }
}
