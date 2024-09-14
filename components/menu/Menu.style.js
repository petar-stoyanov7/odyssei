import {StyleSheet} from "react-native";
import {vw,vh} from "../../StyleHelper";


const style = StyleSheet.create({
    main: {
       position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: vw(100),
        height: vh(100)
    },
    button: {
        position: 'absolute',
        zIndex: 2,
        elevation: 2,
        bottom: 5,
        right: 5,
        // borderRadius: '50%',
        width: vw(18),
        height: vw(18)
    },
    buttonImage: {
        width: '100%',
        height: '100%'
    },
    blackOverlay: {
        position: 'fixed',
        zIndex: 3,
        elevation: 3,
        width: vw(100),
        height: vh(100),
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.66)'
    },
    menu: {
        position: 'absolute',
        zIndex: 4,
        elevation: 4,
        backgroundColor: '#e1e7f1',
        width: vw(80),
        height: vh(80),
        left: vw(20),
        top: vh(20),
        padding: 15,
        header: {
            marginTop: 15,
            marginBottom: 20,
            fontSize: 30,
            textAlign: 'center',
        }
    },
    menuNavigation: {
    }
});

export default style;