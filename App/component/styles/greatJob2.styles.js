
import {
    StyleSheet,
    Dimensions,

} from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default  StyleSheet.create({

    button: { // button design
        width: 128,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderRadius :10
    },

    ButtonView: { //wrapper for button 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 462,
      

    },
     ButtonText: { // text inside button
        color: 'white',
        fontSize: 20,
    },
});
