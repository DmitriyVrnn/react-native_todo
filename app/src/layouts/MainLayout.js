import React, { useState, useContext } from 'react';
import { NavBar } from "../components/NavBar";
import { View, StyleSheet, Alert } from "react-native";

import { MainScreen } from "../screens/MainScreen";
import { TodoScreen } from "../screens/TodoScreen";
import { ScreenContext } from "../context/screen/screenContext";

import { THEME } from "../theme";


export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  /*const removeTodo = (id) => {
    const selectedTodo = todoList.find(todo => todo.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${selectedTodo.title} ?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить', onPress: () => {
            setTodoId(null);
            setTodoList(prev => prev.filter(item => item.id !== id))
          }
        },
      ],
      { cancelable: false },
    );
  };*/

  return (
    <View>
      <NavBar text="Todo"/>
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  }
});