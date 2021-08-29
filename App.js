import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import MainApp from './src/screens/MainApp';


export default function App() {
  const [todo, setTodo] = useState(null)
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
  const removeTodo = () => {

  }
  
  if (todo) {
    conteiner = <Redact />
  }
  return (
    <View>
      <Navbar title='Best APP' />
      <View style={ styles.container }>
        <MainApp todos={ todos }
          addTodo={ addTodo }

        />
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
