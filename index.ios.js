/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,
   StatusBar
 } from 'react-native';
 import  MainPage  from './MainPage';

 export default class testApp extends Component {
   render() {
     return (
       <Navigator
       initialRoute = {{index:0}}
       renderScene={(route, navigator)=>{
         return <MainPage/>   
       }}
       
       />
       );
   }
 }

 
 AppRegistry.registerComponent('testApp', () => testApp);
