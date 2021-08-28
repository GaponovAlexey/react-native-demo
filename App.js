import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import MainScrins from './src/screens/MainScrins';
import TodoScreen from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'Выучить React Native' },
    { id: '2', title: 'Создать React Native приложение' }
  ])



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
    <MainScrins onSubmit={ addTodo }
      removeTodo={ removeTodo }
      todos={ todos }
      onOpen={ setTodoId }

    />
  )
  if (todoId) {
    const selectedTodo = todos.find(e => e.id === todoId)
    content = <TodoScreen todo={ selectedTodo}  onBack={ () => setTodoId(null) } />
  }



  return (
    <View>
      <Navbar title='Add to-do' />
      <View style={ styles.container } >
        { content }
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
