import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  PanResponder,
  Animated,
  Text,
} from 'react-native';

import FadeInView from './FadeInView';

import centerImg from '../assets/drugs.png';

export default class Draggable extends Component {
  constructor() {
    super();
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  props: {
    imageurl: any,
  };

  componentWillMount() {
    debugger;
    // Add a listener for the delta value change
    this._val = { x: 10, y: 100 }
    this.state.pan.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        console.log('release');
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000
          }).start(() =>
            this.setState({
              showDraggable: false
            }),
            console.log('dragable false')
          );
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }

      }

      // adjusting delta value
    });

    // this.state.pan.setValue({ x:100, y:200})
  }
  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  // getDerivedStateFromProps(){

  // }

  render() {
    debugger;
    const image = this.props.imageurl;
    console.log(image);
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.circle,]}
      >

        {/* <Image source={centerImg} /> */}
      </Animated.View>
    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,

    // ImageBackground: require(props.imageUri)
  },
  Container: {
    backgroundColor: 'red'
  }
});