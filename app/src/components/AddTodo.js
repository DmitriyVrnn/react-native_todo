import React from 'react';
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = props =>{
  return(
    <View style={styles.wrapper}>
      <TextInput style={styles.input}/>
      <Button title="Добавить" style={styles.button}/>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  },
  button: {
      
  }
})
