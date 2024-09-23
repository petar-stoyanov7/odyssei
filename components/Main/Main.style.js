import {StyleSheet} from 'react-native';
import {vh,vw} from '../../StyleHelper';

const style = StyleSheet.create({
    scroller: {
        flex: 1,
    },
    button: {
        marginBottom: 10,
        marginRight: 10,
    },
    title: {
        width: '100%',
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
    flexContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flexTable: {
        flex: 1,
        width: '100%',
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
});

export default style;
