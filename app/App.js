import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from "expo";

import { NavBar } from "./src/components/NavBar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";


const loadApp = async () => {
  await Font.loadAsync({
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todoList, setTodoList] = useState([]);

  if (!isReady) {
    return <AppLoading startAsync={loadApp}
                       onError={err => console.log(err)}
                       onFinish={() => setIsReady(true)}/>
  }

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
      if (todo.id === id) {
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
