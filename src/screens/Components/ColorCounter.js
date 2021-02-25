import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 12
    },
    text: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default ColorCounter
