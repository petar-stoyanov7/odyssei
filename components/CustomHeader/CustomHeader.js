import {Pressable, Text, View} from 'react-native';
import React from 'react';

import style from './CustomHeader.style';
import {Header, Button, Image} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {headerClr} from '../../StyleHelper';
import img from '../../assets/compass-w.png';

const CustomHeader = (props) => {
    // const icon = <Icon name="compass" type="feather" />;
    const icon = <Icon name="rowing"  />;

    return (
        <Header
            backgroundColor={headerClr}
            containerStyle={style.container}
            centerComponent={(
                <Text style={style.text}>{props.title}</Text>
            )}
            rightComponent={(
                <Pressable
                    type="solid"
                    // size="md"
                    // buttonStyle={style.button}
                    style={style.button}
                    onPress={props.pressAction}
                    radius="5"
                >
                    <Image
                        source={img}
                        style={style.image}
                    />
                </Pressable>
            )}
            rightComponentStyle={style.header}
        />
    );
};

export default CustomHeader;

