import {StyleSheet} from 'react-native';
import {
    vw,
    white,
    headerClr,
} from '../../StyleHelper';

const style = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: vw(80),
        backgroundColor: headerClr,
        padding: 15,
        borderRadius: 0,
        header: {
            marginTop: 15,
            marginBottom: 20,
            fontSize: 30,
            textAlign: 'center',
        },
    },
    header: {
        color: white,
    },
    button: {
        marginBottom: 10,
    },
});

export default style;
