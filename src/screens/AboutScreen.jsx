import {Text, Button, TextInput, View, FlatList, Image} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import React, {useState} from 'react';

const AboutScreen = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  const handleTextInput = text => {
    setInputText(text);
  };

  const handlePress = () => {
    // some code
  };

  return (
    <MainLayout>
      <Text>My First App</Text>
      <Button title="Go to HOME" onPress={() => navigation.navigate('Home')} />
      {/* <Image source={require('./myPic.jpg')} style={styles.image} /> */}
      <TextInput
        placeholder="Please enter your name."
        value={inputText}
        onChangeText={handleTextInput}
      />
      {/* <Button title="A button!" onPress={handlePress} /> */}
      {/* <FlatList data={data} renderItem={renderItem} /> */}
    </MainLayout>
  );
};

export default AboutScreen;
