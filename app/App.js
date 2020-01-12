import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  
  const addTodo = (title) => {
    setTodoList(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }])
  };
  
  const removeTodo = (id) => {
    setTodoList(prev => prev.filter(item => item.id !== id))
  };
  
  return (
    <View >
      <Navbar text="Todo" />
      <View style={styles.container}>
        <MainScreen
          todoList={todoList}
          addTodo={addTodo}
          removeTodo={removeTodo}/>
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
