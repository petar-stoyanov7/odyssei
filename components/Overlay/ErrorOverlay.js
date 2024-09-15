import {Text} from 'react-native';
import React from 'react';
import {Overlay, Button} from "@rneui/themed";
import {header} from "../../StyleHelper";

import style from './ErrorOverlay.style';

const ErrorOverlay = (props) => {
    const buttonText = props.buttonText ? props.buttonText : "OK";
    const warningTitle = props.warningTitle ? props.warningTitle : "Warning!";
    const warningText = props.warningText ? props.warningText : "Warning!";

    return (
        <Overlay
            isVisible={props.isVisible}
            onBackDropPress={props.pressAction}
            overlayStyle={style.overlay}
        >
            <Text style={{...header.h2, ...style.header}}>{warningTitle}</Text>
            <Text style={style.text}>{warningText}</Text>
            <Button
                type="solid"
                size="lg"
                color="warning"
                title={buttonText}
                onPress={props.pressAction}
                radius="3"
            />
            {props.children}
        </Overlay>
    );
}

export default ErrorOverlay;