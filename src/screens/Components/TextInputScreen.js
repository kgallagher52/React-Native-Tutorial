import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

/*
    TextInput comes with no styling
    * ios capitalizes the first letter in TextInput autoCapitalize="none"s
    * You have to turn off auto correct if you don't want it for IOS autoCorrect={false} 
*/

const TextInputScreen = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    return (
        <View>
            <Text style={styles.headline}>Enter your name:</Text>

            <TextInput
                autoCapitalize="none"
                style={styles.input}
                autoCorrect={false}
                value={name}
                onChangeText={updatedName => setName(updatedName)}
            />
            <Text style={styles.text}>Your Name:</Text>
            <Text style={styles.text}>{name}</Text>


            <Text style={styles.headline}>Enter your password:</Text>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                autoCorrect={false}
                value={pass}
                onChangeText={updatedPass => setPass(updatedPass)}
            />
            {pass.length < 5 && <Text style={styles.text}>Password must be longer then 5 characters.</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 30,
        textAlign: 'center'
    },
    text: {
        textAlign: 'center'
    },
    input: {
        margin: 18,
        padding: 12,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextInputScreen
