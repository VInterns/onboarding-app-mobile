import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import video from '../assets/01.mp4';
export default class Video1 extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         lastScreen: ""
    //     };
    // }
    // props: {
    //     tryNavigate: (nextScreen: string) => void
    // };
    // tryNavigate = () => {
    //     this.props.tryNavigate("History");
    // };
    static navigationOptions = {//header styling
        header: null
    };
    _onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.durationMillis + 500 === playbackStatus.positionMillis + 500)
            // The player has just finished playing and will stop.

            this.props.navigation.navigate("History", {})
        //   this.tryNavigate();
    };
    render() {
        const { width } = Dimensions.get('window');
        const { height } = Dimensions.get('window');
        return (
            <View style={styles.container}>

                <Video
                    source={video}
                    onPlaybackStatusUpdate=
                    {
                        (playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus)
                    }
                    shouldPlay
                    resizeMode="cover"
                    style={{ width, height: height }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});