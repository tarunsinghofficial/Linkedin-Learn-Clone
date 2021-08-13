import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';
import Colors from '../components/Colors';

const {width, height} = Dimensions.get('window');

function Highlight(props) {
    return (
        <View style={{width: "100%", height: 180, backgroundColor: Colors.lightgray, marginBottom: 10}}>
            <Swiper 
            horizontal={true} 
            autoplay={true}
            autoplayTimeout={10}
            dotColor={Colors.linkedin}
            >
            <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/thumb3.png')} 
                    />
                    <Text style={{position: 'absolute', top: 60, left: 25, color: Colors.black, fontSize: 18, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    Succesful business {'\n'}tip and tricks!
                    </Text>
                    <Text style={{position: 'absolute', top: 110, left: 25, color: Colors.black, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2,}}>
                    Released 3 weeks ago
                    </Text>
                    <Text style={{position: 'absolute', top: 25, left: 25, backgroundColor: Colors.white, color: Colors.black, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    NEW
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/thumb5.png')} 
                    />
                    <Text style={{position: 'absolute', top: 60, left: 25, color: Colors.black, fontSize: 18, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    Succesful business {'\n'}tip and tricks!
                    </Text>
                    <Text style={{position: 'absolute', top: 110, left: 25, color: Colors.black, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2,}}>
                    Released 3 weeks ago
                    </Text>
                    <Text style={{position: 'absolute', top: 25, left: 25, backgroundColor: Colors.white, color: Colors.black, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    NEW
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/thumb1.png')} 
                    />
                    <Text style={{position: 'absolute', top: 60, left: 25, color: Colors.black, fontSize: 18, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    Succesful business {'\n'}tip and tricks!
                    </Text>
                    <Text style={{position: 'absolute', top: 110, left: 25, color: Colors.white, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2,}}>
                    Released 3 weeks ago
                    </Text>
                    <Text style={{position: 'absolute', top: 25, left: 25, backgroundColor: Colors.white, color: Colors.black, fontSize: 12, borderRadius: 2, marginLeft: 6, marginTop: 6, padding: 2, fontWeight: 'bold'}}>
                    NEW
                    </Text>
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 380,
        height: 150,
        borderRadius: 10,
        borderColor: Colors.gray,
        borderWidth: 0.5,
        position: 'relative'
    }
       
})

export default Highlight;