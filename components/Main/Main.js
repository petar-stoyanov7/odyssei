import {Linking, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Overlay, Button} from "@rneui/themed";
import {header, txt} from "../../StyleHelper";

import style from './Main.style';

const Main = (props) => {
    if (!props.document || !props.document.content) {
        return;
    }

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
    }

    const getProperElement = (item, index) => {
        switch (item.type) {
            case 'link':
                return (
                    <Button
                        key={index}
                        type="solid"
                        size="md"
                        title={item.title}
                        buttonStyle={style.button}
                        onPress={() => {
                            accessApp(item.url)
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
            default:
                return '';
        }
    };

    const document = props.document;

    return (
        <ScrollView style={style.scroller}>
            <View style={style.container}>
                <Text style={header.h2}>{document.title}</Text>
                <Text style={txt.default}>
                    {document.description}
                </Text>
            </View>
            {document.content.map((section, i) => {
                const sectionStyle = section.type === "flex"
                    ? {
                        ...style.container,
                        ...style.flexContainer}
                    : style.container;
                return (
                    <View style={sectionStyle} key={i}>
                        <Text style={{...header.h3, ...style.title}}>{section.title}</Text>
                        {section.items.map((item, j) => {
                            return getProperElement(item, j);
                        })}
                    </View>
                );
            })}
        </ScrollView>
    );
}

export default Main;
