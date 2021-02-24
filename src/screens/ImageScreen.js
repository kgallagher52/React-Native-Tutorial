import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ImageDetail from '../screens/Components/ImageDetail'

const ImageScreen = () => {
    return (
        <ScrollView>
            <ImageDetail count={0} imageSrc={require('../../assets/images/Firebending_emblem.png')} title="Fire" />
            <ImageDetail count={0} imageSrc={require('../../assets/images/water.png')} title="Water" />
            <ImageDetail count={0} imageSrc={require('../../assets/images/air.png')} title="Air" />
            <ImageDetail count={0} imageSrc={require('../../assets/images/earth.png')} title="Earth" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({

});


export default ImageScreen
