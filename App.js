import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import MainApp from './src/screens/MainApp';
import TodoTitle from './src/screens/TodoTitle';


export default function App() {
  const [todoID, setTodoID] = useState('2')
  const [todos, setTodos] = useState([
    { id: '1', title: 'my APP' },
    { id: '2', title: 'the best APP' },
    { id: '3', title: 'forever APP' },
  ])
  const addTodo = (title) => {
    setTodos(e => [{
      id: Date.now().toString(),
      title
    }, ...e]
    )
  }
  const removeTodo = (id) => {
    setTodos(prev => prev.filter(e => e.id !== id))
  }


  let conteiner = (
    <MainApp todos={ todos }
      addTodo={ addTodo }
      removeTodo={ removeTodo }
      openTodo={ setTodoID }
    />
  )
  if (todoID) {
    const todoback = todos.find(e => e.id === todoID)
    conteiner = <TodoTitle
      todoback={ todoback } 
      todo={ todoback }
      onBack={ () => setTodoID(null)}
      />
  }
  return (
    <View>
      <Navbar title='Best APP' />
      <View style={ styles.container }>
        { conteiner }
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

