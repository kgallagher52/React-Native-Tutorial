import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StarterLayout = () => {
    return (
        <View style={styles.container}>
            <Text>Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default StarterLayout
