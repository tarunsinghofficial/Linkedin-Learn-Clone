import React, { Component, Fragment } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from './Colors';

function NavigationBar(props) {
    return (
    <Fragment>
        <SafeAreaView style={{ backgroundColor: Colors.linkedin, height: 55}}>
            <StatusBar barStyle="light-content" />
            <Image style={{
                width: 23,
                height: 23,
                marginTop: 15,
                marginLeft: 20
            }} source={require('../assets/linkedin-logo.png')} />
            <Text style={{color: Colors.white, fontSize: 16, position: 'relative', fontWeight: 'bold', left: 50, top: -23}}>LEARNING</Text>
            <MaterialCommunityIcons style={{position: 'absolute', right: 15, bottom: 14}} name="magnify" size={25}  color={Colors.white} />
        </SafeAreaView>
        </Fragment>
    );
}

export default NavigationBar;