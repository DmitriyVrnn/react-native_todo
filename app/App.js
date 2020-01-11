import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
  
  const removeTodo = (id) => {
    setTodoList(prev => prev.filter(item => item.id !== id))
  };
  
  return (
    <View >
      <Navbar text="Todo" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todoList} 
          renderItem={({item}) => 
            <Todo todo={item}
              removeTodo={removeTodo}/>
          }/>
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
