import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    useEffect(() => {
        setRed(Math.floor(Math.random() * 256))
        setGreen(Math.floor(Math.random() * 256))
        setBlue(Math.floor(Math.random() * 256))
        return () => {
            setRed(0);
            setGreen(0);
            setBlue(0);
        }
    }, [])

    const setColor = (color, change) => {
        switch (color) {
            case "red":
                if (red + change > 255 || red + change < 0) return
                setRed(red + change)
                break;
            case "green":
                if (green + change > 255 || green + change < 0) return
                setGreen(green + change)
                break;
            case "blue":
                if (blue + change > 255 || blue + change < 0) return
                setBlue(blue + change)
                break;
            default:
                return
        }

    }

    return (
        <View style={styles.container}>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <Text style={styles.text}>RGB: Red: {red}, Green: {green}, Blue: {blue}</Text>
            <View style={{ marginTop: 25, height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
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
