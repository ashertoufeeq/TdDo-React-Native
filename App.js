import React, {Component} from 'react';

import { StyleSheet, Text, View,TextInput } from 'react-native';
import {constants} from 'expo';
export default class App extends React.Component {
  render() {
    return (
    
      
      <View style={styles.container}>
      
         
      
             <View style={styles.view1}>    
             <TextInput style = {styles.inputText}>
             </TextInput>
        
        
             <Text style= {styles.addButton}>+
      
             </Text>
             </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#124',
  },
 inputText:
 {
   flex:1,
 },
addButton:{
  fontSize:30,
  fontWeight: "bold",
},
  view1: {
    
    flexDirection : 'row',
    backgroundColor : 'white',
    alignItems :'center',
    padding : 5,
    paddingLeft:10,
    borderWidth : 1,
    borderRadius : 100
    

  },
});
