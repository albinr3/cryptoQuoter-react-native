
import React, {useState} from 'react';


import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';

const App= () => {



  return (
    <>
      <Header/>
      <Image
        style={s.image}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View style={s.content}>
        <Form/>

        
      </View>
    </>
  );
};

const s = StyleSheet.create({
  image:{
    width: "100%",
    height: 150
  },
  content: {
    marginHorizontal: "2.5%"
  }
});

export default App;
