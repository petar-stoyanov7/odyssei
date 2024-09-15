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
});

export default style;