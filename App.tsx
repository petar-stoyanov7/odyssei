import React, {useEffect, useState} from 'react';
import Pdf from 'react-native-pdf';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import style from './App.style';
import {header, txt} from './StyleHelper';
import CustomHeader from "./components/CustomHeader/CustomHeader";
import ErrorOverlay from './components/Overlay/ErrorOverlay';
import NavOverlay from "./components/Overlay/NavOverlay";
import Main from "./components/Main/Main";

const fileData = [
  require('./assets/data/day0.json'),
  require('./assets/data/day1.json'),
  require('./assets/data/day2.json'),
  require('./assets/data/day3.json'),
  require('./assets/data/day4.json'),
  require('./assets/data/day5.json'),
  require('./assets/data/day6.json')
];

function App(): React.JSX.Element {
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
  };

  const changeActiveDocument = (title) => {
    setShowMenu(false);
    setActiveDocument(documents[title]);
    setStorageItem('active-document', title);
  };

  const showWarningOverlay = (title, message) => {
    setWarning({
      'title': title,
      'message': message
    });
    setShowWarning(true);
  };

  const setStorageItem = async (key, value) => {
    await AsyncStorage.setItem(key, value)
  };

  const fileSource = {uri:'bundle-assets://file1.pdf'};

  const example = (
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
        <Text>HERE</Text>
        <Pdf source={fileSource}/>
      </ScrollView>
  );

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
      </SafeAreaView>
  );
}

export default App;
