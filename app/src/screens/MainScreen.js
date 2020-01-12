import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todoList, removeTodo}) => {
  return(
    <View>
      <AddTodo addTodo={addTodo} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todoList}
        renderItem={({item}) =>
          <Todo todo={item}
            removeTodo={removeTodo}/>
        }/>
    </View>
  )
};

const styles = StyleSheet.create({

})