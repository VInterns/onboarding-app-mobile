
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

import confused from '../assets/group2_1.png'

class GreatJob extends Component {
    static navigationOptions = {
        title: 'great job',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={{ position: 'absolute', top: 80 }}>
                    <Image source={confused} />{/* centered mobile logo*/}
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: 'red', fontSize: 26, fontWeight: 'bold' }}>
                        Great Job !
                    </Text>
                </View>


                <View style={{ position: 'absolute', top: 350 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{ color: 'black', fontSize: 21 }}>
                        Vodafone stands for 
                    </Text>

                    <Text style={{ color: 'black', fontSize: 21 ,fontWeight:'bold'}}>
                        Voice, Date and Phone
                    </Text>
                </View>

                <KeyboardAvoidingView behavior="padding" style={styles.ButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History4", {})} >
                        <Text style={styles.ButtonText}>
                            Done
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>


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
        backgroundColor:'red',
        borderRadius :10
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