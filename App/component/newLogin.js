import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Text,
    TextInput
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Spinner } from "native-base";

import UserInput from "./UserInput";

import backgroundImg from "../assets/loginBackGround.png";
import logoImg from "../assets/logoIconColor.png"
import PPL from "../assets/ppl.png"
export class Login extends Component {
    constructor() {
        super();
        //  _onLoginPressed=this._onLoginPressed.bind(this);
        this.state = {
            email: "",
            password: ""
        };
    }
    props: {
        errorMessage: string,
        loading: boolean,
        tryLogin: (user: UserLoginModel) => void,
        isLoggedIn: boolean,
    };

    static navigationOptions = {
        header: null
    };

    handleEmail = text => {
        this.setState({ email: text });
    };
    s
    handlePassword = text => {
        this.setState({ password: text });
    };
    render() {
        const { navigate } = this.props.navigation;
        const loadingSpinner = this.props.loading ? (
            <Spinner color="red" />
        ) : (
                <Text bold red margin20>
                    {" "}
                    {this.props.errorMessage}
                </Text>
            );

        return (
            < View style={{ flex: 1 }}>
                {/* <ImageBackground source={backgroundImg} style={styles.wallpaper}> */}
                <View style={styles.blankArea}></View>
                <Image source={logoImg} style={styles.Logo} />

                <View style={styles.welcomTextView}>
                    <Text style={styles.HelloText}>Hello!</Text>
                    <Text style={styles.WelcomeText}>Welcome to VodaBuddy, Lets start your journey as a Vodafoner</Text>

                </View>
                <View style={styles.userNameTextInputView}>
                    <TextInput
                        disabled={this.props.loading}
                        placeholder={"E-mail"}
                        onChangeText={this.handleEmail}
                    // style={{ height: 10, backgroundColor: "red" }}
                    />
                    {/* <Text style={styles.Underline}>____________________________________________</Text> */}
                </View>

                <View style={styles.PasswordTextInputView}>
                    <TextInput
                        placeholder={"Password"}
                        onChangeText={this.handlePassword}
                        secureTextEntry={true}
                        disabled={this.props.loading}
                    />
                    {/* <Text style={styles.Underline}>____________________________________________</Text> */}
                </View>
                {loadingSpinner}

                <View style={styles.ButtonsView}>
                    <TouchableOpacity
                        disabled={this.props.loading}
                        style={styles.button}
                        onPress={() => this.props.tryLogin(this.state)}
                    >
                        <Text style={styles.ButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.blankEndArea}></View> */}
                <Image source={PPL} style={styles.PPL} />

                {/* </ImageBackground> */}
            </ View>
        );
    }

}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;


const styles = StyleSheet.create({
    wallpaper: {
        //background style
        height: "100%",
        width: "100%"
    },
    blankArea: {
        flex: 1.3,
    },
    Logo:
    {
        alignSelf: "center",
        flex: 2,
        marginBottom: 20
    },
    welcomTextView:
    {
        flex: 3,
        alignContent: "center",
        alignItems: "center",
    },
    HelloText:
    {
        fontWeight: "bold",
        fontSize: 34,
        fontFamily: "VodafoneBold",
        paddingBottom: 10,
        color: "#5B5E66"
    },
    WelcomeText:
    {
        textAlign: 'center',
        fontFamily: "VodafoneRg",
        fontSize: 15,
        justifyContent: "space-around",
        color: "#858891"
    },
    userNameTextInputView:
    {
        flex: 0.6,
        marginLeft: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#858891",
        // borderTopWidth: 1,
        width: DEVICE_WIDTH - 80,
        marginBottom: 30,
        marginTop: -30
    },
    PasswordTextInputView:
    {
        flex: 0.6,
        marginLeft: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#858891",
        width: DEVICE_WIDTH - 80,

    },
    Underline:
    {
        color: "#858891",
        marginTop: -6
    },
    ButtonsView:
    {
        flex: 2,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    button: {
        width: DEVICE_WIDTH * 0.75,
        height: 40,
        backgroundColor: "#E00000",
        borderColor: "#E00000",
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 1
    },
    ButtonText: {
        color: "white",
        fontSize: 18,
    },
    blankEndArea: {
        flex: 1
    },
    PPL:
    {
        flex: 3,
        width: "100%"
    }
});