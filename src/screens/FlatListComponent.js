import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const FlatListComponent = () => {
    const friends = [
        { name: 'Jeremy', age: "27", key: "1" },
        { name: 'Alex', age: "28", key: "2" },
        { name: 'Cameron', age: "27", key: "3" },
        { name: 'Rob', age: "28", key: "4" },
        { name: 'Bell', age: "24", key: "5" },
        { name: 'Nick', age: "24", key: "6" },
        { name: 'Shamy', age: "30", key: "7" },
        { name: 'Jordan', age: "24", key: "8" },
        { name: 'Siri', age: "36", key: "9" },
    ]
    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.listItem} >{`${item.name}-${item.age}s`}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    listItem: {
        textAlign: 'center',
        margin: 12
    }
})

export default FlatListComponent
