import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = "Keaton R. Gallagher"
    return (
        <View>
            <Text style={styles.textOne}>
                First React Native Tutorial \
            </Text>
            <Text style={styles.textTwo}>
                {name}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textOne: {
        fontSize: 45,
        textAlign: 'center'
    },
    textTwo: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default ComponentsScreen
