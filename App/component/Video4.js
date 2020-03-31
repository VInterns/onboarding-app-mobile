import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import video from '../assets/04.mp4';
export default class Video4 extends React.Component {
    constructor() {
        super();

        this.state = {
            navigated: false
        };
    }
    props: {
        tryNavigate: (nextScreen: string) => void,
        userId: string,
        sectionNumber: number
    };
    tryNavigate = () => {
        if (this.props.sectionNumber < 7) {
            this.props.tryNavigate("HealthAndSafety", this.props.userId, 7);
        }
    };
    _onPlaybackStatusUpdate = playbackStatus => {
        if (!this.state.navigated && (playbackStatus.durationMillis + 2000 === playbackStatus.positionMillis + 2000)) {     // The player has just finished playing and will stop.
            this.setState({ navigated: true });
            this.tryNavigate();
            this.props.navigation.navigate("HealthAndSafety");
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