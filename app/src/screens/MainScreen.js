import React from 'react';
import { View, StyleSheet, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";


export const MainScreen = ({ addTodo, todoList, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todoList}
      renderItem={({ item }) =>
        <Todo todo={item}
              removeTodo={removeTodo}
              onOpen={openTodo}
        />
      }/>
  );

  if (todoList.length === 0) {
    content = (
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={require('../../assets/no-items.png')}
        />
      </View>)
  }

  return (
    <View>
      <AddTodo addTodo={addTodo}/>
      {content}
    </View>
  )
};

const styles = StyleSheet.create({
  imageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  }
});