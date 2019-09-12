import {
    StyleSheet,
    Dimensions,

} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default StyleSheet.create({

    blackText: {//welcome to word style
        color: 'black',
        fontSize: 20,
    },

    redText: {//login word text style
        color: 'red',
        fontWeight: 'bold',
        fontSize: 28,

    },

    lowerView: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.1059,
    },
    LowerTextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: DEVICE_HEIGHT * 0.055
    },

    LeftView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
     //   backgroundColor: 'green'
    },
    RightView: {
        //marginTop: 17,
        marginLeft: 0.2 * DEVICE_WIDTH,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      //  backgroundColor: 'yellow'
    },

    button: { // button design
        /*   width: 70,
          height: 25, */
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    BackButtonView: { //wrapper for button 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    /*     ButtonimageStyle: {//button icon
            margin: -15
        }, */
});