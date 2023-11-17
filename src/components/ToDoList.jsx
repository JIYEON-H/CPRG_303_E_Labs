/**
 * My To Do List
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

function ToDoList({tasks}) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>

            {/* <View style={[styles.task]}>
            {tasks.map(task => (
              <Text style={styles.taskText} key={task.index}>
                {task}
              </Text>
            ))}
          </View> */}
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
