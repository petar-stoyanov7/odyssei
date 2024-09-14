import {Dimensions} from "react-native";

export const vw = (percent) => {
    return (Dimensions.get('window').width / 100) * percent
}
export const vh = (percent) => {
    return (Dimensions.get('window').height / 100) * percent
}