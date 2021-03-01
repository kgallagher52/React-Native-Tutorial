import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/*
    marginVertical - adds margin to the top and bottom
    marginHorizontal - adds margin to the left and right
*/

const BoxLayout = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>BOX SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20
    }
})

export default BoxLayout
