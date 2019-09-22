import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    Text
} from 'react-native';

import halfTriLeft from '../assets/group1.png';
import halfTriRight from '../assets/group9.png';
import { Video } from 'expo-av';
import video from '../assets/GIFVID.mp4';


export default class Brand3 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    _onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.durationMillis + 500 === playbackStatus.positionMillis + 500) { }
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ width: '100%', height: '100%', flex: 1 }}>

                <View style={styles.ImagesView}>

                    <Image source={halfTriLeft} style={styles.LeftImage}>
                    </Image>
                    <Video
                        source={video}
                        onPlaybackStatusUpdate=
                        {
                            (playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus)
                        }
                        shouldPlay
                        resizeMode="cover"
                        isLooping
                        style={styles.Video}
                    />
                    <Image source={halfTriRight} style={styles.RightImage}>
                    </Image>
                </View>

                <View style={styles.TextContainer}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={styles.blackText}>
                            <Text style={styles.redText}>“The story of hello” {'\n'}</Text>
                            {'\n'}
                            Changing the ‘Power to You’ tagline that Vodafone {'\n'}
                            has used in all of its advertising and marketing {'\n'}
                            campaigns since 2009, and in comes a new slogan: {'\n'}
                            ‘The future is exciting. Ready?’{'\n'}
                            Nearly 30,000 people in 17 countries had input into {'\n'}
                            the new branding through market research.
                        </Text>

                    </View>
                </View>
                <View style={styles.ButtonsView}>
                    <TouchableOpacity style={styles.BackButton} onPress={() => navigate("Brand2", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.NextButton} onPress={() => navigate("Brand4", {})} >
                        <Text style={styles.ButtonText}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    ImagesView: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center'
    },
    LeftImage: {
        zIndex: 1,
        position: "absolute"
    },
    RightImage: {
        marginLeft: DEVICE_WIDTH - 165,
        zIndex: 1,
        position: "absolute"
    },
    Video: {
        zIndex: 5,
        marginLeft: [DEVICE_WIDTH - 240] / 2,
        width: 240,
        height: 220,
        borderRadius: 10
    },
    TextContainer:
    {
        marginLeft: 15,
        alignItems: 'center',
        flex: 2,
    },
    blackText: {
        // width: 334,
        // height: 97,
        // fontFamily: "VodafoneRg",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4b464d"
    },
    redText: {
        // width: 235,
        // height: 31,
        // fontFamily: "VodafoneRg",
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#e60000"
    },
    ButtonsView: {
        // width: DEVICE_WIDTH,
        height: 45,
        flexDirection: 'row',
        // marginTop: DEVICE_HEIGHT * 0.95,
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
        // position: "absolute"
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
});
