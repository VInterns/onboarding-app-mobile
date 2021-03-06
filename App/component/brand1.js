import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Text
} from 'react-native';

import halfTriLeft from '../assets/shape1.png';
import halfTriRight from '../assets/shape2.png';
import video from '../assets/theStoryOfHello.mp4';
import { Video } from 'expo-av';
import YouTube from 'react-native-youtube';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Brand1 extends Component {

    static navigationOptions = {//header styling
        header: null
    };
    state = {
        mute: false,
        shouldPlay: true,
        pause: true
    }

    props:{
        shouldPlay: Boolean,
    }

    static getDerivedStateFromProps(props, state){
     
        // this.setState((prevState) => ({
        //     // shouldPlay: !prevState.shouldPlay
        //     shouldPlay: props.shouldPlay

        // }));
    
        return state;
    }

    render() {
        console.log("Widht : " + DEVICE_WIDTH);
        console.log("height : " + DEVICE_HEIGHT);

        const { navigate } = this.props.navigation;


        return (
            <View style={{ width: '100%', height: '100%', flex: 1 }}>
                <View style={styles.ImagesView}>

                    <Image source={halfTriLeft} style={styles.LeftImage}>{/*background*/}
                    </Image>
                    <Video
                        pause={this.state.pause}
                        source={video}
                        shouldPlay={this.state.shouldPlay}
                        resizeMode="cover"
                        style={styles.Video}
                    />
                    <Image source={halfTriRight} style={styles.RightImage}>{/*background*/}
                    </Image>
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.blackText}>
                        <Text style={styles.redText}>Vodafone </Text>
                        introduced it's current logo {'\n'}
                        designed by Brand Union as part of a {'\n'}
                        global brand repositioning. As part of a {'\n'}
                        major global rebranding and brand re- {'\n'}
                        positioning, Vodafone Group has {'\n'}
                        launched a new campaign called "Hello" {'\n'}
                        which forms part of the brand's biggest {'\n'}
                        advertising campaign in its 33-year {'\n'}
                        history.
                        </Text>
                </View>


                <View style={styles.ButtonsView}>
                    <TouchableOpacity style={styles.BackButton} onPress={() => {
                        // this.setState((prevState) => ({
                        //     // shouldPlay: !prevState.shouldPlay
                        //     shouldPlay: true

                        // }));
                        navigate("Brand", {})}
                    } >
                        <Text style={styles.ButtonText}>
                            BACK
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.NextButton} onPress={() => {
                        // this.state.shouldPlay = false;
                        // this.state.pause = false;

                        this.setState((prevState) => ({
                            // shouldPlay: !prevState.shouldPlay
                            shouldPlay: false

                        }));
                        navigate("Brand2", {});
                    }} >
                        <Text style={styles.ButtonText}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ImagesView: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center'
    },
    LeftImage: { //background style
        // marginTop: DEVICE_HEIGHT * 0.1132, //80
        zIndex: 1,
        position: "absolute"
    },
    RightImage: { //background style
        // marginTop: DEVICE_HEIGHT * 0.1132,
        marginLeft: DEVICE_WIDTH - 134,
        zIndex: 1,
        position: "absolute",
        marginRight: 120
    },
    Video: {
        zIndex: 5,
        marginLeft: DEVICE_WIDTH * 0.069, //40
        // marginTop: DEVICE_HEIGHT * 0.2123, //150
        width: DEVICE_WIDTH * 0.87, //300
        height: DEVICE_HEIGHT * 0.3, // 170,
        alignSelf: "center",
        borderRadius: 10
    },
    TextContainer:
    {
        alignItems: 'center',
        // marginTop: DEVICE_HEIGHT * 0.169
        flex: 2
    },
    blackText: {
        color: 'black',
        fontSize: 17,
    },
    redText: {
        color: 'red',
        fontSize: 17
    },
    ButtonsView: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.063,
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
        marginLeft: DEVICE_WIDTH * 0.5,
    },
    ButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
