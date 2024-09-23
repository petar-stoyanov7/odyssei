import {StyleSheet} from "react-native";
import {vh,vw, lightGreen, white} from "../../StyleHelper";

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
        color: white,
        textAlign: "center",
        verticalAlign: "center"
    },
    button: {
        width: vh(5),
        height: vh(5),
        backgroundColor: lightGreen,
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default style;