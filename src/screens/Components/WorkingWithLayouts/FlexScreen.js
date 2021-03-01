import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/*
    alignItems: 'stretch' on parent * DEFAULT
*/

const FlexScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOne}>Child 1</Text>
            <Text style={styles.textTwo}>Child 2</Text>
            <Text style={styles.textThree}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    textOne: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 5,
        alignSelf: 'center'

    },
    textTwo: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 3
    },
    textThree: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2

    },
})

export default FlexScreen
