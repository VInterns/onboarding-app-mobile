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
    Alert,
    TouchableHighlight

} from 'react-native';

import FadeInView from './FadeInView'

//import centerImg from '../assets/voice.png'
import VoiceImg from '../assets/voice_1.png'

import Vletter from '../assets/inactive.png';
import VletterRed from '../assets/active.png';

import Oletter from '../assets/inactive_1.png';
import OletterRed from '../assets/active_1.png';

import Dletter from '../assets/inactive_2.png';
import DletterRed from '../assets/active_6.png';

import Aletter from '../assets/inactive_3.png';
import AletterRed from '../assets/active_7.png';

import Fletter from '../assets/inactive_4.png';
import FletterRed from '../assets/active_2.png';

import Nletter from '../assets/inactive_6.png';
import NletterRed from '../assets/active_4.png';

import Eletter from '../assets/inactive_7.png';
import EletterRed from '../assets/active_5.png';


export default class History1 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    constructor() {
        super();
        this.state = {
            V_show: false,
            O_show: false,
            D_show: false,
            A_show: false,
            F_show: false,
            O_show_2: false,
            N_show: false,
            E_show: false,

            VimageURL: Vletter,
            OimageURL: Oletter,
            DimageURL: Dletter,
            AimageURL: Aletter,
            FimageURL: Fletter,
            OimageURL_2: Oletter,
            NimageURL: Nletter,
            EimageURL: Eletter,

            showHideVoiceWord: false,
            counter: 0
        };
    }

    V_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.V_show == true) {
            this.setState({ V_show: false });
        }
        else {
            this.setState({ V_show: true });
        }
    };

    O_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.O_show == true) {
            this.setState({ O_show: false });
        }
        else {
            this.setState({ O_show: true });
        }
    };

    D_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.D_show == true) {
            this.setState({ D_show: false });
        }
        else {
            this.setState({ D_show: true });
        }
    };

    A_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.A_show == true) {
            this.setState({ A_show: false });
        }
        else {
            this.setState({ A_show: true });
        }
    };
    F_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.F_show == true) {
            this.setState({ F_show: false });
        }
        else {
            this.setState({ F_show: true });
        }
    };
    O_ShowHideComponent_2 = () => {// responsible for showing and hiding component
        if (this.state.O_show_2 == true) {
            this.setState({ O_show_2: false });
        }
        else {
            this.setState({ O_show_2: true });
        }
    };
    N_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.N_show == true) {
            this.setState({ N_show: false });
        }
        else {
            this.setState({ N_show: true });
        }
    };
    E_ShowHideComponent = () => {// responsible for showing and hiding component
        if (this.state.E_show == true) {
            this.setState({ E_show: false });
        }
        else {
            this.setState({ E_show: true });
        }
    };


    load_V_letter = () => {
        if (this.state.V_show == true) {
            this.setState({
                VimageURL: Vletter
            })
        } else {
            this.setState({

                VimageURL: VletterRed
            })
        }
    }

    load_O_letter = () => {
        if (this.state.O_show == true) {
            this.setState({
                OimageURL: Oletter
            })
        } else {
            this.setState({

                OimageURL: OletterRed
            })
        }
    }
    load_D_letter = () => {
        if (this.state.D_show == true) {
            this.setState({
                DimageURL: Dletter
            })
        } else {
            this.setState({

                DimageURL: DletterRed
            })
        }
    }
    load_A_letter = () => {
        if (this.state.A_show == true) {
            this.setState({
                AimageURL: Aletter
            })
        } else {
            this.setState({

                AimageURL: AletterRed
            })
        }
    }
    load_F_letter = () => {
        if (this.state.F_show == true) {
            this.setState({
                FimageURL: Fletter
            })
        } else {
            this.setState({

                FimageURL: FletterRed
            })
        }
    }

    load_O_letter_2 = () => {
        if (this.state.O_show_2 == true) {
            this.setState({
                OimageURL_2: Oletter
            })
        } else {
            this.setState({

                OimageURL_2: OletterRed
            })
        }
    }

    load_N_letter = () => {
        if (this.state.N_show == true) {
            this.setState({
                NimageURL: Nletter
            })
        } else {
            this.setState({

                NimageURL: NletterRed
            })
        }
    }

    load_E_letter = () => {
        if (this.state.E_show == true) {
            this.setState({
                EimageURL: Eletter
            })
        } else {
            this.setState({

                EimageURL: EletterRed
            })
        }
    }

    validatePressedLetters = () => {
        if (this.state.V_show == true && this.state.O_show == true && this.state.O_show_2 == false && this.state.D_show == false
            && this.state.A_show == false && this.state.F_show == false && this.state.N_show == false && this.state.E_show == false) {
            // Alert.alert("right letters")
            if (this.state.counter == 0) {
                this.setState({
                    showHideVoiceWord: true,
                    counter: this.state.counter + 1
                })

            }
            else {
                this.props.navigation.navigate("History2", {})
            }
        }
        else {
            this.setState({
                showHideVoiceWord: false
            })
            this.props.navigation.navigate("ErrorAlert", {});
        }
    }


    render() {
        const DEVICE_WIDTH = Dimensions.get('window').width;
        const DEVICE_HEIGHT = Dimensions.get('window').height;
        const { navigate } = this.props.navigation;
        const showVoiceWord =
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: DEVICE_HEIGHT * 0.027 }}>
                <Image source={VletterRed} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                <Image source={OletterRed} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginBottom: DEVICE_HEIGHT * 0.03 }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}> = Voice</Text>
                </View>
            </View>


        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>
                    <FadeInView>
                        <Text style={styles.Text}>can you guess which two letters will form {'\n'}
                            the following word "VOICE"?!{'\n'}
                        </Text>
                    </FadeInView>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flex: 1, marginTop: DEVICE_HEIGHT * 0.095 }}>

                    <TouchableOpacity style={{}} onPress={() => {
                        this.V_ShowHideComponent();
                        this.load_V_letter();
                    }} >
                        <Image source={this.state.VimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => {
                        this.O_ShowHideComponent();
                        this.load_O_letter();
                    }} >
                        <Image source={this.state.OimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => {
                        this.D_ShowHideComponent();
                        this.load_D_letter();
                    }} >
                        <Image source={this.state.DimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => {
                        this.A_ShowHideComponent();
                        this.load_A_letter();
                    }} >
                        <Image source={this.state.AimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => {
                        this.F_ShowHideComponent();
                        this.load_F_letter();
                    }}>
                        <Image source={this.state.FimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>


                    <TouchableOpacity style={{}} onPress={() => {
                        this.O_ShowHideComponent_2();
                        this.load_O_letter_2();
                    }}>
                        <Image source={this.state.OimageURL_2} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>


                    <TouchableOpacity style={{}} onPress={() => {
                        this.N_ShowHideComponent();
                        this.load_N_letter();
                    }} >
                        <Image source={this.state.NimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => {
                        this.E_ShowHideComponent();
                        this.load_E_letter();
                    }}>
                        <Image source={this.state.EimageURL} style={{ margin: -(DEVICE_WIDTH * 0.0356) }} />
                    </TouchableOpacity>

                </View>


                <Image source={VoiceImg} style={{ justifyContent: 'center', alignItems: 'center' }} />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.showHideVoiceWord ? showVoiceWord : null}
                </View>
                {/*  button view */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginBottom: DEVICE_HEIGHT * 0.03 }}>

                    <View style={styles.BackButtonView}>

                        <TouchableHighlight style={styles.button} onPress={() => {
                            console.log("here error")
                            navigate("History", {})
                        }
                        } >

                            <Text style={styles.ButtonText}>
                                BACK
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.NextButtonView}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.validatePressedLetters();
                        }}>
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

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

    Text: {//welcome to word style
        color: 'black',
        fontSize: DEVICE_WIDTH * 0.047,
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.1
    },

    button: { // button design
        /*   width: 70,
          height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    BackButtonView: { //wrapper for button 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    /*     ButtonimageStyle: {//button icon
            margin: -15
        }, */
});