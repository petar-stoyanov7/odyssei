import {Dimensions, StyleSheet} from 'react-native';

export const vw = (percent) => {
    return (Dimensions.get('window').width / 100) * percent;
};

export const vh = (percent) => {
    return (Dimensions.get('window').height / 100) * percent;
};

export const headerClr = '#e39054';
export const orange = '#ff811c';
export const green = '#39a355';
export const blue = '#6982ff';
export const lightGreen = '#69da5a';
export const black = '#252525';
export const darkGray = '#4e4e4e';
export const white = '#f1f1f1';


export const header = StyleSheet.create({
    h1: {
        color: black,
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 12,
        marginBottom: 20,
    },
    h2: {
        color: black,
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 10,
        marginBottom: 15,
    },
    h3: {
        color: black,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 8,
        marginBottom: 8,
    },
    h4: {
        color: black,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8,
        marginBottom: 8,
    },
    h5: {
        color: black,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        marginBottom: 8,
    },
    h6: {
        color: black,
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 12,
        marginBottom: 20,
    },
});

export const txt = StyleSheet.create({
    default: {
        fontSize: 22,
        color: darkGray
    },
});
