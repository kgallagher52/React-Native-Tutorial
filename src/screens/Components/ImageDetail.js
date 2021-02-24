import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';

const ImageDetail = ({ title, imageSrc, count }) => {
    return (
        <View>
            <Image source={imageSrc} />
            <Text>{title}</Text>
            <Text>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});


export default ImageDetail
