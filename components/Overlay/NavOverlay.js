import {Text} from 'react-native';
import React from 'react';
import {Overlay, Button} from "@rneui/themed";
import {header} from "../../StyleHelper";

import style from './NavOverlay.style';

const NavOverlay = (props) => {
    //
    return (
        <Overlay
            isVisible={props.isVisible}
            onBackdropPress={props.toggleMenu}
            overlayStyle={style.overlay}
        >
            <Text style={{...header.h3, ...style.header}}>Navigation</Text>
            {props.linkList.map((link, i) => {
                return (
                    <Button
                        key={i}
                        type="solid"
                        size="lg"
                        color="success"
                        title={link}
                        buttonStyle={style.button}
                        onPress={() => {
                            props.clickHandler(link);
                        }}
                        radius="3"
                    />
                );
            })}
        </Overlay>
    );
}

export default NavOverlay;