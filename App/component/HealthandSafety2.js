import React, { Component } from "react";
import Draggable from "./Draggable";

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';


// import { drgus } from '../assets/drugs.png';
const drugs = '../assets/drugs.png';
const speedlimit = '../assets/speedlimit.png';
const streetwork = '../assets/streetwork.png';
const nomobile = '../assets/nomobile.png';


let question1: Boolean = false;
let question2: Boolean = false;
let question3: Boolean = false;
let question4: Boolean = false;



function q1true() {
  question1 = true;
  console.log('q1 now is = true', question1);
}
function q2true() {
  question2 = true;
  console.log('q2 now is = true', question2);
}
function q3true() {
  question3 = true;
  console.log('q3 now is = true', question3);

}
function q4true() {
  question4 = true;
  console.log('q4 now is = true', question4);
}

export default class HealthandSafety2 extends Component {

  constructor() {
    super();
    this.state = {};
    // this.q1true = this.q1true.bind(this);
  }
  static navigationOptions = {
    //header styling
    header: null
  };

  props: {
    imageurl: any,
    moveYfirst: number,
    moveYsecond: number,
    moveXfirst: number,
    moveXsecond: number
  };

  render() {
    return (
      <View style={styles.mainContainer}>


        

        <View style={styles.titleContainer}>
          <Text style={styles.textlarge}>Match
            <Text style={styles.text}> Match the image with the matching text :</Text>
          </Text>
        </View>

        <View style={styles.imagesContainer}>
          {/* images here  */}
          <Draggable style={styles.draggable} imageurl={require(drugs)} moveYfirst={360} moveYsecond={390} moveXfirst={30} moveXsecond={60} answerId={1} qtrue={q1true} />
          <Draggable style={styles.draggable} imageurl={require(nomobile)} moveYfirst={470} moveYsecond={530} moveXfirst={30} moveXsecond={60} answerId={2} qtrue={q2true} />
          <Draggable style={styles.draggable} imageurl={require(speedlimit)} moveYfirst={590} moveYsecond={660} moveXfirst={30} moveXsecond={60} answerId={3} qtrue={q3true} />
          <Draggable style={styles.draggable} imageurl={require(streetwork)} moveYfirst={740} moveYsecond={820} moveXfirst={30} moveXsecond={60} answerId={4} qtrue={q4true} />
        </View>
        
        <View style={styles.answersContainer}>
          {/* answers here */}
          <View style={styles.questionContainer}>
            <View style={styles.dropZone}></View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionTextLarge}>WE ALWAYS drive safely and legally: <Text style={styles.questionTextSmall}>we never use a handheld mobile device when driving</Text></Text>
            </View>
          </View>
          <View style={styles.questionContainer}>
            <View style={styles.dropZone}></View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionTextLarge}>WE ALWAYS drive safely and legally: <Text style={styles.questionTextSmall}>we always obey the speed limit</Text></Text>
            </View>
          </View>
          <View style={styles.questionContainer}>
            <View style={styles.dropZone}></View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionTextLarge}>WE NEVER <Text style={styles.questionTextSmall}>work under the influence of alcohol or drugs</Text></Text>
            </View>
          </View>
          <View style={styles.questionContainer}>
            <View style={styles.dropZone}></View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionTextLarge}>NEVER <Text style={styles.questionTextSmall}>undertake any street or underground work activities unless competent to do so</Text></Text>
            </View>
          </View>
        </View>

        
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: DEVICE_WIDTH * 0.03,
    backgroundColor: '#EE82EE',
    // zIndex: 1,
  },
  dropZone: {
    // flex: 1,
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#cccccc",
    borderRadius: CIRCLE_RADIUS,
    // zIndex: 1,
    // position:'absolute',

    // position: 'absolute'
    // backgroundColor: '#F4A460',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#00BFFF',
    flex: 2.5,
    paddingTop: DEVICE_HEIGHT * 0.03,
    flexWrap: 'wrap',
  },
  textlarge: {
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0,
    color: "#e60000",
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0,
    color: "#4c464e",
    flexWrap: 'wrap',
  },
  imagesContainer: {
    backgroundColor: 'yellow',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // zIndex: 2,
    // position: 'relative',
    // position:'absolute',
    // left:DEVICE_WIDTH * 0.095,
    // top: DEVICE_HEIGHT * 0.13
    // padding:10,
  },
  answersContainer: {
    backgroundColor: 'orange',
    flexDirection: 'column',
    flex: 8,
    zIndex: -1,
    // backgroundColor: 'transparent',
    // padding: 36
  },
  questionContainer: {
    flexDirection: 'row',
    // padding: DEVICE_WIDTH * 0.02,
    // backgroundColor: '#A52A2A',
    borderWidth: 3,
    flex: 1,
    // zIndex: 1,
  },
  questionTextContainer: {
    flex: 3,
    marginLeft: 10,
    // zIndex: 1,
    // position: 'absolute',
  },
  questionTextLarge: {
    flexWrap: 'wrap',
    backgroundColor: '#C0C0C0',
    // fontFamily: "VodafoneRg",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    // lineHeight: 20,
    letterSpacing: 0,
    color: "#4b464d",
  },
  questionTextSmall: {
    flexWrap: 'wrap',
    // fontFamily: "VodafoneRg",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: "#4b464d"
  },
  draggable: {
    zIndex: 100,
    position: 'absolute',
    // marginBottom: DEVICE_HEIGHT * 0.9,
    // top: '20%',
    // left:200

  }




});