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
    ScrollView,
} from 'react-native';

import alexandre from "../assets/Alexandre.png";
import Rasha from "../assets/Rasha.png";
import Ayman from "../assets/Ayman.png";
import Emad from "../assets/Emad.png";
import Osama from "../assets/Osama.png";
import Nagla from "../assets/Nagla.png";
import MohamedAbdullah from "../assets/MohamedAbdullah.png";
import Shahinaz from "../assets/Shahinaz.png";
import KarimShehata from "../assets/KarimShehata.png";
import KareemEid from "../assets/KareemEid.png";


export default class Organisation0 extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Our Organizational Structure is as follows :
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <View style={styles.ceoBoxContainer}>
                        <View style={styles.boxItem}>
                            <Image source={alexandre} />
                            <Text style={styles.upperText}>
                                Alexandre {"\n"} Froment-Curtil
                            </Text>
                            <Text style={styles.lowerText}>
                                CEO
                            </Text>

                        </View>
                    </View>
                    <View style={styles.directorsContainer}>
                        <View style={styles.boxItem}>
                            <Image source={Rasha} />
                            <Text style={styles.upperText}>
                                Rasha{"\n"}ElAzhary
                            </Text>
                            <Text style={styles.lowerText}>
                                Finance Director
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={Ayman} />
                            <Text style={styles.upperText}>
                                Ayman {"\n"} Essam
                            </Text>
                            <Text style={styles.lowerText}>
                                External Affairs Director
                            </Text>
                        </View>
                        {/* ------------- */}
                        {/* <View style={styles.boxItem}>
                            <Image source={Emad} />
                            <Text style={styles.upperText}>
                                Emad {"\n"} ElAzhary
                            </Text>
                            <Text style={styles.lowerText}>
                                Strategy Director
                            </Text>
                        </View> */}
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={Osama} />
                            <Text style={styles.upperText}>
                                Osama {"\n"} Said
                            </Text>
                            <Text style={styles.lowerText}>
                                Technology Director
                            </Text>
                        </View>
                        {/* -------Naglaa------ */}
                        <View style={styles.boxItem}>
                            <Image source={Nagla} />
                            <Text style={styles.upperText}>
                                Nagla {"\n"} Kinawi
                            </Text>
                            <Text style={styles.lowerText}>
                                HR Director
                            </Text>
                        </View>
                        {/* ------Mohamed Abulallah------- */}
                        <View style={styles.boxItem}>
                            <Image source={MohamedAbdullah} />
                            <Text style={styles.upperText}>
                                Mohamed {"\n"} Abdallah
                            </Text>
                            <Text style={styles.lowerText}>
                                Consumer Business Unit Director
                            </Text>
                        </View>
                        {/* ------Shahinaz------- */}
                        <View style={styles.boxItem}>
                            <Image source={Shahinaz} />
                            <Text style={styles.upperText}>
                                Shahinaz {"\n"} Ghazy
                            </Text>
                            <Text style={styles.lowerText}>
                                Customer Care Director
                            </Text>
                        </View>

                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={KarimShehata} />
                            <Text style={styles.upperText}>
                                Karim {"\n"} Shehata
                            </Text>
                            <Text style={styles.lowerText}>
                                Vodafone Business Unit Director
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={KareemEid} />
                            <Text style={styles.upperText}>
                                Kareem {"\n"} Eid
                            </Text>
                            <Text style={styles.lowerText}>
                                Consumer Marketing Digital Director
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation")} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation1")} >
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
        // backgroundColor: '#EC6AA9',
    },
    textContainer: {
        flex: 1,
        padding: DEVICE_WIDTH * 0.05,
        paddingTop: DEVICE_HEIGHT * 0.08,
        flexWrap: 'wrap',
        // backgroundColor: '#ECB76A'
    },
    text: {
        fontFamily: "VodafoneBold",
        fontSize: 21,
        lineHeight: 25,
        letterSpacing: 0,
        color: "#4b464d",
        flexWrap: 'wrap',
    },
    imageContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#6AE0EC',
        flex: 8
    },
    img: {
        justifyContent: 'center',
        marginLeft: '5%',
    },
    ceoBoxContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'stretch',
        width: '100%',
        // backgroundColor: '#AD6AEC',
    },
    directorsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    boxItem: {
        width: DEVICE_WIDTH * 0.35,
        height: DEVICE_HEIGHT * 0.21,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 6.68,
        shadowOpacity: 0.36,
        margin: DEVICE_HEIGHT * 0.03,
        alignItems: 'center',
        paddingVertical: DEVICE_HEIGHT * 0.01,
        paddingHorizontal: DEVICE_HEIGHT * 0.01,
        elevation: 8
    },
    upperText: {
        // width: 111,
        // height: 28,
        fontFamily: "VodafoneRg",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#4b464d",
        alignItems: 'center',
    },
    lowerText: {
        // width: 111,
        // height: 18,
        fontFamily: "VodafoneBold",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "center",
        color: "#4b464d",
        alignItems: 'center',
    },
    button: {
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