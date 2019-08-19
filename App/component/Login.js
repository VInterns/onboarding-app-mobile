import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  Button,
  Linking,//for linking a button to a link
} from 'react-native';

import UserInput from './UserInput';

//import Spinner from './Spinner';

import backgroundImg from '../assets/background.png';
import logoImg from '../assets/light.png';
import carKey from '../assets/carKeyDev.png';
import user from '../assets/userLogInDev.png';




export  class Login extends Component {

  constructor() {
    super();
    //  _onLoginPressed=this._onLoginPressed.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }


props: {
  errorMessage: string,
  loading: boolean,
  tryLogin: (user: UserLoginModel) => void
};

  static navigationOptions = {//header styling
    title: 'Welcome',
    fontWeight: 'bold'
  };



  handleEmail = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={backgroundImg} style={styles.wallpaper}>{/*background*/}

        <Image source={logoImg} style={{ position: 'absolute', top: 30, right: 50 }} />{/* top corner logo*/}

        {/*welcome To and Vodabuddy text view*/}
        <View style={styles.TextContainer}>
          <View style={styles.welcomTextView}>
            <Text style={styles.WelcomeText}>Welcome to</Text>
          </View>
          <View style={styles.VodaBuddyView}>
            <Text style={styles.VodaText}>Voda</Text>
            <Text style={styles.buddyText}>buddy</Text>
          </View>
        </View>


        {/*email user input view*/}

        <View style={styles.userNameTextInputView}>
          <Image source={user} style={styles.userNameIconStyle} />
          <UserInput placeholder={'E-mail .....'} onChangeText={this.handleEmail} secureTextEntry={false} />
        </View>

        <View style={styles.PasswordTextInputView}>
          <Image source={carKey} style={styles.PasswordIconStyle} />
          <UserInput placeholder={'Password .....'} onChangeText={this.handlePassword} secureTextEntry={true} />
        </View>

        {/*forget password view*/}
        <View style={styles.ForgetPasswordContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>{/*chane the linking url in order to change password*/}
            <Text style={styles.ForgetPasswordStyle}>
              Forgot Password ?
                  </Text>
          </TouchableOpacity>
        </View>


        {/*  button view */}

        <KeyboardAvoidingView behavior="padding" style={styles.buttonView}>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigate("walkThrough1", {})} > */}
          <TouchableOpacity style={styles.button} onPress={() => this.props.tryLogin(this.state)} >
            <Image source={require('../assets/arrow.png')} style={styles.ButtonimageStyle} />
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>


        {/*signature bottom text view*/}
        <View style={styles.EndTextView}>
          <Text style={styles.VodafoneGroupText}>
            © 2019 Vodafone Group. Vodafone Group Plc
          </Text>
        </View>

      </ImageBackground>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wallpaper: { //background style
    flex: 1,
    height: '100%',
    width: '100%'
  },

  EndTextView: {
    width: '100%',
    // height: 0,
    //flex: 0.1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',// center of the flex view
    // marginTop: 5
    position: 'absolute',
    bottom: 0,
  },

  VodafoneGroupText: {
    color: 'white'
  },

  WelcomeText: {//welcome to word style
    alignItems: 'center',
    color: 'red',
    fontSize: 16,
    position: 'absolute',
    left: 40
  },

  VodaText: {//login word text style
    //textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 35,
    /*    position: 'absolute',
       left: 40 */
  },

  buddyText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35
  },
  welcomTextView: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor:'green'
  },

  TextContainer: {/* Welcome back and vodabuddy wrapper */

    flexDirection: 'column',
    // flex: 0.35,
    // backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'center',
    top: 200,

  },

  VodaBuddyView: {
    width: '100%',
    flexDirection: 'row',
    //  backgroundColor: 'yellow',
    position: 'absolute',
    top: 18,
    left: 40
    // alignItems:'flex-start'
  },

  ForgetPasswordContainer: { //forget password wrapper
    // flex: 0.1,
    justifyContent: 'center',// center of the flex view
    position: 'absolute',
    top: 400,
    left: 40,

  },
  ForgetPasswordStyle: { //forget password style 
    //textAlign: 'center', 
    color: 'blue',
    // fontWeight : 'bold', 
    // justifyContent: 'center',
    //paddingBottom:'45%',
    fontSize: 14,
    justifyContent: 'space-around',
    textAlign: 'left',
    // paddingRight: 30
  },

  button: { // button design
    width: DEVICE_WIDTH - 250,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#B82202',
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: "row"
  },
  ButtonimageStyle: {//button icon
    margin: 5,
    marginLeft: 0,
    marginRight: 15,
    height: 16.5,
    width: 16.5,
    resizeMode: 'stretch',
  },
  buttonView: { //wrapper for button 
    // flex: 0.15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 450,
    left: 40,
    // marginTop: 50,

  },
  ButtonText: { // text inside button
    //textAlign: 'center', 
    color: 'white',
    //fontWeight: 'bold',
    // justifyContent: 'center',
    //paddingBottom:'45%',
    fontSize: 18,
    justifyContent: 'space-around',
  },

  userNameIconStyle: {
    //padding: 4,//icon size
    // paddingLeft:10,
    margin: 25,
    height: 12,
    width: 12,
    resizeMode: 'stretch',
    alignItems: 'center',
    //justifyContent:'center'
  },

  userNameTextInputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    position: 'absolute',
    //margin: 10
    top: 300
  },
  PasswordTextInputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    position: 'absolute',
    //margin: 10
    top: 340
  },
  PasswordIconStyle: {
    padding: 5,//icon size
    // paddingLeft:10,
    margin: 25,
    height: 13,
    width: 14,
    resizeMode: 'stretch',
    alignItems: 'center',
    //justifyContent:'center'
  }

});

const mapStateToProps = state => {

  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user
  }
}

