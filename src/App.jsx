import {
  TextInput,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import MyComp from '../my-comp';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  const [taskText, setTaskText] = useState('');
  const Stack = createNativeStackNavigator();

  let condition = true;

  let dynamicStyles = condition ? styles.text : styles.textRed;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = {id: n, name: `Item ${n}`};
    data.push(item);
  }

  const renderItem = ({...item}) => <Text> {item.text} </Text>;

  return (
    <NavigationContainer>
      {/* <ScrollView style={styles.container}> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      {/* </ScrollView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //alignItems: 'center', // only work when using <View>, use <ScrollView> cannot use alignItems
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  textRed: {
    fontSize: 20,
    color: 'red',
  },
  image: {
    width: 240,
    height: 150,
    // width: 200,
    // height: 150,
  },
});

export default App;
