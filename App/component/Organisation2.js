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

import gary from "../assets/gary.png";
import varsha from "../assets/varsha.png";
import sara from "../assets/sara.png";
import sherif from "../assets/sherif.png";
import Osama from "../assets/Osama.png";
import vikas from "../assets/vikas.png";
import emma from "../assets/emma.png";
import ricardo from "../assets/ricardo.png";
import priyanka from "../assets/priyanka.png";
import gs from "../assets/gs.png";
import natalie from "../assets/natalie.png";
import bart from "../assets/bart.png";

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
                <View style={styles.textBox}>
                    <Text style={styles.redText}>
                        Functional Service Lines
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.ceoBoxContainer}>
                        <View style={styles.boxItem}>
                            <Image source={gary} />
                            <Text style={styles.upperText}>
                                Gary {"\n"} Adey
                            </Text>
                            <Text style={styles.lowerText}>
                                VSS Director
                            </Text>

                        </View>
                    </View>
                    <View style={styles.directorsContainer}>
                        <View style={styles.boxItem}>
                            <Image source={varsha} />
                            <Text style={styles.upperText}>
                                Varsha{"\n"}Singh
                            </Text>
                            <Text style={styles.lowerText}>
                                Enterprise and Marketing
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={sara} />
                            <Text style={styles.upperText}>
                                Sara {"\n"} Heuer
                            </Text>
                            <Text style={styles.lowerText}>
                                Supply Chain Management & Finance Operations
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={sherif} />
                            <Text style={styles.upperText}>
                                Sherif {"\n"} El-Khouly
                            </Text>
                            <Text style={styles.lowerText}>
                                Vodafone Digital Business Solutions
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItemWithoutshaddow}>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.redText}>
                            Enabling Functions
                    </Text>
                    </View>
                    <View style={styles.directorsContainer}>

                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={vikas} />
                            <Text style={styles.upperText}>
                                Vikas {"\n"} Poddar
                            </Text>
                            <Text style={styles.lowerText}>
                                Finance
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={emma} />
                            <Text style={styles.upperText}>
                                Emma {"\n"} Derby
                            </Text>
                            <Text style={styles.lowerText}>
                                Human Resources
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={ricardo} />
                            <Text style={styles.upperText}>
                                Ricardo{"\n"} Rovira-Marti
                            </Text>
                            <Text style={styles.lowerText}>
                                IT Operations Management
                            </Text>
                        </View>

                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={priyanka} />
                            <Text style={styles.upperText}>
                                Priyanka {"\n"} Sinha
                            </Text>
                            <Text style={styles.lowerText}>
                                Legal
                            </Text>
                        </View>
                        {/* ------------- */}
                        <View style={styles.boxItem}>
                            <Image source={gs} />
                            <Text style={styles.upperText}>
                                GS {"\n"} Rao
                            </Text>
                            <Text style={styles.lowerText}>
                                Corporate Security
                            </Text>
                        </View>

                        <View style={styles.boxItem}>
                            <Image source={natalie} />
                            <Text style={styles.upperText}>
                                Natalie {"\n"} Longhurst
                            </Text>
                            <Text style={styles.lowerText}>
                                Partner Managemen
                            </Text>
                        </View>

                        <View style={styles.boxItem}>
                            <Image source={bart} />
                            <Text style={styles.upperText}>
                                Bart {"\n"} Borchardt
                            </Text>
                            <Text style={styles.lowerText}>
                                Strategic Projects
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation1")} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Organisation3")} >
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
    redText:
    {

        fontFamily: "VodafoneBold",
        color: "#BD0000",
        fontSize: 21,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#BD0000",

    },
    textBox:
    {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
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
        shadowColor: "rgba(0, 0, 0, 0.11)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 25,
        shadowOpacity: 1,
        margin: DEVICE_HEIGHT * 0.03,
        alignItems: 'center',
        paddingVertical: DEVICE_HEIGHT * 0.01,
        paddingHorizontal: DEVICE_HEIGHT * 0.01,
        elevation: 8
    },
    boxItemWithoutshaddow: {
        width: DEVICE_WIDTH * 0.35,
        height: DEVICE_HEIGHT * 0.21,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.11)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 25,
        shadowOpacity: 1,
        margin: DEVICE_HEIGHT * 0.03,
        alignItems: 'center',
        paddingVertical: DEVICE_HEIGHT * 0.02,
        paddingHorizontal: DEVICE_HEIGHT * 0.01,
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
        fontSize: 10,
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