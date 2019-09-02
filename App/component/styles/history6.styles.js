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
        //    alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        left: 40
    },
    LowerTextContainer: {/* Welcome back and vodabuddy wrapper */
        flexDirection: 'row',
        //    alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        top: (DEVICE_HEIGHT / 2) - 10,
        left: 40
    },

    LeftView: {
        //marginTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    RightView: {
        marginTop: 17,
        marginLeft:30,
    /*     position:'absolute',
        left: (DEVICE_WIDTH / 2) + 10, */
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    button: { // button design
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    NextButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        right: 30,
        //   backgroundColor:'#DDDD',

    },
    BackButtonView: { //wrapper for button 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        left: 30,
        //  backgroundColor:'#DDDD',

    },
    ButtonText: { // text inside button
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});