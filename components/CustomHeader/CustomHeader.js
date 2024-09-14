import {Image, Pressable, Text, View} from "react-native";
import React from 'react';

import style from './CustomHeader.style';
import {Header, Button, Icon} from "@rneui/themed";

const CustomHeader = (props) => {

    return (
        <Header
            backgroundColor="#df9d61"
            containerStyle={style.container}
            centerComponent={(
                <Text style={style.text}>{props.title}</Text>
            )}
            rightComponent={(
                <Button
                    type="solid"
                    size="md"
                    buttonStyle={style.button}
                    onPress={props.pressAction}
                    icon={(<Icon name="compass" type="feather" />)}
                    radius="5"
                />
            )}
            rightComponentStyle={style.header}
        />
    );
}

export default CustomHeader;

