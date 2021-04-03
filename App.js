import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([]);

  // todo를 add할 때 사용하는 함수
  const addTodo = text => {
    // 이전의 todo 값과 id, value, checked 속성을 변경해줌.
    setTodos([
      ...todos,
      {id: Math.random.toString(), textValue: text, checked: false},
    ])
  }

  // todo를 remove할 때 사용하는 함수
  const onRemove = id => e => {
    // 각 아이템의 고유 id를 받아와서 해당 id를 가진 아이템 객체만 제외하고 새로운 배열을 만든다.
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
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

export default App;
