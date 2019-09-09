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

import centerImg from '../assets/data.png'
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


export default class History3 extends Component {

    static navigationOptions = {//header styling
        header: null
    };

    constructor() {
        super();
        this.state = {
            //  V_show: false,
            //  O_show: false,
            D_show: false,
            A_show: false,
            // F_show: false,
            //O_show_2: false,
            //N_show: false,
            //E_show: false,

            //  VimageURL: Vletter,
            // OimageURL: Oletter,
            DimageURL: Dletter,
            AimageURL: Aletter,
            //  FimageURL: Fletter,
            // OimageURL_2: Oletter,
            //NimageURL: Nletter,
            //EimageURL: Eletter,

            showHideVoiceWord: false,
            counter: 0
        };
    }

    /*  V_ShowHideComponent = () => {// responsible for showing and hiding component
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
     }; */

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
    /*    F_ShowHideComponent = () => {// responsible for showing and hiding component
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
    */

    /* load_V_letter = () => {
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
    } */
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
    /*    load_F_letter = () => {
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
    */
    validatePressedLetters = () => {
        if (this.state.D_show == true
            && this.state.A_show == true) {
            // Alert.alert("right letters")
            if (this.state.counter == 0) {
                this.setState({
                    showHideVoiceWord: true,
                    counter: this.state.counter + 1
                })
            }
            else {
                this.props.navigation.navigate("GreatJob", {})
            }
        }
        else {
            this.setState({
                showHideVoiceWord: false
            })
            this.props.navigation.navigate("ErrorAlert3", {});
        }
    }



    render() {
        const { navigate } = this.props.navigation;
        const showVoiceWord =
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={DletterRed} style={{ flexBasis: 50, marginTop: 10 }} />{/* centered mobile logo*/}
                <Image source={AletterRed} style={{ flexBasis: 50, marginTop: 10 }} />{/* centered mobile logo*/}
        
                <View style={{ justifyContent: 'space-around', alignItems: 'center', marginBottom: 15 }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>
                        = Data
                    </Text>
                </View>
            </View>


        return (

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Image source={centerImg} />{/* centered mobile logo*/}
                {/*              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 350 }}>
                    <Text style={{ color: 'red', fontSize: 28, fontWeight: 'bold' }}>
                        Phone
                    </Text>
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', position: 'absolute', top: 110, left: 10 }}>

                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} disabled={true}>
                        <Image source={VletterRed} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} disabled={true}>
                        <Image source={OletterRed} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} onPress={() => {
                        this.D_ShowHideComponent();
                        this.load_D_letter();
                    }} >
                        <Image source={this.state.DimageURL} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} onPress={() => {
                        this.A_ShowHideComponent();
                        this.load_A_letter();
                    }} >
                        <Image source={this.state.AimageURL} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} disabled={true}>
                        <Image source={FletterRed} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>


                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} disabled={true}>
                        <Image source={OletterRed} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>



                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} disabled={true}>
                        <Image source={NletterRed} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>



                    <TouchableOpacity style={{ width: 50, height: 50, marginLeft: 0, marginRight: 0, flexBasis: 40 }} disabled={true}>
                        <Image source={EletterRed} style={styles.ButtonimageStyle} />
                    </TouchableOpacity>


                </View>

                {/*vodafone group history text view*/}
                <View style={styles.TextContainer}>

                    <View style={styles.TextView}>
                        <FadeInView>
                            <Text style={styles.Text}>can you guess which two letters will form </Text>
                        </FadeInView>
                    </View>

                    <View style={styles.TextView}>
                        <FadeInView>
                            <Text style={styles.Text}>the following word "Data" ?!</Text>
                        </FadeInView>
                    </View>

                </View>

                {/*  button view */}
                <KeyboardAvoidingView behavior="padding" style={styles.NextButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        //navigate("History1", {});
                        this.validatePressedLetters();

                    }}>
                        <Text style={styles.ButtonText}>
                            NEXT
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" style={styles.BackButtonView}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate("History2", {})} >
                        <Text style={styles.ButtonText}>
                            BACK
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.showHideVoiceWord ? showVoiceWord : null}
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
        fontSize: 20,
        marginTop: 5
        //  fontWeight: 'bold'

    },


    TextView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        left: 20
    },

    redView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    button: { // button design
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        right: 30,
        //   backgroundColor:'#DDDD',

    },
    BackButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        left: 30,
        //  backgroundColor:'#DDDD',

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    ButtonimageStyle: {//button icon
        margin: 13,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
        flexBasis: 40
    },
});