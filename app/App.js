import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { NavBar } from "./src/components/NavBar";
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
  };

  const updateTodo = (id, title) => {
    setTodoList(prev => prev.map(todo => {
      if(todo.id === id){
        todo.title = title;
      }
      return todo
    }))
  };

  let content = (<MainScreen
    todoList={todoList}
    addTodo={addTodo}
    removeTodo={removeTodo}
    openTodo={setTodoId}
  />);

  if (todoId) {
    const selectedTodo = todoList.find(todo => todo.id === todoId);
    content = <TodoScreen
      goBack={() => setTodoId(null)}
      todo={selectedTodo}
      removeTodo={removeTodo}
      onSave={updateTodo}
    />
  }

  return (
    <View>
      <NavBar text="Todo"/>
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
