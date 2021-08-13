import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../components/Colors';

import Modal from '../components/Modal';

function Courses({title, image, course, trend, time}) {
    return (
        <TouchableOpacity>
        <View style={{ 
            marginTop: 20,
            height: 180, 
            width: 200, 
            marginLeft: 18, 
            marginRight: 10}}
            >
            <View style={{ flex: 2 }}>
                <Image source={image}
                    style={{ 
                        flex: 1, 
                        width: null, 
                        height: null, 
                        resizeMode: 'cover',
                        borderRadius: 2, 
                        borderColor: Colors.black,
                        borderWidth: 0.5,
                    position: 'relative'  }}
                />
                <Text style={{position: 'absolute', top: 0, left: 0, backgroundColor: Colors.white, color: Colors.black, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    {trend}
                </Text>
                <Text style={{position: 'absolute', bottom: 0, right: 0, backgroundColor: Colors.black, opacity: 0.7, padding: 2, color: Colors.white, fontWeight: 'bold', fontSize: 10}}>
                    {time}
                </Text>
            </View>
            <View style={{ 
                flex: 1, 
                paddingTop: 5 }}>
                <Text style={{fontSize: 13, color: Colors.gray}}>{title}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{course}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Courses;
