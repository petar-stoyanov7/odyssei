import {StyleSheet} from "react-native";
import {vh,vw} from "../../StyleHelper";
import {headerColor} from "../../StyleHelper";

const style = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: vw(80),
        backgroundColor: headerColor,
        padding: 15,
        header: {
            marginTop: 15,
            marginBottom: 20,
            fontSize: 30,
            textAlign: 'center',
        }
    },
    header: {
        color: '#fff'
    },
    button: {
        marginBottom: 10
    }
});

export default style;