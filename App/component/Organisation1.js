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

import img1 from '../assets/group10.png';
import img2 from '../assets/group12.png';
import img3 from '../assets/group11.png';
import img4 from '../assets/group13.png';
import img5 from '../assets/group14.png';
import img6 from '../assets/group18.png';
import img7 from '../assets/group19.png';
import img8 from '../assets/group17.png';

export default class Organisation1 extends Component {

    static navigationOptions = {
        //header styling
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        In Vodafone we have 8 Departments :
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.image}>
                        <Image source={img1} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img2} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img3} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img4} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img5} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img6} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img7} style={styles.img} />
                    </View>
                    <View style={styles.image}>
                        <Image source={img8} style={styles.img} />
                    </View>

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
        flexWrap: 'wrap',
    },
    textContainer: {
        flex: 1,
        padding: DEVICE_WIDTH * 0.05,
    },
    text: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: DEVICE_HEIGHT * 0.06,
        fontFamily: "VodafoneBold",
        fontSize: 21,
        fontWeight: "bold",
        lineHeight: 27,
        letterSpacing: 0,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'center',
        flex: 8,
        marginTop: 50
        // backgroundColor: '#EC6AEA',
    },
    image: {
        flexWrap: 'wrap',
        alignContent: 'space-around',
        // padding: '2.5%',
    },
    img: {
        flexWrap: 'wrap',
        alignContent: 'space-between',
    },
    button: { // button design
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