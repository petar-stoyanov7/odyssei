import {Dimensions, StyleSheet} from "react-native";

export const vw = (percent) => {
    return (Dimensions.get('window').width / 100) * percent
}
export const vh = (percent) => {
    return (Dimensions.get('window').height / 100) * percent
}

export const header = StyleSheet.create({
    h1: {
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 12,
        marginBottom: 20
    },
    h2: {
        fontWeight: "bold",
        fontSize: 28,
        marginTop: 10,
        marginBottom: 15
    },
    h3: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 8,
        marginBottom: 8
    },
    h4: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 8,
        marginBottom: 8
    },
    h5: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 8,
        marginBottom: 8
    },
    h6: {
        fontWeight: "bold",
        fontSize: 12,
        marginTop: 12,
        marginBottom: 20
    }
});

export const txt = StyleSheet.create({
    default: {
        fontSize: 22
    }
});