import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Draggable from "./HealthandSafety2";


// import { centerImg } from '../assets/undrawConnectingTeams8Ntu.png';
const centerImg = '../assets/group10.png';

export default class Screen extends Component {

  props: {
    imageurl: any,
  };

  render() {
    debugger;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable imageurl={centerImg}/>
         
        </View>
      </View>
    );
  }
}

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
    backgroundColor: "#00334d"
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