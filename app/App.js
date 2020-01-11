import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  
  const addTodo = (title) => {
    setTodoList(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }])
  };
  
  return (
    <View >
      <Navbar text={'Hello React Native'} />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo}/>
        <View>
          {todoList.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
