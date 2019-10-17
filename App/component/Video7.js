import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import video from '../assets/final2.mp4';
export default class Video7 extends React.Component {
    static navigationOptions = {//header styling
        header: null
    };
    _onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.durationMillis + 500 === playbackStatus.positionMillis + 500)
            // The player has just finished playing and will stop.

            this.props.navigation.navigate("Survey", {})
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
    /*     controlBar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        } */
});