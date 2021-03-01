import React, { useReducer } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const COLOR_INCREMENT = 10;

/*
    Reducer function - really means function that manages change to an object
    Function that gets called with two objects
    Argument #1 - Object that has all of our state in it
    Argument #2 - Object that describes the update we want to make
    We look at Argument #2 and use it to decide how to change Argument #1
    Two technicalities
        1. We never change Argument #1 directly. 
        2. We must always return a value to be used as Argument #1
*/

const reducer = (state, action) => { // Function outside of component so we don't get confused with state value
    // state = { red: number, green: number, blue: number }
    // action = { colorToChange: 'red' || 'green' ||  'blue', amount: 15 || -15 }  
    switch (action.type) {
        // Never going to change state directly
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload }
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state; // Always returning the state when using reducer
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    // Dispatch - running the reducer
    const { red, green, blue } = state
    return (

        <View style={styles.container} >
            <ColorCounter
                onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
            <Text style={styles.text}>RGB: Red: {red}, Green: {green}, Blue: {blue}</Text>
            <View style={{ marginTop: 25, height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </ View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default SquareScreen
