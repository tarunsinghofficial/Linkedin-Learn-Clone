import React from 'react';
import { View, StyleSheet, TouchableHighlight, SafeAreaView, Text, Image, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from '../components/Colors';
import Separator from '../components/Separator';
import ListItem from '../components/ListItem';
import NavigationBar from '../components/NavigationBar';

function Category({category, subCategory, icon}) {
    return (
        <View backgroundColor="white">
            <StatusBar backgroundColor={'#006097'} />
        <NavigationBar />
        <Text style={{fontSize: 25, fontWeight: 'bold', padding: 20}}>
            Browse
        </Text>
        <Separator/>
        <View>
        <ListItem iconName={'trending-up'} category={'Business'} subCategory={'Business topics from Linkedin Learning'} />
        <Separator />
        <ListItem iconName={'pencil-ruler'} category={'Creative'} subCategory={'Creative topics from Linkedin Learning'} />
        <Separator />
        <ListItem iconName={'console'} category={'Technology'} subCategory={'Technology topics from Linkedin Learning'} />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Category;