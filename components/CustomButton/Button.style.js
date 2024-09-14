import {StyleSheet} from "react-native";
import {vw,vh} from "../../StyleHelper";


const style = StyleSheet.create({
    buttonOuter: {
        display: 'block',
        width: '100%',
        marginTop: 5,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: "#2f38ae",
        backgroundColor: "#e3e3ef",
        borderRadius: 5
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30
    }
});

export default style;