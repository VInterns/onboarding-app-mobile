import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Draggable from "./HealthandSafety2";


// import { centerImg } from '../assets/undrawConnectingTeams8Ntu.png';
const centerImg = '../assets/group10.png';

export default class Screen extends Component {

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
          <Draggable imageurl={centerImg} moveY={120} moveX={40} dropAreaCallback={()=>{
            this
          }}/>
          <Draggable imageurl={centerImg} moveY={140} moveX={80}/>
        
         
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
    flexDirection: "row"
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