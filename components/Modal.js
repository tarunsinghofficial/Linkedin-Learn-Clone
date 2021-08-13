import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, marginTop: 100}}>
        <Text style={{fontSize: 80}}>Normal</Text>
        <Button title="Show" onPress={()=> setModalVisible(true)} />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
                <View style={{backgroundColor: '#ffffff', margin: 50, padding: 40, borderRadius: 10}}>
                    <Text style={{fontSize: 80}}>Modal text</Text>
                    <Button title="Close" onPress={()=> setModalVisible(false)} />
                </View>
            </View>
        </Modal>
    </View>
  );
};

export default App;