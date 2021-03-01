import React, { useReducer } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, count: action.payload + count }
        case 'subtract':
            return { ...state, count: action.payload - count }
        default:
            return state;
    }
}

const ColorCounter = ({ color }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => dispatch({ type: 'add', payload: 1 })} />
            <Button title={`Decrease ${color}`} onPress={() => dispatch({ type: 'subtract', payload: 1 })} />
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
