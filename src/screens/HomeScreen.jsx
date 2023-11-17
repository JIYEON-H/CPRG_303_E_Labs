import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import React, {useState} from 'react';
import {Button, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
