import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  Animated
} from "react-native";

import FadeInView from "./FadeInView";
import backgroundImg from "../assets/group.png";
import mobile from "../assets/group4.png";

export default class walkTrough2 extends Component {
  static navigationOptions = {
    //header styling
    title: "walkThrough 2",
    fontWeight: "bold"
  };

  render() {
    console.log("HI ");
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ImageBackground source={backgroundImg} style={styles.wallpaper}>
          {/*background*/}
        </ImageBackground>

        <FadeInView>
          <Image source={mobile} style={{ marginLeft: 10 }} />
          {/* centered logo*/}
        </FadeInView>

        {/*header text view*/}
        <View style={styles.TextContainer}>
          <View style={styles.redView}>
            <FadeInView>
              <Text style={styles.RedText}>This app will guide you to </Text>
            </FadeInView>
          </View>

          <View style={styles.blackView}>
            <FadeInView>
              <Text style={styles.blackText}>know more about Vodafone</Text>
            </FadeInView>
          </View>
        </View>

        {/*  button view */}
        <KeyboardAvoidingView behavior="padding" style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("walkThrough3", {})}
          >
            <Image
              source={require("../assets/arrow.png")}
              style={styles.ButtonimageStyle}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  wallpaper: {
    //background style
    resizeMode: "cover",
    height: 340,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    //right: 220
    left: DEVICE_WIDTH - (DEVICE_WIDTH + DEVICE_WIDTH / 2)
  },
  RedText: {
    //welcome to word style
    // alignItems: 'center',
    color: "red",
    fontSize: 25,
    fontWeight: "bold"
    //position: 'absolute',
    // left: 40,
    //  top: 50
  },

  blackText: {
    //login word text style
    //textAlign: 'center',
    color: "black",
    // fontWeight: 'bold',
    fontSize: 25
    /*    position: 'absolute',
           left: 40 */
  },

  redView: {
    alignItems: "center",
    justifyContent: "center"
  },

  TextContainer: {
    /* Welcome back and vodabuddy wrapper */
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40
  },

  blackView: {
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    // button design
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderColor: "red",
    transform: [
      //to create rhombus shape by rotating the square shape
      { rotate: "45deg" }
    ],
    borderRadius: 10
  },
  ButtonimageStyle: {
    //button icon
    margin: 13,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    transform: [
      //to adjust the arrow inside the button
      { rotate: "315deg" }
    ]
  },
  buttonView: {
    //wrapper for button

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30
  }
});
