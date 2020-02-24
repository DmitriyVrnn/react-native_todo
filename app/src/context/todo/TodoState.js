import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';

import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import { ScreenContext } from "../screen/screenContext";

import { ADD_TODO, CLEAR_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO } from "../types";


export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = title => dispatch({ type: ADD_TODO, title });

  const removeTodo = id => {
    const selectedTodo = state.todos.find(todo => todo.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${selectedTodo.title} ?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          }
        },
      ],
      { cancelable: false },
    );
  };

  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoadr = () => dispatch({ type: HIDE_LOADER });

  const showError = (error) => dispatch({ type: SHOW_ERROR, error });

  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
      }}>{children}
    </TodoContext.Provider>
  )
};