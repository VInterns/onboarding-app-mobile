
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
} from 'react-native';

import ThumbsUp from '../assets/group2_1.png'

class HealthAndSafety9 extends Component {

    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate("HealthAndSafety3")
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
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
                    <Image source={ThumbsUp} />
                </View>

                <View style={{ marginTop: DEVICE_HEIGHT * 0.027, paddingBottom: DEVICE_HEIGHT * 0.027 }}>
                    <Text style={{ color: 'red', fontSize: DEVICE_WIDTH * 0.0629, fontWeight: 'bold' }}>
                        Great Job !
                    </Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: "VodafoneBold", backgroundColor: 'yellow' }}>
                    <Text style={{ color: 'black', fontSize: DEVICE_WIDTH * 0.050, lineHeight:25 }}>
                        These rules should be abided with and for your safety
                    </Text>
                </View>
            </View>
        );
    }
}

export default HealthAndSafety9;