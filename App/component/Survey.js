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
    TextInput,

} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card } from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Survey extends Component {

    static navigationOptions = {//header styling
        header: null
    };
    ratingCompleted(rating) {
        console.log(`Rating is: ${rating}`);
    }

    render() {
        const { navigate } = this.props.navigation;
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        return (

            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Card title="Survey Questions" containerStyle={styles.card} titleStyle={styles.titleStyle}>
                    <Text style={styles.text}>
                        How useful were the journey?
                    </Text>

                    <View style={styles.StarContainer}>
                        <AirbnbRating showRating={false} selectedColor='#F1E900' starContainerStyle={styles.container} />
                    </View>

                    <Text style={styles.text}>
                        How engaging was the journey?
                    </Text>

                    <View style={styles.StarContainer}>
                        <AirbnbRating showRating={false} selectedColor='#F1E900' starContainerStyle={styles.container} />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Please share with us any comment
                        </Text>

                        <Text style={styles.text}>
                            that would enhance the experience.
                        </Text>
                    </View>

                    <View style={styles.textAreaContainer}>
                        <TextInput multiline={true} numberOfLines={10} placeholder="Comment...." placeholderTextColor="grey" style={styles.textArea} />
                    </View>

                    <View style={styles.ButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("Survey")} >
                            <Text style={styles.ButtonText}>
                                Done
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Card>

            </View >

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    textAreaContainer: {
        marginTop: DEVICE_HEIGHT * (10 / DEVICE_HEIGHT),
        borderColor: 'grey',
        borderWidth: 0.5,
        padding: 5
    },

    textArea: {
        width: DEVICE_WIDTH * (270 / DEVICE_WIDTH),
        height: DEVICE_HEIGHT * (150 / DEVICE_HEIGHT),
        justifyContent: "flex-start"
    },
    textContainer: {
        marginTop: DEVICE_HEIGHT * (12 / DEVICE_HEIGHT)
    },
    StarContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //backgroundColor: 'yellow'
    },
    container: {
        paddingTop: (10 / DEVICE_WIDTH) * DEVICE_WIDTH
    },
    card: {
        width: '90%',
        //backgroundColor:'yellow'
    },
    titleStyle: {
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * (24 / DEVICE_WIDTH),
        color: 'red'
    },
    text: {
        fontSize: (20 / DEVICE_WIDTH) * DEVICE_WIDTH,
        fontWeight: "300"
    },


    button: { // button design
        width: DEVICE_WIDTH * (130 / DEVICE_WIDTH),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },

    ButtonView: { //wrapper for button 

        marginTop: DEVICE_HEIGHT * (12 / DEVICE_HEIGHT),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: { // text inside button
        color: 'red',
        fontWeight: 'bold',
        fontSize: (20 / DEVICE_WIDTH) * DEVICE_WIDTH,
    },
});