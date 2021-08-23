import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])
  const addTodo = title => {

    
    setTodos(prev => {
      return [
        {
          id: Date.now().toString(),
          title
        }, ...prev
      ]
    })
  }

  return (
    <View >
      <Navbar title={ 'Title-Appsrr!' } />
      <View style={ styles.container } >
        <Text>last name</Text>
        <AddTodo onSubmit={ addTodo } />
        <View>
          { todos.map(s => <Todo key={ s.id } todo={ s } />) }
        </View>
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
