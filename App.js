import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import style from './App.style';
import {header, txt} from './StyleHelper';

import CustomHeader from "./components/CustomHeader/CustomHeader";
import CustomButton from "./components/CustomButton/CustomButton";
import ErrorOverlay from "./components/Overlay/ErrorOverlay";
import NavOverlay from "./components/Overlay/NavOverlay";
import Main from "./components/Main/Main";
import AsyncStorage from "@react-native-async-storage/async-storage";

/** TODO: To whoever ends up in this mess - I also can't believe react native's ability to handle local files is made
 * in such stupid manner. I'm far from pro, but whoever is responsible should be ashamed of itself */
const fileData = [
    require('./assets/data/day0.json'),
    require('./assets/data/day1.json'),
    require('./assets/data/day2.json'),
    require('./assets/data/day3.json'),
    require('./assets/data/day4.json'),
    require('./assets/data/day5.json'),
    require('./assets/data/day6.json')
];
/** end of worst part of the mess */


export default function App() {
    const [links, setLinks] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [activeDocument, setActiveDocument] = useState({});
    const [debug, setDebug] = useState("");

    const [showWarning, setShowWarning] = useState(false);
    const [warning, setWarning] = useState({
        'title': '',
        'message': ''
    });

    useEffect(() => {
        let tempLinks = [];
        let tempDocs = {};
        fileData.forEach((dayObj, i) => {
            tempLinks.push(dayObj.linkTitle);
            tempDocs[dayObj.linkTitle] = dayObj
        });

        setLinks(tempLinks);
        setDocuments(tempDocs);
        setActiveDocument(tempDocs[tempLinks[0]]);


    }, []);

    /* an ugly workaround to set the stored page after the document has been loaded
    * TODO: finally learn async/await */
    useEffect(() => {
        AsyncStorage.getItem('active-document').then((title) => {
            setActiveDocument(documents[title]);
        })
    }, [documents]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const changeActiveDocument = (title) => {
        setShowMenu(false);
        setActiveDocument(documents[title]);
        setStorageItem('active-document', title);
    }

    const showWarningOverlay = (title, message) => {
        setWarning({
            'title': title,
            'message': message
        });
        setShowWarning(true);
    }

    const setStorageItem = async (key, value) => {
        await AsyncStorage.setItem(key, value)
    }

    return (
        <SafeAreaView style={style.screen}>
            <CustomHeader
                title="ODYSSEI"
                pressAction={toggleMenu}
            />
            <NavOverlay
                isVisible={showMenu}
                toggleMenu={toggleMenu}
                linkList={links}
                clickHandler={changeActiveDocument}
                warning={showWarningOverlay}
            />
            <ErrorOverlay
                isVisible={showWarning}
                pressAction={() => {setShowWarning(false)}}
                buttonText="Close"
                warningTitle={warning.title}
                warningText={warning.message}
            />
            <Main document={activeDocument} />
            {/*<ScrollView style={style.scroller}>*/}
            {/*    <View style={style.container}>*/}
            {/*        <Text style={header.h2}>Florence</Text>*/}
            {/*        <CustomButton buttonText="florence" onClick={() => {accessApp("https://ul.waze.com/ul?place=ChIJTSsUGyhUKhMRe-yPyZY2eD4&ll=43.79687250%2C11.25278880&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location")}} />*/}
            {/*        <Text>{debug}</Text>*/}
            {/*        <Text style={txt.default}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies vulputate tellus, a commodo ipsum iaculis ac. Nunc eget efficitur augue. Ut fringilla tellus tortor, imperdiet congue urna iaculis eget. Sed pulvinar felis eget enim interdum fringilla. Vestibulum vel lectus ac nisi maximus aliquet. Fusce lacinia dui non laoreet lobortis. Phasellus euismod metus neque. Integer eu pretium nunc, et tristique urna. Vivamus ultricies a nisl sit amet posuere. Integer sit amet augue facilisis, imperdiet nisi at, tristique metus. Ut a ligula cursus, dictum risus a, tristique nunc. Nulla laoreet lobortis eros bibendum hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed purus convallis, commodo orci a, pellentesque eros. Mauris vestibulum id velit a feugiat. Aliquam accumsan interdum lectus, id tristique ipsum iaculis auctor.*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <View style={style.container}>*/}
            {/*    </View>*/}
            {/*</ScrollView>*/}

        </SafeAreaView>
    );
}

