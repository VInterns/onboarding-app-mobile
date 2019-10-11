import React, { Component } from "react";
import Draggable from "./Draggable";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';


// import { centerImg } from '../assets/undrawConnectingTeams8Ntu.png';
const centerImg = '../assets/group10.png';

let question1 : Boolean = false;
let question2 : Boolean = false;
let question3 : Boolean = false;


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
    moveY: number,
    moveX: number,
  };

  render() {
    debugger;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textlarge}>Match  
            <Text style={styles.text}> Match the image with the matching text :</Text>
          </Text>
        </View>
        <View style={styles.imagesContainer}>
          {/* images here  */}
          <View style={styles.dropZone}>
            {/* <Text style={styles.text}>Drop them here!</Text> */}
          </View>
          <View style={styles.dropZone}>
            {/* <Text style={styles.text}>Drop them here!</Text> */}
          </View>
          <View style={styles.dropZone}>
            {/* <Text style={styles.text}>Drop them here!</Text> */}
          </View>
          <View style={styles.dropZone}>
            {/* <Text style={styles.text}>Drop them here!</Text> */}
          </View>
        </View>
        <View style={styles.answersContainer}>
          {/* answers here */}
          

          {/* <Draggable imageurl={centerImg} moveY={120} moveX={40} answerId={1} qtrue={q1true}/> */}
          {/* <Draggable imageurl={centerImg} moveY={140} moveX={80} answerId={2} qtrue={q2true}/> */}
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
    padding:36,
    backgroundColor:'#EE82EE',
        
  },
  ballContainer: {
    // height:200
  },
  row: {
    // flexDirection: "row",
  },  
  dropZone: {
    // height: 200,
    backgroundColor: "#00334d",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
  titleContainer:{
    flexDirection: 'row',
    backgroundColor: '#00BFFF',
    flex: 2,
    paddingTop: DEVICE_HEIGHT * 0.03,
    flexWrap: 'wrap',
  },
  textlarge:{
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0,
    color: "#e60000",
    flexWrap: 'wrap',
  },
  text:{
    fontSize: 21,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0,
    color: "#4c464e",
    flexWrap: 'wrap',
  },
  imagesContainer:{
    backgroundColor: 'yellow',
    flex :2,
    flexDirection: 'row',
    justifyContent: 'space-between' 

    // padding:10,
  },
  answersContainer:{
    backgroundColor: 'orange',
    flex:6,
    padding:36
  },

  

  
});