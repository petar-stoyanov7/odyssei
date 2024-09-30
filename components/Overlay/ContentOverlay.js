import React from 'react';
import {Overlay, Button} from '@rneui/themed';
import Pdf from 'react-native-pdf';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import style from './ContentOverlay.style';
import {Text, View, Image} from 'react-native';
import {header} from '../../StyleHelper';

const ContentOverlay = (props) => {
    if (!props.type) {
        return;
    }
    const source = {uri: `bundle-assets://data/${props.source}`};
    let overlayContent = '';
    switch (props.type) {
        case 'pdf':
            overlayContent = (
                <Pdf
                    style={style.pdf}
                    source={{uri: `bundle-assets://data/${props.source}`}}
                />
            );
            break;
        case 'img':
            overlayContent = (
                <Image
                    style={style.img}
                    resizeMode="contain"
                    source={{uri: `asset:/data/${props.source}`}}
                />
            );
            break;
    }

    return (
        <Overlay
            isVisible={props.isVisible}
            onBackdropPress={props.onHide}
            overlayStyle={style.overlay}
        >
            <View style={style.header} >
                <Text style={header.h4}>{props.title}</Text>
                <Button
                    buttonStyle={style.button}
                    size="sm"
                    color="error"
                    title="close"
                    onPress={props.onHide}
                />
            </View>
            <ReactNativeZoomableView
                style={style.header}
                maxZoom={10}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
            >
                {overlayContent}
            </ReactNativeZoomableView>
        </Overlay>
    );
};

export default ContentOverlay;
