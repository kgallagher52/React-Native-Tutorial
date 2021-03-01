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
    switch (action.colorToChange) {
        // Never going to change state directly
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount }
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount }
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount }
        default:
            return state; // Always returning the state when using reducer
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    // Dispatch - running the reducer

    return (

        <View style={styles.container}>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />
            <Text style={styles.text}>RGB: Red: {state.red}, Green: {state.green}, Blue: {state.blue}</Text>
            <View style={{ marginTop: 25, height: 200, width: 200, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
        </View>
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
