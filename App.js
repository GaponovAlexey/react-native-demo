import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddTodo from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';


export default function App() {
  const [state, setState] = useState([])
  const addTodo = title => {
    setState(e => [{
      id: Date.now().toString(),
      title
    }, ...e])
  }


  return (
    <View style={ styles.container } >
      <Navbar title='Add to-do' />
      <AddTodo onSubmit={ addTodo } />
      <View>
        { state.map(e => <Todo key={ e.id } todo={ e } />) }

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: 30,
    //paddingVertical: 20,
  },
});
