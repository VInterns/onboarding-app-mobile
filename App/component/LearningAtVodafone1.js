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

import centerImg from '../assets/LearningAtVodafone_courses.png'

export default class LearningAtVodafone1 extends Component {

    static navigationOptions = {//header styling
        header: null
    };


    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={{ justifyContent: 'center', alignItems: 'stretch', flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image source={centerImg} />
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.blackText}>
                        <Text style={styles.boldText}>At Vodafone </Text>
                        continuous learning is a</Text>
                    <Text style={styles.blackText}>MUST which is why different learning</Text>
                    <Text style={styles.blackText}>platforms are offered to our employees</Text>
                    <Text style={styles.blackText}>such as : Vodafone university , Udemy ,</Text>
                    <Text style={styles.blackText}>Pluralsight , Linkedin Learning and more….</Text>
                </View>

                <View style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("LearningAtVodafone")} >
                        <Text style={styles.ButtonText}>
                            Back
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("LearningAtVodafone_last")} >
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: (80 / DEVICE_HEIGHT) * DEVICE_HEIGHT,
        //backgroundColor: 'yellow'
    },

    blackText: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * (20 / DEVICE_WIDTH),
        fontFamily: "VodafoneRg",
        // fontWeight: 'bold'
    },
    boldText: {
        color: 'black',
        fontSize: DEVICE_WIDTH * (20 / DEVICE_WIDTH),
        fontWeight: 'bold'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: DEVICE_WIDTH * (30 / DEVICE_WIDTH),
        marginTop: DEVICE_HEIGHT * (10 / DEVICE_HEIGHT),
        //backgroundColor: 'green',
        flexWrap: 'wrap'
    },

    button: { // button design
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
        marginLeft: DEVICE_WIDTH * 0.095,
        flexWrap: 'wrap',
        flexDirection: 'row',
        //backgroundColor: 'red'
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});