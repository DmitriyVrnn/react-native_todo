import React from 'react';

import { View, Text, StyleSheet } from "react-native";
import {THEME} from "../theme";

export const Navbar = ({ text }) => {
  return(
    <View style={styles.navbar}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10
  },
  text: {
    color: THEME.WHITE_COLOR,
    fontSize: 20
  }
});