import React from 'react';
import { View, StyleSheet, Platform } from "react-native";

import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";


export const NavBar = ({ text }) => {
  return (
    <View style={{...styles.navBar, ...Platform.select({
        ios: styles.navbarIOS,
        android: styles.navbarAndroid
      })}}>
      <AppTextBold style={styles.text}>{text}</AppTextBold>
    </View>
  )
};

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIOS: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : "#fff",
    fontSize: 20
  }
});