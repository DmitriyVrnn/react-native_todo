import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";

import { THEME } from "../theme";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";


export const MainScreen = ({ addTodo, todoList, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width)
    };
    Dimensions.addEventListener('change', update);
    return () => {
      Dimensions.removeEventListener('change', update)
    }
  });

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todoList}
        renderItem={({ item }) =>
          <Todo todo={item}
                removeTodo={removeTodo}
                onOpen={openTodo}
          />
        }/>
    </View>
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