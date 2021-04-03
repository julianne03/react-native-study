import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import {DrawerActions} from 'react-navigation-drawer';
import TodoInsert from '../components/todo/TodoInsert';
import TodoList from '../components/todo/TodoList';

const TodoListScreen = (props) => {

  const [todos, setTodos] = useState([]);

  // todo를 add할 때 사용하는 함수
  const addTodo = text => {
    // 이전의 todo 값과 id, value, checked 속성을 변경해줌.
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ])
    console.log(todos);
  }

  // todo를 remove할 때 사용하는 함수
  const onRemove = id => e => {
    // 각 아이템의 고유 id를 받아와서 해당 id를 가진 아이템 객체만 제외하고 새로운 배열을 만든다.
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 체크 버튼을 누르면 작동하는(완료 체크 표시를 하는) 함수
  const onToggle = id => e => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        )
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menuIcon}
          onPress={() =>
            props.navigation.dispatch(DrawerActions.openDrawer())
          }>
          <SimpleLineIcons name="menu" size={30} color="white" />
          <Text style={styles.appTitle}>Hello Todolist</Text>
      </TouchableOpacity>
      
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  menuIcon: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    textAlign: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 50,
    marginBottom: 30,
    fontWeight: '300',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input : {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20
  }
});

export default TodoListScreen;
