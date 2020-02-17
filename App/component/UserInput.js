import {React,  Component } from 'react';
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import { StyleSheet, View, TextInput, floatingLabelInput, Text, Image } from 'react-native';




export default class UserInput extends Component {
  /* constructor(){
    super()
    this.state = {
      email: '',
      password: ''
   }
  } */



  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          editable={!this.props.disabled}
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          onChangeText={this.props.onChangeText}
          clearButtonMode="always"
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

  inputWrapper: {

    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
    position: 'absolute',
    left: 40

  },
  input: {
    width: DEVICE_WIDTH - 200,
    paddingLeft: 5,
    fontWeight: "bold"
  },

});
