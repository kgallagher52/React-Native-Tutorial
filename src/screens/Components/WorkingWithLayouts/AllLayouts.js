import React from 'react'
import { View, StyleSheet } from 'react-native'

/*
    absolute: Ignores it's siblings 
    Top left right bottom: adds the change after the initial layout has been placed
*/

const AllLayouts = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOne} />
            <View style={styles.viewTwo} />
            <View style={styles.viewThree} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        width: 50,
        height: 50,
        borderColor: 'black',
        backgroundColor: 'red',
    },
    viewTwo: {
        width: 50,
        height: 50,
        borderColor: 'black',
        backgroundColor: 'green',
        // top:50,
        alignSelf: 'flex-end'
        // marginTop:50
    },
    viewThree: {
        width: 50,
        height: 50,
        borderColor: 'black',
        backgroundColor: 'purple',
    },
})

export default AllLayouts
