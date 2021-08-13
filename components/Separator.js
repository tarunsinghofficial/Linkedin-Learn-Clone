import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from './Colors';

function Separator(props) {
    return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
    separator: {
    marginLeft: 50,
      width: "100%",
      height: 1,
      backgroundColor: Colors.lightgray,
    },
  });

export default Separator;