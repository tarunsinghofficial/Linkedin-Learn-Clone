import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from '../components/Colors';
import Separator from '../components/Separator';
import NavigationBar from '../components/NavigationBar';
import ListItem from '../components/ListItem';
import Courses from '../components/Courses';

function MyLearning(props) {
    return (
        <View backgroundColor="white">
        <StatusBar backgroundColor={'#006097'} />
            <NavigationBar />
            <ScrollView>
            <TouchableHighlight underlayColor={Colors.lightgray} onPress={() => { alert('Redirecting') }}>
                <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/tarun.png')} /> 
                <View style={styles.detailsContainer}>
                    <Text style={styles.category} numberOfLines={1}>
                    Tarun Singh
                    </Text>
                    <Text style={styles.subCategory} numberOfLines={2}>
                    10 skills
                    </Text>
                </View>
                <MaterialCommunityIcons name={'chevron-right'} color={Colors.gray} size={40} />
                </View>
            </TouchableHighlight>
            <Text style={{color: Colors.black, fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Set a weekly goal</Text>
            <TouchableHighlight underlayColor={Colors.lightgray} onPress={() => { alert('Redirecting') }}>
                <View style={styles.container}>
                    <View style={{borderWidth: 2, 
                    borderColor: Colors.gray, borderRadius: 50, padding: 2}}>
                <MaterialCommunityIcons 
                    style={{
                    borderWidth: 2, 
                    borderColor: Colors.gray, 
                    borderRadius: 50, 
                    padding: 20,
                    textAlign: 'center'
                }} 
                    name={'trophy-outline'} color={Colors.gray} size={34} />
                 </View>
                <View style={styles.detailsContainer}>
                    <Text style={{fontSize: 15, color: Colors.gray}} numberOfLines={2}>
                    We'll help you track your progrss and remind you to keep learning
                    </Text>
                    <Text style={{
                        borderColor: Colors.linkedin, 
                        borderWidth: 1, 
                        color: Colors.linkedin,
                        textAlign: 'center',
                        padding: 5,
                        width: 80,
                        borderRadius: 4,
                        marginTop: 20}} numberOfLines={2}>
                    SET GOAL
                    </Text>
                </View>
                </View>
            </TouchableHighlight>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{color: Colors.black, fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                    Downloaded
                </Text>
                <Text style={{color: Colors.linkedin, fontSize: 15, position: 'absolute', right: 15, top: 3}}>
                    SEE ALL (1)
                </Text>
            </View>
            <Courses image={require('../assets/thumb1.png')} trend={'2021'} title={'COURSE'} course={'Adobe XD Essential Training'} />
            <View style={{flexDirection: 'row', marginTop: 40}}>
                <Text style={{color: Colors.black, fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                    In progress
                </Text>
                <Text style={{color: Colors.linkedin, fontSize: 15, position: 'absolute', right: 15, top: 3}}>
                    SEE ALL (3)
                </Text>
            </View>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
            >
            <Courses image={require('../assets/thumb4.png')} title={'COURSE'} course={'SEO Fundamentals'} trend={'POPULAR'} time={'1h 40m'} />
            <Courses image={require('../assets/thumb2.png')} title={'COURSE'} course={'Video Editing'} trend={'POPULAR'} time={'55m'} />
            <Courses image={require('../assets/thumb3.png')} title={'COURSE'} course={'Security Fundamentals'} trend={'POPULAR'} time={'1h'} />
            </ScrollView>

            <View style={{flexDirection: 'row', marginTop: 40}}>
                <Text style={{color: Colors.black, fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                    Saved
                </Text>
                <Text style={{color: Colors.linkedin, fontSize: 15, position: 'absolute', right: 15, top: 3}}>
                    SEE ALL (10)
                </Text>
            </View>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
            >
            <Courses image={require('../assets/thumb6.png')} title={'COURSE'} course={'SEO Fundamentals'} trend={'POPULAR'} time={'1h 40m'} />
            <Courses image={require('../assets/thumb4.png')} title={'COURSE'} course={'Video Editing'} trend={'POPULAR'} time={'55m'} />
            <Courses image={require('../assets/thumb5.png')} title={'COURSE'} course={'Security Fundamentals'} trend={'POPULAR'} time={'1h'} />
            </ScrollView>
        </ScrollView>
        </View>
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
        marginLeft: 15,
        justifyContent: "center",
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subCategory: {
        fontSize: 15,
        color: Colors.linkedin,
        fontWeight: 'bold'
    }
})

export default MyLearning;