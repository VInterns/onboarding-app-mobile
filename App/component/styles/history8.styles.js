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
        position: 'absolute',
        top: 40,
        left: 20
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
    ButtonimageStyle: {//button icon
        margin: 13,
        height: 80,
        width: 50,
        resizeMode: 'stretch',
    },
    ButtonDesign: {
        width: 50,
        height: 80,
        marginLeft: 0,
        marginRight: 0,
        flexBasis: 90
    }
});
