import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';

export default function App() {
  const [value, setValue] = useState([
    { id: 1, title: 'da' },
    { id: 2, title: 'da' },
    { id: 3, title: 'da' },
    { id: 4, title: 'da' },
    { id: 5, title: 'da' },
    { id: 6, title: 'da' },
    { id: 7, title: 'da' },
    { id: 8, title: 'da' },
    { id: 9, title: 'da' },
    { id: 10, title: 'da' },
    { id: 11, title: 'da' },
    { id: 12, title: 'da' },
    { id: 13, title: 'da' },
    { id: 14, title: 'da' },
    { id: 15, title: 'da' },
    { id: 16, title: 'da' },
    { id: 17, title: 'da' },
  ])
  const newTodo = title => {
    setValue(prev => [{
      id: Date.now().toString(),
      title
    }, ...prev])
  }


  return (
    <View >
      <Navbar title='Title App!' ></Navbar>
      <ScrollView style={ styles.container } >
        <Text>last name</Text>
        <AddTodo
          onSubmit={ newTodo }
        />
        <FlatList
          data={ value }
          renderItem={ ({ item }) => (<Todo todo={item } />) }
          keyExtractor={ item => item.id.toString() }
        />
        <ScrollView >
          {/*{ value.map(s => <Todo key={ s.id } todo={ s } />) }*/}
        </ScrollView>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
