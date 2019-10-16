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
        console.log("subscription")
        if (!this.state.navigated && (playbackStatus.durationMillis + 2000 === playbackStatus.positionMillis + 2000)) {     // The player has just finished playing and will stop.
            console.log("navigate to history from video")
            this.setState({ navigated: true });
            this.props.navigation.navigate("History");
        }
        //   this.tryNavigate();
    };


    // componentDidMount() {
    //     // Start counting when the page is loaded
    //     console.log("----------will mount-------");

    //     this.timeoutHandle = setTimeout(() => {
    //         console.log("SetTimeOut");
    //         // Add your logic for the transition
    //         // this.tryNavigate
    //         // this.props.tryNavigate("History");
    //         this.props.navigation.navigate("History");
    //     }, 4000);
    // }

    // componentWillUnmount() {
    //     clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    // }


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