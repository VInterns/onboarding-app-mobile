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

} from 'react-native';

import FadeInView from './FadeInView';
import styles from './styles/history6.styles';

import centerImg from '../assets/undrawBuildingBlocksN0Nc.png'
//import backgroundImg from '../assets/background.png';
export default class History6 extends Component {

    static navigationOptions = {//header styling
        title: 'History6',
        fontWeight: 'bold'
    };


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    <View style={styles.LeftView}>
                        <FadeInView>
                            <Text style={styles.redText}>Europe</Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.blackText}>
                                    -Albania {'\n'}
                                    -Czech Republic {'\n'}
                                    -Germany {'\n'}
                                    -Greece {'\n'}
                                    -Hungary {'\n'}
                                    -Ireland {'\n'}
                                    -UK {'\n'}
                                </Text>
                            </View>
                        </FadeInView>
                    </View>
                    <View style={styles.RightView}>
                        <FadeInView>
                            <Text style={styles.blackText}>
                                -Italy {'\n'}
                                -Malta {'\n'}
                                -Netherlands {'\n'}
                                -Portugal {'\n'}
                                -Spain {'\n'}
                                -Romania {'\n'}
                            </Text>
                        </FadeInView>
                    </View>

                </View>


                <View style={styles.LowerTextContainer}>

                    <View style={styles.LeftView}>
                        <FadeInView>
                            <Text style={styles.redText}>AMAP</Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.blackText}>
                                    -Australia {'\n'}
                                    -Ghana {'\n'}
                                    -Kenya {'\n'}
                                    -Qatar {'\n'}
                                    -Vodacom Group {'\n'}
                                </Text>
                            </View>
                        </FadeInView>
                    </View>
                    <View style={styles.RightView}>
                        <FadeInView>
                            <Text style={styles.blackText}>
                                -Egypt {'\n'}
                                -India {'\n'}
                                -New Zealand {'\n'}
                                -Turkey {'\n'}
                            </Text>
                        </FadeInView>
                    </View>

                </View>
                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History1", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("walkThrough3", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>


            </View >


        );
    }
}
