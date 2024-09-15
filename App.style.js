import {StyleSheet} from "react-native";
import {vh,vw} from "./StyleHelper";

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#dfdfda',
    },
    scroller: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: vw(95),
        marginTop: vw(2.5),
        marginBottom: vw(2.5),
        marginHorizontal: 'auto',
        padding: 15,
        backgroundColor: '#f2f5f6',
        borderRadius: 15,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: vw(80),
        backgroundColor: '#e1e7f1',
        padding: 15,
        header: {
            marginTop: 15,
            marginBottom: 20,
            fontSize: 30,
            textAlign: 'center',
        }
    },
});

export default style;