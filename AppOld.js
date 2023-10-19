import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const App = () => {
    return (
      return (
        <View style={styles.container}>
          <View style={styles.div}>
            <Text style={styles.h1}>
              Settings
            </Text>
          </View>
        </View>
      );
      
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    h1: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Century Gothic',
        textAlign: 'center'
    },
    h2: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Century Gothic',
        textAlign: 'center'
    },
    content: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Century Gothic',
        textAlign: 'center'

    },
    div: {
        backgroundColor: 'rgba(255, 255, 255, 0.31)',
        borderRadius: 25,
        margin: 10,
        padding: 15
    },

    button: {
        backgroundColor: 'rgba(0, 255, 0, 0.31)',
        borderRadius: 25,
        margin: 10,
        padding: 15
    },

    buttonClicked: {
        backgroundColor: 'rgba(255, 0, 0, 0.31)',
        borderRadius: 25,
        margin: 10,
        padding: 15
    },

});

export default App;
