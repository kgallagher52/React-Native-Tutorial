import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const CounterScreen = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
            <Button title="Decrease" onPress={() => setCount(count - 1)} />
            <Text style={styles.text}>Current Count: {count}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default CounterScreen
