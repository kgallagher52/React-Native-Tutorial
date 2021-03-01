import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

/*
    TextInput comes with no styling
    * ios capitalizes the first letter in TextInput autoCapitalize="none"s
    * You have to turn off auto correct if you don't want it for IOS autoCorrect={false} 
*/

const EnterName = () => {
    const [name, setName] = useState("");
    return (
        <View>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        margin: 18,
        padding: 12,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default EnterName
