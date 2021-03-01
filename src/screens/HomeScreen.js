import React from "react";
import { StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to screen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Friend List"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Count')}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('ColorComplex')}
      />
      <Button
        title="Go to Enter Name Screen"
        onPress={() => navigation.navigate('EnterName')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
