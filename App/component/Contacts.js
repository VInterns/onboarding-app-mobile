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

import mapLocation from "../assets/mapLocation.png";
import directory from "../assets/directory.png";
import presentation from "../assets/presentation.png";
import callAnswer from "../assets/callAnswer.png";
import mail from "../assets/mail.png";

export default class Contacts extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>

                    <View style={{ flexDirection: 'row', flexwrap: 'wrap' }}>
                        <View style={styles.iconBox}></View>
                        <Text style={styles.textTitleLarge}>
                            References
                        </Text>
                    </View>
                    <View style={styles.HeaderAndImageView}>
                        <Image source={mapLocation} />
                        <Text style={styles.textTitleSmall}>
                            Locations
                        </Text>
                    </View>
                    <View style={styles.separator}></View>

                    <Text style={styles.blockHeader}>
                        {"\n"}
                        Vodafone Egypt Premises
                    </Text>
                    <Text style={styles.blockTitle}>
                        -C2 , C3, Facilities                    </Text>
                    <Text style={styles.blockText}>
                        KM28, Smart Village، Alexandria Desert Rd
                    </Text>
                    <Text style={styles.blockTitle}>
                        - Zahraa
                    </Text>
                    <Text style={styles.blockText}>
                        Block 89, El Shatr 13, Zahraa El Maadi Cairo </Text>
                    <Text style={styles.blockTitle}>
                        - Dallah
                    </Text>
                    <Text style={styles.blockText}>
                        7A Corniche El Maadi, Maadi Al Khabiri Al Wasti, Maadi, Cairo Governorate
                    {"\n"}
                    </Text>

                    <View style={styles.HeaderAndImageView}>
                        <Image source={presentation} />
                        <Text style={styles.textTitleSmall}>
                            Induction Session
                    </Text>
                    </View>
                    <View style={styles.separator}></View>
                    <Text style={styles.blockTitle}>
                        Shortly an invitation will be sent to you to attend Vodafone’s Induction for new hires within your 1st week at Vodafone                             {"\n"}
                    </Text>


                    <View style={styles.HeaderAndImageView}>
                        <Image source={directory} />
                        <Text style={styles.textTitleSmall}>
                            Contacts
                    </Text>
                    </View>

                    <View style={styles.separator}></View>

                </View>
                <View style={styles.blockContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <Text style={styles.blockHeader}>
                        Help Desk :
                    </Text>
                    <View style={styles.HeaderAndImageView}>
                        <Image style={styles.smallIcon} source={callAnswer} />
                        <Text style={styles.blockTitle}>
                            Phone Numbers:
                    </Text>
                    </View>

                    <Text style={styles.blockText}>
                        - 01001793777 {"\n"}
                        - 0235370766 {"\n"}
                        - 0225292525
                    </Text>
                </View>
                <View style={styles.blockContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <Text style={styles.blockBigHeader}>For transportation inquiries please contact</Text>
                    <Text style={styles.blockHeader}>
                        Fleet Help Desk :
                    </Text>
                    <View style={styles.HeaderAndImageView}>
                        <Image style={styles.smallIcon} source={callAnswer} />
                        <Text style={styles.blockTitle}>
                            Phone Numbers:
                    </Text>
                    </View>
                    <Text style={styles.blockText}>
                        - 0225294858
                    </Text>
                </View>
                <View style={styles.blockContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <Text style={styles.blockHeader}>
                        Health and safety :
                    </Text>
                    <View style={styles.HeaderAndImageView}>
                        <Image style={styles.smallIcon} source={callAnswer} />
                        <Text style={styles.blockTitle}>
                            Phone Numbers:
                    </Text>
                    </View>
                    <Text style={styles.blockText}>
                        - 01001793777 {"\n"}
                        - 02-25292525 {"\n"}
                        - 82525
                    </Text>

                    <View style={styles.HeaderAndImageView}>
                        <Image style={styles.smallIcon} source={mail} />
                        <Text style={styles.blockTitle}>
                            Email:
                    </Text>
                    </View>
                    <Text style={styles.blockText}>
                        H&Shelpdeskteam@Vodafone.com
                    </Text>
                    <Text style={styles.blockBigHeader}>
                        For any other inquiries please email using email subject ( new hire inquiry )
                    </Text>
                    <View style={styles.HeaderAndImageView}>
                        <Image style={styles.smallIcon} source={mail} />
                        <Text style={styles.blockTitle}>
                            Email:
                    </Text>
                    </View>
                    <Text style={styles.blockText}>
                        Welcome.tovodafone@vodafone.com
                    </Text>

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
    textTitleLarge: {
        fontFamily: "VodafoneBold",
        fontSize: 37,
        color: "#4b464d",
    },
    textTitleSmall: {
        fontFamily: "VodafoneBold",
        fontSize: 28,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 44,
        letterSpacing: 0,
        color: "#BD0000",
        marginLeft: 8
    },
    blockContainer: {
        // justifyContent: 'center',
        flexDirection: 'column',
        flex: 8,
        paddingHorizontal: DEVICE_WIDTH * 0.05,
    },
    blockBigHeader: {
        fontFamily: "VodafoneBold",
        fontSize: 18,
        color: "#4b464d"
    },
    blockHeader: {
        fontFamily: "VodafoneRg",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#BD0000",
        // backgroundColor: '#6AA7EC',
    },
    blockTitle: {
        fontFamily: "VodafoneBold",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d",
        paddingLeft: DEVICE_WIDTH * 0.05,
        paddingBottom: DEVICE_HEIGHT * 0.01,
        paddingTop: DEVICE_HEIGHT * 0.02,

    },
    blockText: {
        fontFamily: "VodafoneRg",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        color: "#4b464d",
        paddingLeft: DEVICE_WIDTH * 0.05

    },
    separator: {
        // width: 326,
        height: 1,
        opacity: 0.25,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#4a4d4e",
        marginVertical: DEVICE_HEIGHT * 0.01,
    },
    iconBox: {
        width: 23,
        height: 20,
        borderRadius: 3,
        backgroundColor: "#ebebeb",
        zIndex: -1,
        position: 'absolute',
        top: 4

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
    HeaderAndImageView:
    {
        flexDirection: "row",
        justifyContent: "flex-start",
        // height: 45,
    },
    smallIcon:
    {
        marginTop: 20
    }
});