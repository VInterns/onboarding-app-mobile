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
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    <View style={styles.LeftView}>
                        <FadeInView>
                            <Text style={styles.redText}>Europe</Text>
                            <View style={{ marginTop: DEVICE_HEIGHT * 0.0135 }}>
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
                                {'\n'}
                            </Text>
                        </FadeInView>
                    </View>

                </View>


                <View style={styles.LowerTextContainer}>

                    <View style={[styles.LeftView,{paddingLeft:DEVICE_WIDTH*0.0483}]}>
                        <FadeInView>
                            <Text style={styles.redText}>AMAP</Text>
                            <View style={{ marginTop: DEVICE_HEIGHT * 0.0135 }}>
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
                                {'\n'}
                            </Text>
                        </FadeInView>
                    </View>

                </View>

                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History5", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                             </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History7", {})}>
                            <Text style={styles.ButtonText}>
                                NEXT
                             </Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </View >


        );
    }
}
