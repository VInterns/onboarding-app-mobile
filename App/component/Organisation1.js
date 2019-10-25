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

import img1 from '../assets/group10.png';
import img2 from '../assets/group12.png';
import img3 from '../assets/group11.png';
import img4 from '../assets/group13.png';
import img5 from '../assets/group14.png';
import img6 from '../assets/group18.png';
import img7 from '../assets/group19.png';
import img8 from '../assets/group17.png';
import img9 from '../assets/group16.png';



export default class Organisation1 extends Component {

    static navigationOptions = {
        //header styling
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        In Vodafone we have 9 Departments :
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={img1} style={styles.img} />
                    <Image source={img2} style={styles.img} />
                    <Image source={img3} style={styles.img} />
                    <Image source={img4} style={styles.img} />
                    <Image source={img5} style={styles.img} />
                    <Image source={img6} style={styles.img} />
                    <Image source={img7} style={styles.img} />
                    <Image source={img8} style={styles.img} />
                    <Image source={img9} style={styles.img} />

                </View>
                <View style={styles.NextButtonView}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} > */}
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation0")} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation2")} >
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

    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        padding: DEVICE_WIDTH * 0.05,
    },
    text: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: DEVICE_HEIGHT * 0.06,
        //   fontFamily: "VodafoneRg",
        fontSize: 19,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d"
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flex: 8
    },
    img: {
        width: '31%',
        margin: '1%',
    },
    button: { // button design
        /*    width: 70,
           height: 25, */
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    NextButtonView: { //wrapper for button 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.03,
        marginRight: DEVICE_WIDTH * 0.095,
        marginLeft: DEVICE_WIDTH * 0.095,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});