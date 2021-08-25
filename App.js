import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import Todo from './src/Todo';

export default function App() {
  const [value, setValue] = useState([])
  const newTodo = title => {
    setValue(e => [{
      id: Date.now().toString(),
      title
    }, ...e])
  }
  const remuveTodo = id => {
    setValue(e => e.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title='Navbar' />
      <View style={ styles.container } >
        <AddTodo  onSubmit={ newTodo } />
        <Text>
          <FlatList
            data={ value }
            renderItem={ ({ item }) => (<Todo onRemove={ remuveTodo } key={ item.id }
              todo={ item }
            />) }
          />
        </Text>
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
