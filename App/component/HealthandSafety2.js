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


export class HealthAndSafety2 extends Component {

  constructor() {
    super();
    this.state = {};
    // this.q1true = this.q1true.bind(this);
  }
  static navigationOptions = {
    //header styling
    header: null
  };

  checkAnswers = () => {
    debugger;
    // const { navigate } = this.props.navigation;
    // console.log('inside checkAnswers function', this.props.navigation.navigate);
    // console.log(question1 , question2 , question3 , question4);
    if (question1 && question2 && question3 && question4) {
      this.props.navigation.navigate("HealthAndSafety9");
    } else {
      // ()=> navigate("HealthAndSafety");
    }

  };



  props: {
    imageurl: any,
    moveYfirst: number,
    moveYsecond: number,
    moveXfirst: number,
    moveXsecond: number
  };


  render() {
    const DEVICE_WIDTH = Dimensions.get('window').width;
    const DEVICE_HEIGHT = Dimensions.get('window').height;

    console.log('DEVICE_WIDTH', DEVICE_WIDTH);
    console.log('DEVICE_HEIGHT', DEVICE_HEIGHT);

    console.log('DEVICE_WIDTH *', DEVICE_WIDTH * 0.07);
    console.log('DEVICE_HEIGHT *', DEVICE_HEIGHT * 0.80);

    return (
      <View style={styles.mainContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.textlarge}>Match
            <Text style={styles.text}> Match the image with the matching text :</Text>
          </Text>
        </View>

        <View style={styles.imagesContainer}>
          {/* images here  */}
          <Draggable style={styles.draggable} imageurl={require(drugs)} moveYfirst={DEVICE_HEIGHT * 0.67} moveYsecond={DEVICE_HEIGHT * 0.73} moveXfirst={DEVICE_WIDTH * 0.07} moveXsecond={DEVICE_WIDTH * 0.24} answerId={1} qtrue={q1true} />
          <Draggable style={styles.draggable} imageurl={require(nomobile)} moveYfirst={DEVICE_HEIGHT * 0.37} moveYsecond={DEVICE_HEIGHT * 0.46} moveXfirst={DEVICE_WIDTH * 0.07} moveXsecond={DEVICE_WIDTH * 0.24} answerId={2} qtrue={q2true} />
          <Draggable style={styles.draggable} imageurl={require(speedlimit)} moveYfirst={DEVICE_HEIGHT * 0.534} moveYsecond={DEVICE_HEIGHT * 0.598} moveXfirst={DEVICE_WIDTH * 0.07} moveXsecond={DEVICE_WIDTH * 0.24} answerId={3} qtrue={q3true} />
          <Draggable style={styles.draggable} imageurl={require(streetwork)} moveYfirst={DEVICE_HEIGHT * 0.80} moveYsecond={DEVICE_HEIGHT * 0.90} moveXfirst={DEVICE_WIDTH * 0.07} moveXsecond={DEVICE_WIDTH * 0.24} answerId={4} qtrue={q4true} />
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


        <View style={styles.NextButtonView}>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigate("History1")} > */}
          <TouchableOpacity style={styles.button} onPress={
            () => { console.log('inside Back button'); this.props.navigate("HealthAndSafety1"), {}; }} >
            <Text style={styles.ButtonText}>
              BACK
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.checkAnswers();
          }} >
            <Text style={styles.ButtonText}>
              NEXT
            </Text>
          </TouchableOpacity>
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
    paddingLeft: DEVICE_WIDTH * 0.08,
    paddingRight: DEVICE_WIDTH * 0.08,
    // backgroundColor: '#EE82EE',
  },
  dropZone: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#cccccc",
    borderRadius: CIRCLE_RADIUS,
  },
  titleContainer: {
    flexDirection: 'row',
    // backgroundColor: '#00BFFF',
    flex: 2.5,
    paddingTop: DEVICE_HEIGHT * 0.08,
    flexWrap: 'wrap',
  },
  textlarge: {
    fontSize: 28,
    // fontWeight: "bold", 
    fontFamily: "VodafoneBold",
    color: "#e60000",
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "VodafoneRg",
    color: "#4c464e",
    flexWrap: 'wrap',
  },
  imagesContainer: {
    // backgroundColor: 'yellow',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  answersContainer: {
    // backgroundColor: 'orange',
    flexDirection: 'column',
    flex: 8,
    zIndex: -1,
  },
  questionContainer: {
    flexDirection: 'row',
    // borderWidth: 3,
    flex: 1,
  },
  questionTextContainer: {
    flex: 3,
    marginLeft: 10,
  },
  questionTextLarge: {
    flexWrap: 'wrap',
    // backgroundColor: '#C0C0C0',
    fontFamily: "VodafoneBold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    // letterSpacing: 0,
    color: "#4b464d",
  },
  questionTextSmall: {
    flexWrap: 'wrap',
    fontFamily: "VodafoneRg",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 16,
    color: "#4b464d"
  },
  draggable: {
    zIndex: 100,
    position: 'absolute',
  },
  button: { // button design
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  NextButtonView: { //wrapper for button 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: DEVICE_HEIGHT * 0.03,
    marginRight: DEVICE_WIDTH * 0.095,
    marginLeft: DEVICE_WIDTH * 0.095,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  ButtonText: { // text inside button
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },




});