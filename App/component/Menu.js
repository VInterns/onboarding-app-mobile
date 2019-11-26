import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import vodafoneReady from '../assets/vodafoneReady.png';
import { red } from 'ansi-colors';

export default class Organisation1 extends Component {

    static navigationOptions = {
        //header styling
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Reference Checklist</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.links} onPress={() => navigate("History")}> 1. <Text style={styles.underline}>History</Text></Text>
                    <Text style={styles.links} onPress={() => navigate("Organisation")}> 2.<Text style={styles.underline}>Organization</Text> </Text>
                    <Text style={styles.links} onPress={() => navigate("Brand")}> 3.<Text style={styles.underline}>Brand</Text> </Text>
                    <Text style={styles.links} onPress={() => navigate("HealthAndSafety")}> 4.<Text style={styles.underline}>Health and safety</Text> </Text>
                    <Text style={styles.links} onPress={() => navigate("LearningAtVodafone")}> 5. <Text style={styles.underline}>Learning at vodafone</Text></Text>
                    <Text style={styles.links} onPress={() => navigate("WorkingAtVodafone")}> 6. <Text style={styles.underline}>Working at vodafone</Text></Text>
                    <Text style={styles.links} onPress={() => navigate("Contacts")}> 7. <Text style={styles.underline}>References</Text></Text>

                </View>
                <View style={styles.imageContainer}>
                    <Image source={vodafoneReady} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30
    },
    titleContainer:
    {
        flex: 1,
        justifyContent: "center",
    },
    title:
    {
        fontFamily: "VodafoneBold",
        fontSize: 24
    },
    textContainer:
    {
        flex: 5,
        paddingLeft: 8
    },
    links:
    {
        color: "#E60000",
        fontSize: 18,
        marginBottom: 14,
    },
    underline:
    {
        textDecorationLine: 'underline'
    },
    imageContainer:
    {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    }
});