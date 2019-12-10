import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import events1 from '../assets/events1.jpg';
import events2 from '../assets/events2.png';
import events3 from '../assets/events3.png';
import events4 from '../assets/events4.png';
import events5 from '../assets/events5.png';
import events6 from '../assets/events6.jpg';

import HS1Image from '../assets/HS1.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class events extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.MainView}>

                <ScrollView style={styles.ScrollView}>


                    <Text style={styles.HeaderBlackBoldText}>Events {'\n'}</Text>
                    <Text style={styles.RedText}>OF THE YEAR {'\n'}</Text>
                    <Text style={styles.HeaderBlackText}>
                        Our Staff engagement is what makes us Top
                        Employer, and here are some events that take place
                        every year.
                </Text>
                    <View style={styles.EventsContainer}>
                        <Text style={styles.RedText}>Bring</Text>
                        <Text style={styles.BlackBoldText}>Your kids</Text>
                        <View style={styles.UnderLine}></View>
                        <Text style={styles.BlackText}>Employees kids join their parents and Enjoy Vodafone’s workplace</Text>
                        <Image source={events1} style={styles.FirstImageStyle} />
                        <Image source={events2} style={styles.ImageStyle} />
                        <Text style={styles.RedText}>Learning</Text>
                        <Text style={styles.BlackBoldText}>Week</Text>
                        <View style={styles.UnderLine}></View>
                        <Text style={styles.BlackText}>Everyone’s got different learning needs, and the learning week has got you covered with tons of gamified and up to date sessions</Text>
                        <Image source={events3} style={styles.ImageStyle} />

                        <Text style={styles.BlackBoldText}>Hackathon</Text>
                        <View style={styles.UnderLine}></View>
                        <Text style={styles.BlackText}>Developing digital solutions that serve communities or businesses through Vodafone’s annual hackathon competition</Text>
                        <Image source={events4} style={styles.ImageStyle} />
                        <Image source={events5} style={styles.ImageStyle} />

                        <Text style={styles.BlackBoldText}>STEM</Text>
                        <View style={styles.UnderLine}></View>
                        <Text style={styles.BlackText}>Encouraging young girls to join the Tech world by joining 1 week STEM program where they #CodeLikeAGirl!</Text>
                        <Image source={events6} style={styles.ImageStyle} />
                        <Text style={styles.MoreText}>And more….</Text>

                    </View>

                </ScrollView>

                <View style={styles.ButtonsView}>
                    <TouchableOpacity style={styles.BackButton} onPress={() => navigate("WorkingAtVodafone1", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.NextButton} onPress={() => navigate("WorkingAtVodafone2", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView:
    {
        flex: 1,
        marginTop: 90,
    },
    ScrollView:
    {
        paddingHorizontal: 0.0628 * DEVICE_WIDTH,
    },
    HeaderBlackBoldText:
    {
        width: 163,
        height: 61,
        fontFamily: "VodafoneBold",
        fontSize: DEVICE_WIDTH * 0.1304,
        // fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d",
        marginBottom: 10
    },
    RedText:
    {
        // width: 161,
        // height: 31,
        fontFamily: "VodafoneRg",
        fontSize: 0.0676 * DEVICE_WIDTH,
        // fontWeight: "normal",
        // fontStyle: "normal",
        // letterSpacing: 0,
        color: "#e60000",
        marginBottom: 10
    },
    HeaderBlackText:
    {
        // width: 334,
        // height: 112,
        fontFamily: "VodafoneRg",
        fontSize: 0.0579 * DEVICE_WIDTH,
        // fontWeight: "normal",
        // fontStyle: "normal",
        // lineHeight: 26,
        // letterSpacing: 0,
        color: "#4b464d",
        marginBottom: 20
    },
    BlackText:
    {
        width: 302,
        height: 104,
        fontFamily: "VodafoneRg",
        fontSize: 0.0483 * DEVICE_WIDTH,
        fontWeight: "normal",
        fontStyle: "normal",
        // lineHeight: 26,
        letterSpacing: 0,
        color: "#4b464d"
    },
    EventsContainer:
    {
        marginLeft: 13
    },
    BlackBoldText:
    {
        // width: 139,
        // height: 33,
        fontFamily: "VodafoneBold",
        fontSize: 0.0676 * DEVICE_WIDTH,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d",
        marginTop: -10,
        marginBottom: 10
    },
    FirstImageStyle:
    {
        marginTop: -40,
        marginBottom: 10
    },
    ImageStyle:
    {
        marginBottom: 20,
        marginTop: DEVICE_HEIGHT * 0.02

    },
    UnderLine:
    {
        backgroundColor: "#e60000",
        width: 139,
        height: 2,
        marginBottom: 10
    },
    MoreText:
    {
        marginLeft: 170,
        // width: 109,
        // height: 27,
        fontFamily: "VodafoneRg",
        fontSize: 0.0579 * DEVICE_WIDTH,
        // fontWeight: "normal",
        // fontStyle: "normal",
        // letterSpacing: 0,
        color: "#4b464d",
        marginBottom: 30
    },
    ButtonsView: {
        // width: DEVICE_WIDTH,
        height: 45,
        flexDirection: 'row',
        marginBottom: DEVICE_HEIGHT * 0.03,
        backgroundColor: "#0000",
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 22,
        shadowOpacity: 1,
        elevation: 3,
    },
    BackButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: DEVICE_WIDTH * 0.11
    },
    NextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: DEVICE_WIDTH * 0.5
    },
    ButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
})