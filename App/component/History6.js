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
// import styles from './styles/history6.styles';

import centerImg from '../assets/undrawBuildingBlocksN0Nc.png'
//import backgroundImg from '../assets/background.png';


export default class History6 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={styles.mainContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.normalText}>Vodafone got to become a global operator and leader in <Text style={styles.boldRedText}>24</Text> <Text style={styles.boldBlackText}>countries. Here are they:</Text></Text>
                </View>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.redText}>Europe</Text>
                </View>
                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={styles.LeftView}>
                        <FadeInView>
                                <Text style={styles.blackText}>
                                    -Albania {'\n'}
                                    -Czech Republic {'\n'}
                                    -Germany {'\n'}
                                    -Greece {'\n'}
                                    -Hungary {'\n'}
                                    -Ireland {'\n'}
                                    -UK {'\n'}
                                </Text>
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





                <View style={styles.paragraphContainer}>
                    <Text style={styles.redText}>AMAP</Text>
                </View>
                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={styles.LeftView}>
                        <FadeInView>
                                <Text style={styles.blackText}>
                                    -Australia {'\n'}
                                    -Ghana {'\n'}
                                    -Kenya {'\n'}
                                    -Oman {'\n'}
                                    -Vodacom Group {'\n'}
                                </Text>
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
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History8", {})}>
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
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({

    mainContainer:{
        flex: 1, 
        // backgroundColor: '#ECC56A'
    },
    titleContainer:{
        flex:1,
        // backgroundColor: '#6AD2EC',
        paddingTop: DEVICE_HEIGHT * 0.08,
        // flexWrap: 'wrap',
        paddingHorizontal: DEVICE_WIDTH * 0.05
    },
    paragraphContainer:{
        // alignItems: 'flex-start',
        paddingLeft: DEVICE_WIDTH * 0.05,
        paddingVertical: DEVICE_HEIGHT * 0.01
    },
    boldBlackText:{
        fontFamily: "VodafoneBold",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d"

    },
    normalText:{
        fontFamily: "VodafoneRg",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d"

    },
    boldRedText:{
        fontFamily: "VodafoneBold",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#e60000"
    },
    blackText: {//welcome to word style
        fontFamily: "VodafoneRg",
        fontSize: 21,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d"
    },
    redText: {//login word text style
        color: 'red',
        fontWeight: 'bold',
        fontSize: 0.067 * DEVICE_WIDTH,

    },
    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'row',
        flex:2,
        // backgroundColor : '#EC6AB9',
        flexWrap: 'wrap',
        paddingHorizontal: DEVICE_WIDTH * 0.05,
        paddingVertical : DEVICE_HEIGHT * 0.02
    },
    LeftView: {
        // backgroundColor: '#ECDE6A',
        flex: 1
    },
    RightView: {
        alignItems: 'flex-start',
        flex:1,
        // backgroundColor: 'yellow'
    },
    button: { // button design
        alignItems: 'center',
        justifyContent: 'center'
    },
    NextButtonView: { //wrapper for button 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BackButtonView: { //wrapper for button 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});