import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from "expo";

import { MainLayout } from "./src/layouts/MainLayout";
import { TodoState } from "./src/context/todo/TodoState";


const loadApp = async () => {
  await Font.loadAsync({
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading startAsync={loadApp}
                       onError={err => console.log(err)}
                       onFinish={() => setIsReady(true)}/>
  }

  return (
    <TodoState>
      <MainLayout/>
    </TodoState>
  );
}
