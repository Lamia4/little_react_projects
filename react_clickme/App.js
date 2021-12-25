import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Klicker from "./components/Klicker";
import "./App.css";

export default function App() {

  const helloWorld= "Hello World"

  return (
    <div className="container">

    {/* <View style={styles.container}> */}
      <Text>Das ist die Elternkomponente</Text>
      {/* <StatusBar style="auto" /> */}
     <Klicker helloWorld= {helloWorld}/> 
    {/* </View> */}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
