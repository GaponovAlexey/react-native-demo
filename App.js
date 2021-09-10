import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainLayout from './src/MainLayout';
import TodoState from './src/context/todo/TodoState';
import ScrenState from './src/context/screens/ScrenState';



async function loadAppLication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}


export default function App() {
  const [isReady, setIsReady] = useState(false)
  if (!isReady) {
    return <AppLoading
      startAsync={ loadAppLication }
      onError={ err => console.log(err) }
      onFinish={ () => setIsReady(true) }
    />
  }

  return (
    <ScrenState >
      <TodoState >
        <MainLayout />
      </TodoState >
    </ScrenState>
  );
}






