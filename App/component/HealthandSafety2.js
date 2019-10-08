import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Draggable from "./Draggable";


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

  props: {
    imageurl: any,
    moveY: number,
    moveX: number,
  };

  render() {
    debugger;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          {/* <Text style={styles.text}>Drop them here!</Text> */}
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable imageurl={centerImg} moveY={120} moveX={40} answerId={1} qtrue={q1true}/>
          <Draggable imageurl={centerImg} moveY={140} moveX={80} answerId={2} qtrue={q2true}/>
        </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  row: {
    flexDirection: "row",
    backgroundColor: "yellow",
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});