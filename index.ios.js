/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component, PropTypes } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator,
   Alert,
   StatusBar,
   TouchableHighlight,
   NavigationBarRouteMapper
 } from 'react-native';
 import  MainPage  from './MainPage';
 import LessonList from './LessonList'
 

 export default class testApp extends Component {
   renderScene(route, navigator){

     switch(route.name){
       case 'MainPage':
       return <MainPage lessonList={()=>{
         navigator.push({
           name: 'LessonList'
         })
       }}/>

       case 'LessonList':
       return <LessonList/>
     }
   }

   render() {
     return (
       <Navigator
       initialRoute={{name: 'MainPage', index: 0}}
       renderScene={this.renderScene}
       
       />
       );
   }
 }




 AppRegistry.registerComponent('testApp', () => testApp);
