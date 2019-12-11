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
    moveYfirst: number,
    moveYsecond: number,
    moveXfirst: number,
    moveXsecond: number,
    dropAreaCallback:()=>Boolean,
    answer:Boolean,
  };

  
  componentWillMount() {
    this._val = { x: 0, y: 0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      // onPanResponderTerminationRequest: (evt, gestureState) => true,
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
        console.log('inside Terminate -- props answerId is', this.props.answerId);
        // if (this.isDropArea(gesture, this.props.answerId)) {
        this.isDropArea(gesture, this.props.answerId);

          console.log('inside if condition');
          //   //I WANT TO CHANGE Q1 TO TRUE



          // Animated.timing(this.state.opacity, {
          //   toValue: 0,
          //   duration: 1000
          // }).start(() => {

          
          //   this.setState({
          //     showDraggable: false
          //   })
          // }
          // );
        
      }
    });
  }

  isDropArea(gesture, answerId) {
    console.log('GUESTURE IS ---->',gesture)

    console.log('inside isDropArea',gesture,gesture.moveYfirst ,this.props.moveYfirst,gesture.moveYfirst >= this.props.moveYfirst);

    if(gesture.moveY >= this.props.moveYfirst && gesture.moveY <= this.props.moveYsecond && gesture.moveX >= this.props.moveXfirst && gesture.moveX <= this.props.moveXsecond)
    {
      console.log('inside isDropArea 2');
      //set state answer = true
      if (answerId == 1) {
        console.log('inside answer id -> 1');
        this.props.qtrue();
      }if (answerId == 2) {
        this.props.qtrue();
      }if (answerId == 3) {
        this.props.qtrue();
      }if (answerId == 4) {
        this.props.qtrue();
      }

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
            style={[panStyle, styles.circle, { opacity: this.state.opacity }]}>
                    <Image source={this.props.imageurl} />
            </Animated.View>
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