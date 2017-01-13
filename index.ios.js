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
   Navigator
 } from 'react-native';
 import  MainPage  from './MainPage';
 import LessonList from './LessonList'
 import Lesson from './Lesson';
 import Finished from './Finished';
 import Profile from './Profile';
 

 export default class testApp extends Component {

   renderScene(route, navigator){

     switch(route.name){
       case 'MainPage':
       return <MainPage 
       lessonList={()=>{
         navigator.push({
           name: 'LessonList'
         })
       }}

       />

       case 'LessonList':
       return <LessonList 
       backButton={()=>{
         navigator.pop()
       }} 
       openLesson={()=>{
        navigator.push({
          name: 'Lesson'
        })
      }}
      />

      case 'Lesson':
      return <Lesson
      backButton={()=>{
       navigator.pop()
     }}
     finishedButton={()=>{
      navigator.push({
        name: 'Finished'
      })
    }}
    />

    case 'Finished':
    return <Finished
    backButton={()=>{
     navigator.pop()
   }}
   profileButton={()=>{
    navigator.push({
      name: 'Profile'
    })
  }}
  />

  case 'Profile':
  return <Profile
 homeButton={()=>{
    navigator.popToTop(0)
  }}
 />
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
