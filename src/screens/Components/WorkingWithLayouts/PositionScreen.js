import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/*
    absolute: Ignores it's siblings 
    Top left right bottom: adds the change after the initial layout has been placed
*/

const PositionScreen = () => {
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

    },
    textTwo: {
        borderWidth: 1,
        borderColor: 'green',
        flex: 3,
        position: 'absolute',
        ...StyleSheet.absoluteFillObject

    },
    textThree: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2

    },
})

export default PositionScreen
