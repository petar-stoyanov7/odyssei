import React from 'react';
import {Overlay, Button} from '@rneui/themed';
import Pdf from 'react-native-pdf';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import style from './PdfOverlay.style';
import {ScrollView, Text, View} from 'react-native';
import {header} from '../../StyleHelper';

const PdfOverlay = (props) => {
    const pdfSource = {uri: `bundle-assets://data/${props.source}`};

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
                <Pdf
                    style={style.pdf}
                    source={pdfSource}
                />
            </ReactNativeZoomableView>
        </Overlay>
    );
};

export default PdfOverlay;
