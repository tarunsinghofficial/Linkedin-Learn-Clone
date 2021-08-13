import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from '../components/Colors';
import Separator from '../components/Separator';

function Category({iconName, category, subCategory, icon}) {
    return (
        <TouchableHighlight underlayColor={Colors.lightgray} onPress={() => { alert('Redirecting') }}>
        <View style={styles.container}>
        <MaterialCommunityIcons style={styles.icons}
            color={Colors.medium}
            name={iconName}
            size={25}
          /> 
            <View style={styles.detailsContainer}>
                <Text style={styles.category} numberOfLines={1}>
                    {category}
                </Text>
                <Text style={styles.subCategory} numberOfLines={2}>
                    {subCategory}
                </Text>
            </View>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    icons: {
        /* borderColor: Colors.black,
        borderBottomWidth: 2,
        borderLeftWidth: 2 */
        top: -8,
        position: 'relative'
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
        backgroundColor: Colors.white,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 35,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subCategory: {
        fontSize: 15,
    }
})

export default Category;