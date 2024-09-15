import {StyleSheet} from "react-native";
import {vh,vw} from "../../StyleHelper";

const style = StyleSheet.create({
    overlay: {
        minWidth: vw(80),
        minHeight: vh(15),
        padding: 20
    },
    header: {
        color: '#ff0000',
        textAlign: "center",
        marginTop: 10
    },
    text: {
        marginBottom: 40,
        fontSize: 20
    }
})

export default style;