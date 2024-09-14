import {Image, Pressable, Text, View} from "react-native";
import React, {useState} from 'react';

import style from './Menu.style';
import CustomButton from "../CustomButton/CustomButton";

const Menu = (props) => {
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <View style={style.main}>
            {showMenu && <Pressable style={style.blackOverlay} onPress={toggleMenu}/>}
            {showMenu && (
                <View style={style.menu}>
                    <Text style={style.menu.header}>Navigation</Text>
                    <CustomButton buttonText="KUR" onClick={() => {console.log('click')}} />
                    <CustomButton buttonText="HUR" onClick={() => {console.log('click')}} />
                </View>
                )}
            <Pressable style={style.button} onPress={toggleMenu}>
                <Image
                    style={style.buttonImage}
                    source={require('../../assets/compass.png')}
                />
            </Pressable>
        </View>
    )
}

export default Menu;