import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,

} from 'react-native';

import ThumbsUp from '../assets/group2_1.png'
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

class GreatJob extends Component {
    props: {
        tryNavigate: (nextScreen: string) => void,
        userId: string,
        sectionNumber: Number
    };
    // tryNavigate = () => {
    //     console.log("Try navigate");

    //     this.props.tryNavigate("History4");
    // };

    componentDidMount() {
        console.log(this.props);
        // Start counting when the page is loaded
        console.log("----------will mount-------");

        this.timeoutHandle = setTimeout(() => {
            if (this.props.sectionNumber < 4) {
                this.props.tryNavigate("History4", this.props.userId, 4);
            }
            this.props.navigation.navigate("History4");
        }, 3000);
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
    static navigationOptions = {
        header: null
    };
    render() {
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={{ marginTop: DEVICE_HEIGHT * 0.135 }}>
                    <Image source={ThumbsUp} />{/* centered mobile logo*/}
                </View>

                <View style={{ marginTop: DEVICE_HEIGHT * 0.027 }}>
                    <Text style={{ color: 'red', fontSize: DEVICE_WIDTH * 0.0629, fontWeight: 'bold' }}>
                        Great Job !
                    </Text>
                </View>

                <View style={{ marginTop: DEVICE_HEIGHT * 0.027, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: DEVICE_WIDTH * 0.050 }}>
                        Vodafone stands for
                    </Text>

                    <Text style={{ color: 'black', fontSize: DEVICE_WIDTH * 0.050, fontWeight: 'bold' }}>
                        Voice, Data and Phone
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    button: { // button design
        width: 128,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 10
    },

    ButtonView: { //wrapper for button 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 462,


    },
    ButtonText: { // text inside button
        color: 'white',
        fontSize: 20,
    },
});
export default GreatJob;