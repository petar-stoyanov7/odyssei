import {Linking, Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

import style from './App.style';
import {header, txt} from './StyleHelper';

import CustomHeader from "./components/CustomHeader/CustomHeader";
import {Overlay} from "@rneui/themed";
import CustomButton from "./components/CustomButton/CustomButton";
import ErrorOverlay from "./components/Overlay/ErrorOverlay";

export default function App() {
    const [showMenu, setShowMenu] = useState(false);
    const [document, setDocument] = useState({});
    const [debug, setDebug] = useState("");

    const [showWarning, setShowWarning] = useState(false);
    const [warning, setWarning] = useState({
        'title': '',
        'message': ''
    });


    const toggleMenu = () => {
        setShowMenu(!showMenu);
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

    const showWarningOverlay = (title, message) => {
        setWarning({
            'title': title,
            'message': message
        });
        setShowWarning(true);
    }

    return (
        <SafeAreaView style={style.screen}>
            <CustomHeader
                title="ODYSSEI"
                pressAction={toggleMenu}
            />
            <Overlay
                isVisible={showMenu}
                onBackdropPress={toggleMenu}
                overlayStyle={style.overlay}
            >
                <Text style={style.overlay.header}>Navigation</Text>
                <CustomButton buttonText="KUR" onClick={() => {console.log('click')}} />
                <CustomButton buttonText="HUR" onClick={() => {console.log('click')}} />
            </Overlay>
            <ErrorOverlay
                isVisible={showWarning}
                pressAction={() => {setShowWarning(false)}}
                buttonText="Close"
                warningTitle={warning.title}
                warningText={warning.message}
            />
            <ScrollView style={style.scroller}>
                <View style={style.container}>
                    <Text style={header.h2}>Florence</Text>
                    <CustomButton buttonText="igoumenitsa" onClick={() => {accessApp("https://ul.waze.com/ul?place=ChIJr8b1PRZ-WxMR5oVysHEPlpo&ll=39.48926680%2C20.25835020&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location")}} />
                    <CustomButton buttonText="capua" onClick={() => {accessApp("https://ul.waze.com/ul?place=ChIJ3xmUMi7_OhMRiNJVIGjNhFM&ll=41.08226960%2C14.25517000&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location")}} />
                    <CustomButton buttonText="florence" onClick={() => {accessApp("https://ul.waze.com/ul?place=ChIJTSsUGyhUKhMRe-yPyZY2eD4&ll=43.79687250%2C11.25278880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location")}} />
                    <Text>{debug}</Text>
                    <Text style={txt.default}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies vulputate tellus, a commodo ipsum iaculis ac. Nunc eget efficitur augue. Ut fringilla tellus tortor, imperdiet congue urna iaculis eget. Sed pulvinar felis eget enim interdum fringilla. Vestibulum vel lectus ac nisi maximus aliquet. Fusce lacinia dui non laoreet lobortis. Phasellus euismod metus neque. Integer eu pretium nunc, et tristique urna. Vivamus ultricies a nisl sit amet posuere. Integer sit amet augue facilisis, imperdiet nisi at, tristique metus. Ut a ligula cursus, dictum risus a, tristique nunc. Nulla laoreet lobortis eros bibendum hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed purus convallis, commodo orci a, pellentesque eros. Mauris vestibulum id velit a feugiat. Aliquam accumsan interdum lectus, id tristique ipsum iaculis auctor.
                    </Text>
                </View>
                <View style={style.container}>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

