import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';

import style from './CustomHeader.style';
import {Header, Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {headerClr} from '../../StyleHelper';

const CustomHeader = (props) => {
    // const icon = <Icon name="compass" type="feather" />;
    const icon = (
        <Icon
            name="sc-telegram"
            type="evilicon"
        />
    );

    return (
        <Header
            backgroundColor={headerClr}
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
                    icon={icon}
                    radius="5"
                />
            )}
            rightComponentStyle={style.header}
        />
    );
};

export default CustomHeader;

