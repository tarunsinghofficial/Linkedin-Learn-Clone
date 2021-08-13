import React from 'react';
import { 
    View, 
    Image, 
    Text, 
    StyleSheet,
    ScrollView,
    FlatList,
    StatusBar
} from 'react-native';

import Colors from '../components/Colors';
import Courses from '../components/Courses';
import Highlight from '../components/Highlight';
import NavigationBar from '../components/NavigationBar';

function HomePage(props) {
    return (
        <View backgroundColor="white">
        <StatusBar backgroundColor={'#006097'} />
        <NavigationBar />
        <ScrollView>
        <Highlight />
        <Text style={{marginLeft: 10,fontSize: 20, fontWeight: 'bold'}}> Top picks for Tarun </Text>
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
        >
            <Courses image={require('../assets/thumb1.png')} title={'COURSE'} course={'SEO Fundamentals'} trend={'POPULAR'} time={'1h 40m'} />
            <Courses image={require('../assets/thumb2.png')} title={'COURSE'} course={'Video Editing'} trend={'POPULAR'} time={'55m'} />
            <Courses image={require('../assets/thumb3.png')} title={'COURSE'} course={'Security Fundamentals'} trend={'POPULAR'} time={'1h'} />
        </ScrollView>
        <Text style={{marginLeft: 17, marginTop: 30 ,fontSize: 20, fontWeight: 'bold'}}>Live office hours with examples</Text>
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
        >
            <Courses image={require('../assets/thumb4.png')} title={'COURSE'} course={'Online Marketing'} trend={'In 4 days'} time={'JULY 7, 8:00 pm'} />
            <Courses image={require('../assets/thumb5.png')} title={'COURSE'} course={'Advanced Excel'} trend={'In next Week'} time={'JULY 20, 12:00 pm'} />
            <Courses image={require('../assets/thumb6.png')} title={'COURSE'} course={'Public Speaking'} trend={'Coming Soon'} time={'SEP 24, 6:00 pm'} />
        </ScrollView>
        <Text style={{marginLeft: 17, marginTop: 30 ,fontSize: 20, fontWeight: 'bold'}}>Trending Now</Text>
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
        >
            <Courses image={require('../assets/thumb3.png')} title={'COURSE'} course={'Online Marketing'} trend={'FEATURED'} time={'1h 40m'} />
            <Courses image={require('../assets/thumb2.png')} title={'COURSE'} course={'Advanced Excel'} trend={'FEATURED'} time={'1h 40m'} />
            <Courses image={require('../assets/thumb5.png')} title={'COURSE'} course={'Public Speaking'} trend={'FEATURED'} time={'1h 40m'} />
        </ScrollView>
        <Text style={{marginLeft: 17, marginTop: 30 ,fontSize: 20, fontWeight: 'bold'}}>Computer Science Programming</Text>
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
        >
            <Courses image={require('../assets/thumb6.png')} title={'COURSE'} course={'Online Marketing'} trend={'POPULAR'} time={'50m'} />
            <Courses image={require('../assets/thumb3.png')} title={'COURSE'} course={'Advanced Excel'} trend={'POPULAR'} time={'1h 10m'} />
            <Courses image={require('../assets/thumb1.png')} title={'COURSE'} course={'Public Speaking'} trend={'POPULAR'} time={'44m'} />
        </ScrollView>
        <Text style={{marginLeft: 17, marginTop: 30 ,fontSize: 20, fontWeight: 'bold'}}>Most Liked on Linkedin</Text>
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
        >
            <Courses image={require('../assets/thumb4.png')} title={'COURSE'} course={'Online Marketing'} trend={'In 4 days'} time={'JULY 7, 8:00 pm'} />
            <Courses image={require('../assets/thumb5.png')} title={'COURSE'} course={'Advanced Excel'} trend={'In next Week'} time={'JULY 20, 12:00 pm'} />
            <Courses image={require('../assets/thumb6.png')} title={'COURSE'} course={'Public Speaking'} trend={'Coming Soon'} time={'SEP 24, 6:00 pm'} />
        </ScrollView>
        <Text style={{marginLeft: 17, marginTop: 30 ,fontSize: 20, fontWeight: 'bold'}}>Learn Top skills for people like you</Text>
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
        >
            <Courses image={require('../assets/thumb1.png')} title={'COURSE'} course={'SEO Fundamentals'} trend={'POPULAR'} time={'1h 40m'} />
            <Courses image={require('../assets/thumb2.png')} title={'COURSE'} course={'Video Editing'} trend={'POPULAR'} time={'55m'} />
            <Courses image={require('../assets/thumb3.png')} title={'COURSE'} course={'Security Fundamentals'} trend={'POPULAR'} time={'1h'} />
        </ScrollView>
        </ScrollView>
        </View>
    );
}


export default HomePage;