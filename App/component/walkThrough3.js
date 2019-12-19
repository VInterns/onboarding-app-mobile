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
    Animated,
    BackHandler


} from 'react-native';

import FadeInView from './FadeInView'
import backgroundImg from '../assets/WalkThrough1.png';
import rocket from '../assets/rocket.png'
import readyButton from '../assets/group3.png'

export default class walkThrough3 extends Component {

    props: {
        tryNavigate: (nextScreen: string) => void,
        userId: string,
        sectionNumber: number
    };

    static navigationOptions = {//header styling
        header: null
    };
    constructor() {
        super();
        this.state = {
            show: true,
        };
        this.moveAnimation = new Animated.ValueXY({ x: 0, y: 0 })//create new animated object
    }
    _moveRocket = () => { //responsible for moving rocket
        debugger;
        Animated.timing(this.moveAnimation, {
            toValue: { x: 350, y: -200 },//new coordinates
            delay: 1000, //start moving rocket after certain delay 
            duration: 2000
        }).start()//start animation

    }
    componentDidMount() {
        debugger;
        // console.log("this state", this.state);
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    }


    ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.show == true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    }
    handleBackButton() {
        return true;
    }

    // static mapStateToProps(state: State) {
    //     return {
    //         lastScreen: state.authorization.lastScreen
    //     };
    // }

    // static mapDispatchToProps(dispatch: Dispatch) {
    //     return bindActionCreators({ tryNavigate }, dispatch);
    // }

    tryNavigate = () => {
        if (this.props.sectionNumber < 3) {
            this.props.tryNavigate("video1", this.props.userId, 3);
        }
        // props.navigation.navigate("video1")
    };


    render() {

        // const { navigate } = this.props.navigation;

        const show =

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                {/*header text view*/}
                <View style={styles.TextContainer}>
                    <View style={styles.redView}>
                        <FadeInView>
                            <Text style={styles.RedText}>The Future is</Text>
                        </FadeInView>
                    </View>

                    <View style={styles.blackView}>
                        <FadeInView>
                            <Text style={styles.RedText}>exciting.</Text>
                        </FadeInView>
                    </View>
                </View>


                <ImageBackground source={backgroundImg} style={styles.wallpaper}>
                    <FadeInView>
                        <Image source={rocket} style={{ justifyContent: 'center', alignItems: 'center', marginTop: DEVICE_HEIGHT * 0.038, marginRight: DEVICE_WIDTH, }} />
                    </FadeInView>
                </ImageBackground >


                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.ShowHideComponent(); //hide component except the rocket
                        this._moveRocket(); //then move rocket
                        // setTimeout(function () {//finally navigate after certain delay
                        //     navigate("Video1", {})
                        // }, 3000)
                        setTimeout(this.tryNavigate, 3000);
                    }} >
                        <Image source={readyButton} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>
                </View>

            </View>

        const hide =
            <Animated.View style={this.moveAnimation.getLayout()}>
                <Image source={rocket} style={{ justifyContent: 'center', alignItems: 'center' }} />
            </Animated.View>

        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {this.state.show ? show : hide}
            </View>

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    wallpaper: { //background style
        resizeMode: 'center',
        marginTop: DEVICE_WIDTH * 0.03,
        height: DEVICE_WIDTH * 0.93,
        width: DEVICE_WIDTH * 0.93,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: DEVICE_WIDTH
    },
    RedText: {//red text style
        fontFamily: "VodafoneRg",
        fontSize: 37,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 44,
        letterSpacing: 0,
        color: "#e60000",

    },

    blackText: {//black text style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.08,
        fontWeight: 'bold',
    },

    redView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    TextContainer: {/* textwrapper */
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.1,
        marginRight: (DEVICE_WIDTH / 2) - (DEVICE_WIDTH * 0.09),

    },

    blackView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    button: { // button design
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'red',
    },
    ButtonimageStyle: {//button icon
        //margin: 2,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },
    buttonView: { //wrapper for button 
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: DEVICE_HEIGHT * 0.05
    },
});