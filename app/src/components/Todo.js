import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, removeTodo }) => {
  const onRemoveHandler = () => {
    removeTodo(todo.id);
  };

  return(
    <TouchableOpacity 
      activeOpacity={0.5} 
      onPress={() => console.log('Pressed', todo.id)}
      onLongPress={onRemoveHandler}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const $gray = '#eee';
const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: $gray,
    borderRadius: 5,
    marginBottom: 10
  }
})