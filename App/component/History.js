import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Text,

} from 'react-native';

import FadeInView from './FadeInView'

import centerImg from '../assets/undrawBuildingBlocksN0Nc.png'
//import backgroundImg from '../assets/background.png';
export default class History extends Component {

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

                    <View style={styles.blackView}>
                        <FadeInView>
                            <Text style={styles.blackText}>
                                Vodafone
                                </Text>
                            <Text style={styles.blackText}>
                                Group
                                </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.redText}>History</Text>
                        </FadeInView>
                    </View>

                </View>

                <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * 0.08 }} />{/* centered mobile logo*/}

                {/*  button view */}
                <View style={styles.NextButtonView}>
                    {/*  <TouchableOpacity style={styles.button} onPress={() => navigate("WorkingAtVodafone")} > */}
                    {/* <TouchableOpacity style={styles.button} onPress={() => navigate("LearningAtVodafone")} >    */}
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} >
                        {/*  <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation")} >  */}
                        {/* <TouchableOpacity style={styles.button} onPress={() => navigate("Survey")} > */}

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

    blackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.1,
        // fontWeight: 'bold'
    },

    redText: {//login word text style
        color: 'red',
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * 0.1,
    },

    blackView: {
        flexDirection: 'row',
        alignItems: 'center',
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

    button: { // button design
        /*    width: 70,
           height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginLeft: DEVICE_WIDTH * 0.68,


    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});