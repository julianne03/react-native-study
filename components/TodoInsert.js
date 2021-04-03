import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TodoInsert = ({onAddTodo}) => {
    // newTodoItem : 새로 입력한 텍스트의 상태를 나타내고, 
    // setNewTodoItem : newTodoItem을 업데이트하는 함수
    const [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    }
    
    // add 버튼을 눌렀을 때 동작하는 이벤트 핸들러
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add an item!"
                placeholderTextColor={'#999'}
                onChangeText={todoInputHandler}
                value={newTodoItem}
                autoCorrect={false}
            />
            <View style={styles.button}>
                <Button title={'ADD'} onPress={addTodoHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
    button : {
        marginRight: 10,
    }
})

export default TodoInsert;