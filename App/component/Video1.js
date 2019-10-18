import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import video from '../assets/01.mp4';
export default class Video1 extends React.Component {
    constructor() {
        super();

        this.state = {
            navigated: false
        };
    }
    props: {
        tryNavigate: (nextScreen: string) => void
    };
    tryNavigate = () => {
        console.log("Before try naviate vid")
        this.props.tryNavigate("History");
        console.log("After try naviate vid")
    };
    // static navigationOptions = {//header styling
    //     header: null
    // };
    _onPlaybackStatusUpdate = playbackStatus => {
        if (!this.state.navigated && (playbackStatus.durationMillis + 2000 === playbackStatus.positionMillis + 2000)) {     // The player has just finished playing and will stop.
            // console.log("navigate to history from video")
            this.setState({ navigated: true });
            this.tryNavigate();
            this.props.navigation.navigate("History");
        }
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
                    shouldPlay={!this.state.navigated}
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