import {
    StyleSheet,
    Dimensions,

} from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    Text: {//welcome to word style
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },

    TextContainer: {/* Welcome back and vodabuddy wrapper */
        // flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: DEVICE_HEIGHT * 0.108
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
