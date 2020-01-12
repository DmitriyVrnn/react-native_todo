import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
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
  
  let content = (<MainScreen todoList={todoList} addTodo={addTodo} removeTodo={removeTodo} />);
  
  if(todoId){
    content = <TodoScreen/>
  }
  
  return (
    <View >
      <Navbar text="Todo" />
      <View style={styles.container}>
        {content}
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
