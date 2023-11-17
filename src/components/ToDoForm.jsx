/**
 * My To Do List Form
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

function ToDoForm({addTask}) {
  const [taskText, setTskText] = React.useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default ToDoForm;
