import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from './src/component/Navbar';
import MainScreen from './src/screens/MainScreen';
import ViewTodo from './src/screens/ViewTodo';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
async function loadAppLication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}



export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [validID, setValid] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'my APP' },
    { id: '3', title: 'my APP' },
    { id: '4', title: 'my APP' },
    { id: '5', title: 'my APP' },
    { id: '6', title: 'my APP' },
    { id: '7', title: 'my APP' },
    { id: '8', title: 'my APP' },
    { id: '9', title: 'my APP' },
    { id: '10', title: 'my APP' },
    { id: '11', title: 'my APP' },
    { id: '13', title: 'my APP' },
    { id: '14', title: 'my APP' },
    { id: '15', title: 'my APP' },
    { id: '16', title: 'my APP' },
    { id: '17', title: 'my APP' },
    { id: '18', title: 'my APP' },
    { id: '19', title: 'my APP' },
    { id: '12', title: 'my APP' },
    { id: '2', title: 'my APP forever' },
    { id: '20', title: 'my APP forever' }
  ])
  if (!isReady) {
    return <AppLoading
      startAsync={ loadAppLication }
      onError={ err => console.log(err) }
      onFinish={ () => setIsReady(true) }
    />
  }
  const addTodo = title => {
    setTodos(todo => [{
      id: Date.now().toString(),
      title
    }, ...todo])
  }
  let corectTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let removeTodo = (id) => {
    setTodos(old => old.filter(e => e.id !== id))
    setValid(null)
  }

  let content = (
    <MainScreen
      addTodo={ addTodo }
      todos={ todos }
      TodoID={ setValid }
    />
  )
  if (validID) {
    const todoValue = todos.find(e => e.id = validID)
    content = <ViewTodo todo={ todoValue }
      backMain={ () => setValid(null) }
      corectTodo={ corectTodo }
      deletTodo={ removeTodo }
    />
  }
  return (
    <View>
      <Navbar />
      <View style={ styles.container }>
        { content }
      </View>
    </View >
  );
}




const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

