import {StyleSheet} from "react-native";
import {vh,vw} from "../../StyleHelper";

const style = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: vh(1),
        left: vh(1),
        width: vw(96),
        height: vh(90),
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        maxHeight: '5%',
    },
    button: {
        width: vw(20),
        marginLeft: 'auto',
    },
    pdfContainer: {
        width: '100%',
        height: '90%',
    },
    pdf: {
        flex: 1,
        flexGrow: 1,
        marginTop: '10%',
        // marginBottom: '10%',
        backgroundColor: '#fff',
        // width: '100%',
        width: vw(92),
        height: vh(80),
    },
    img: {
        // flex: 1,
        // flexGrow: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        // width: vw(92),
        // height: vh(80),
    },
});

export default style;