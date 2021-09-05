import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/component/Navbar';
import CorTodo from './src/screens/CorTodo';
import MainTodo from './src/screens/MainTodo';


export default function App() {
  const [validID, setValid] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'my APP' },
    { id: '2', title: 'my APP forever' }
  ])

  const addTodo = (title) => {
    setTodos(todo => [{
      id: Date.now().toString(),
      title
    }, ...todo])
  }
  let editTitle = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }
  let content = (
    <MainTodo
      onCor={ setValid }
      todos={ todos }
      addTodo={ addTodo } />
  )
  if (validID) {
    const todoVal = todos.find(e => e.id === validID)
    content = <CorTodo
      todos={ todos }
      back={ () => setValid(null) }
      todo={ todoVal }
      editTitle={ editTitle }
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

