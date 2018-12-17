import React, {Component} from 'react';

import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {constants} from 'expo';
export default class App extends React.Component {
 constructor(props){
   super(props)
   this.state= {
     text:"",
          todo : []
   } 
  };
addTodo (){
   let todo = this.state.todo;
   todo.push(this.state.text)
   this.setState({
     todo: todo,
     text: ''
   })
}





  render() {
    return (
    
      
      <View style={styles.container}>
      
         
      
             <View style={styles.view1}>    
             <TextInput style = {styles.inputText} onChangeText={(text) => {this.setState({text: text})}}
             value = {this.state.text} />

            <TouchableOpacity onPress={this.addTodo.bind(this)}>   
             <Text style= {styles.addButton} >+
    
             </Text>
             </TouchableOpacity> 
             </View>  

             <View>
               {this.state.todo.map((text, index) => {
                 return (
                 <Text style={styles.todoView} key={index.toString()}>
                  {text}
                 </Text>
                 )
               })}
              
             </View>
            
            
      </View>
    )
  }
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#124',
    padding: 10
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

todoView:{
fontSize:30,
fontWeight: "bold",
color:"#ffffff",}
});
