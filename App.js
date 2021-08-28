import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import MainScrins from './src/screens/MainScrins';
import TodoScreen from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])



  const addTodo = title => {
    setTodos(e => [{
      id: Date.now().toString(),
      title
    }, ...e])
  }
  const removeTodo = id => {
    setTodos(e => e.filter(e => e.id !== id))
  }

  let content = (
    <MainScrins todos={ todos }
      removeTodo={ removeTodo }
      addTodo={ addTodo }
    />
  )
  if (todoId) {
    content = <TodoScreen />
  }



  return (
    <View>
      <Navbar title='Add to-do' />
      <View style={ styles.container } >
        {content}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
