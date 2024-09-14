import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

import style from './App.style';
import {header, txt} from './StyleHelper';

import CustomHeader from "./components/CustomHeader/CustomHeader";
import {Overlay} from "@rneui/themed";
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
    const [showMenu, setShowMenu] = useState(false);
    const [document, setDocument] = useState({});

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <SafeAreaView style={style.container}>
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
            <ScrollView style={style.wrapper}>
                <Text style={header.h2}>Florence</Text>
                <Text style={txt.default}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies vulputate tellus, a commodo ipsum iaculis ac. Nunc eget efficitur augue. Ut fringilla tellus tortor, imperdiet congue urna iaculis eget. Sed pulvinar felis eget enim interdum fringilla. Vestibulum vel lectus ac nisi maximus aliquet. Fusce lacinia dui non laoreet lobortis. Phasellus euismod metus neque. Integer eu pretium nunc, et tristique urna. Vivamus ultricies a nisl sit amet posuere. Integer sit amet augue facilisis, imperdiet nisi at, tristique metus. Ut a ligula cursus, dictum risus a, tristique nunc. Nulla laoreet lobortis eros bibendum hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed purus convallis, commodo orci a, pellentesque eros. Mauris vestibulum id velit a feugiat. Aliquam accumsan interdum lectus, id tristique ipsum iaculis auctor.
                </Text>
                <Text style={txt.default}>
                    Suspendisse rutrum neque id libero fringilla, sed porttitor est ultricies. Aliquam consectetur nunc at dui facilisis, in malesuada odio cursus. Quisque bibendum diam id sapien rutrum, at lobortis nisi ullamcorper. Sed ullamcorper aliquet maximus. Donec consequat vestibulum eros id volutpat. Cras mollis, velit eu ultrices cursus, massa enim tempor metus, vel finibus lorem est vel dolor. Curabitur venenatis nibh at ante bibendum, ut ultricies magna luctus. In porta velit a purus lobortis, eget iaculis nibh cursus. Sed id velit eu eros ultrices tincidunt dapibus nec nunc. Praesent sollicitudin mattis felis in blandit. Proin elit felis, sodales at mattis a, scelerisque vitae nulla. Curabitur sollicitudin ut arcu sit amet molestie. Fusce elementum elit ligula. Morbi vitae elit et neque facilisis tincidunt ac non turpis.
                </Text>
            </ScrollView>

        </SafeAreaView>
    );
}

