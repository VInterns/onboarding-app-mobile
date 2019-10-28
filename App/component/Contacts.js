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


export default class Contacts extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitleLarge}>
                        Important
                    </Text>
                    <Text style={styles.textTitleSmall}>
                        Contacts
                    </Text>
                </View>
                <View style={styles.blockContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <Text style={styles.blockHeader}>
                        Help Desk :
                    </Text>
                    <Text style={styles.blockTitle}>
                        Phone Numbers:
                    </Text>
                    <Text style={styles.blockText}>
                        - 01001793777 {"\n"}
                        - 0235370766 {"\n"}
                        - 0225292525
                    </Text>
                    <View style={styles.separator}></View>
                </View>
                <View style={styles.blockContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <Text style={styles.blockBigHeader}>For transportation inquiries please contact</Text>
                    <Text style={styles.blockHeader}>
                        Fleet Help Desk :
                    </Text>
                    <Text style={styles.blockTitle}>
                        Phone Numbers:
                    </Text>
                    <Text style={styles.blockText}>
                        - 0225294858
                    </Text>
                    <View style={styles.separator}></View>
                </View>
                <View style={styles.blockContainer}>
                    {/* <Image source={img1} style={styles.img} /> */}
                    <Text style={styles.blockHeader}>
                        Health and safety :
                    </Text>
                    <Text style={styles.blockTitle}>
                        Phone Numbers:
                    </Text>
                    <Text style={styles.blockText}>
                        - 01001793777 {"\n"}
                        - 02-25292525 {"\n"}
                        - 82525
                    </Text>
                    <Text style={styles.blockTitle}>
                        Email:
                    </Text>
                    <Text style={styles.blockText}>
                        H&Shelpdeskteam@Vodafone.com
                    </Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.blockHeader}>
                        For any other inquiries please email using email subject ( new hire inquiry )
                    </Text>
                    <Text style={styles.blockTitle}>
                        Email:
                    </Text>
                    <Text style={styles.blockText}>
                        Welcome.tovodafone@vodafone.com
                    </Text>

                </View>
                {/* <View style={styles.NextButtonView}>
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
                </View> */}
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
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 44,
        letterSpacing: 0,
        color: "#4b464d"
    },
    textTitleSmall: {
        fontFamily: "VodafoneRg",
        fontSize: 37,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 44,
        letterSpacing: 0,
        color: "#e60000"
    },
    blockContainer: {
        // justifyContent: 'center',
        flexDirection: 'column',
        // alignItems: 'center',
        // backgroundColor: '#6AE0EC',
        flex: 8,
        paddingHorizontal: DEVICE_WIDTH * 0.05,
    },
    blockBigHeader: {
        fontFamily: "VodafoneBold",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d"
    },
    blockHeader: {
        fontFamily: "VodafoneBold",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#e60000",
        // paddingBottom: DEVICE_HEIGHT * 0.02,
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
        fontSize: 20,
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
        marginVertical: DEVICE_HEIGHT * 0.02,
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