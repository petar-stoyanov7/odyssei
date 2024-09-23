import {Linking, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
    header,
    txt,
    orange,
    blue,
    green,
    black,
    lightGreen,
    darkGray,
} from '../../StyleHelper';

import style from './Main.style';
import PdfOverlay from '../Overlay/PdfOverlay';

const Main = (props) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [pdfSource, setPdfSource] = useState('');
    const [pdfTitle, setPdfTitle] = useState('');

    if (!props.document || !props.document.content) {
        return;
    }

    const processColor = (color) => {
        switch(color) {
            case 'black':
                return black;
            case 'darkGray':
                return darkGray;
            case 'blue':
                return blue;
            case 'green':
                return green;
            case 'lightGreen':
                return lightGreen;
            case 'orange':
            default:
                return orange;
        }
    };

    const parseText = (text, index) => {
        if (typeof text === 'string') {
            return (
                <Text key={index} style={txt.default}>{text}</Text>
            );
        } else if (typeof text === 'object') {
            return (
                <View style={style.flexTable}>
                    {text.items.map((item, i) => {
                        if (text.type === 'flex-table') {
                            return (
                                <View style={style.flexTable.container} key={i}>
                                    <Text style={txt.default}>{item.left}</Text>
                                    <Text style={txt.default}>{item.right}</Text>
                                </View>
                            );
                        } else {
                            return (
                                <Text style={txt.default}>{item}</Text>
                            );
                        }
                    })}
                </View>
            );
        }
    };

    const hidePdfOverlay = () => {
        setShowOverlay(false);
        setPdfSource('');
        setPdfTitle('');
    };

    const showPdfOverlay = (title, source) => {
        setPdfTitle(title);
        setShowOverlay(true);
        setPdfSource(source);
    };

    const accessApp = (url) => {
        Linking.openURL(url);
        // Linking.canOpenURL(url)
        //     .then((supported) => {
        //         if (supported) {
        //             Linking.openURL(url);
        //         } else {
        //             showWarningOverlay("Not supported", "it seems it's not supported");
        //         }
        //     })
        //     .catch((err) => {
        //         showWarningOverlay("Linking Error", err);
        //     });
    };

    const getProperElement = (item, index) => {
        let bgColor = null;
        if (item.background) {
            bgColor = processColor(item.background);
        }
        console.log('bg', bgColor);
        switch (item.type) {
            case 'link':
                const linkStyle = bgColor
                    ? [style.button, {backgroundColor: bgColor}]
                    : style.button;
                return (
                    <Button
                        key={index}
                        type="solid"
                        size="md"
                        title={item.title}
                        buttonStyle={linkStyle}
                        onPress={() => {
                            accessApp(item.url);
                        }}
                        radius="3"
                    />
                );
            case 'header':
                return (
                    <Text key={index} style={{...header[item.subtype], ...style.title}}>{item.text}</Text>
                );
            case 'text':
                return (
                    <Text key={index} style={txt.default}>{item.text}</Text>
                );
            case 'pdf':
                const pdfStyle = bgColor
                    ? [style.button, {backgroundColor: bgColor}]
                    : style.button;
                return (
                    <Button
                        key={index}
                        type="solid"
                        size="md"
                        color="danger"
                        title={item.title}
                        buttonStyle={pdfStyle}
                        onPress={() => {
                            showPdfOverlay(item.title, item.url);
                        }}
                        radius="3"
                    />
                );
            default:
                return '';
        }
    };

    const document = props.document;

    return (
        <ScrollView style={style.scroller}>
            <View style={style.container}>
                <PdfOverlay
                    title={pdfTitle}
                    source={pdfSource}
                    isVisible={showOverlay}
                    onHide={hidePdfOverlay}
                />
                <Text style={header.h2}>{document.title}</Text>
                {parseText(document.description)}
            </View>
            {document.content.map((section, i) => {
                const sectionStyle = section.type === 'flex'
                    ? [style.container, style.flexContainer]
                    : style.container;
                return (
                    <View style={sectionStyle} key={i}>
                        <Text style={[header.h3,style.title]}>{section.title}</Text>
                        {section.items.map((item, j) => {
                            return getProperElement(item, j);
                        })}
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default Main;
