
import React, { Component } from 'react';



import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Alert

} from 'react-native';

import FadeInView from './FadeInView'

import ThumbsUp from '../assets/group2_1.png'

class GreatJob2 extends Component {

    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.navigate("History9")
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
    static navigationOptions = {
        header: null
    };
    render() {
        //const { navigate } = this.props.navigation;
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
                        Vodafone India has
                    </Text>

                    <Text style={{ color: 'black', fontSize: DEVICE_WIDTH * 0.050, fontWeight: 'bold' }}>
                        the most subscribers
                    </Text>
                </View>

                {/*                 <KeyboardAvoidingView behavior="padding" style={styles.ButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History4", {})} >
                        <Text style={styles.ButtonText}>
                            Done
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView> */}


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
export default GreatJob2;