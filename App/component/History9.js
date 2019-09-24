import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Alert

} from 'react-native';

import FadeInView from './FadeInView';
import styles from './styles/history9.styles';
import centerImg from '../assets/subscibersRank.png';

export default class History8 extends Component {

    static navigationOptions = {//header styling
        // title: 'History9',
        // fontWeight: 'bold'
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    <FadeInView>
                    {/*     <Text style={styles.Text}>
                            Can you guess which of the following {'\n'}
                            Vodafone operators have the most {'\n'}
                            subscribers? </Text> */}
                            <Text style={styles.Text}>
                                Vodafone now has more than <Text style={styles.RedText}>520+</Text>{'\n'}
                                <Text style={styles.RedText}>million subscribers</Text> worldwide and {'\n'}
                                <Text style={styles.RedText}>110+ Employees</Text> 
                            </Text>
                    </FadeInView>
                </View>

                <Image source={centerImg} style={{ marginTop: DEVICE_HEIGHT * 0.055 }} />{/* centered mobile logo*/}
                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableOpacity style={styles.button} onPress={() => navigate("History7", {})} >
                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("History10", {})}>
                            <Text style={styles.ButtonText}>
                                NEXT
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View >


        );
    }
}
