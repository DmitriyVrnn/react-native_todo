import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from "./src/components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar text={'Hello React Native'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
