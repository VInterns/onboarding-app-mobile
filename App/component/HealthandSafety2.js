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

const q1 : Boolean = false;
const q2 : Boolean = false;
const q3 : Boolean = false;


export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  props: {
    imageurl: any,
    moveY: number,
    moveX: number,
    dropAreaCallback:()=>Boolean,
    answer:Boolean
  };

  
  componentWillMount() {
    this._val = { x: 0, y: 0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y
        })
        this.state.pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        console.log(gesture);
        if (this.isDropArea(gesture, props.answerId)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000
          }).start(() => {

            //I WANT TO CHANGE Q1 TO TRUE


            // this.setState({
            //   showDraggable: false
            // })
          }
          );
        }
      }


    });
  }

  isDropArea(gesture, answerId) {

    if(gesture.moveY < this.props.moveY & gesture.moveX < this.props.moveX)
    {
      //set state answer = true
      q3

      //this.dropAreaCallback();
      return true
    }else{
      return false;
    }
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
          />
        </View>
      );
    }
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