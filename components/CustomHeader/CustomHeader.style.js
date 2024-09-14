import {StyleSheet} from "react-native";
import {vh,vw} from "../../StyleHelper";

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: vh(6),
        marginBottom: 15
    },
    text: {
        width: '100%',
        fontSize: 30,
        fontWeight: "bold",
        color: '#fff',
        textAlign: "center",
        verticalAlign: "center"
    },
    button: {
        width: vh(5),
        height: vh(5),
        backgroundColor: '#69da5a'
    }
});

export default style;