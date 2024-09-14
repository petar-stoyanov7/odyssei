import {Image, Pressable, Text, View} from "react-native";
import React, {useState} from 'react';

import style from './Button.style';

const CustomButton = (props) => {

    return (
        <Pressable
            style={style.buttonOuter}
            onPress={props.onClick}
        >
            <Text style={style.buttonText}>{props.buttonText}</Text>
        </Pressable>
    );
}

export default CustomButton;