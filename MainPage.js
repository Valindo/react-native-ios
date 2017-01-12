import React, { Component , PropTypes} from 'react';
import { View, Text, Navigator, StyleSheet, Button, TouchableHighlight } from 'react-native';

export default class MainPage extends Component{

	render(){
		return (
			<View style={styles.container}>
			<Text style={styles.appLogoText}>APP4APP</Text>
			<Text style={styles.h3}>Now you are just 3 steps away from building your own app</Text>
			<TouchableHighlight style={styles.getStartedButton} onPress={this.props.lessonList}>
			<Text style={styles.getStartedText}>GET STARTED</Text>
			</TouchableHighlight>
			<Text style={styles.small}>This is the first and basic version of the app, others will follow soon!</Text>
			</View>
			)
		}
	}


	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#292C38',
			justifyContent: 'center',
			alignItems: 'center'
		},
		appLogoText: {
			fontSize: 35,
			color: 'white',
			fontWeight: "200",
			marginBottom: 20
		},
		h3: {
			fontSize: 20,
			color: 'white',
			fontWeight: "100",
			paddingLeft: 25,
			paddingRight: 25,
			textAlign: 'center'
		},

		small: {
			fontSize: 9,
			color: 'white',
			fontWeight: '300'
		},
		getStartedButton: {
			backgroundColor: '#EA2E49',
			paddingRight: 60,
			paddingLeft: 60,
			paddingTop: 15,
			paddingBottom: 15,
			marginTop: 30,
			marginBottom: 10
		},
		getStartedText: {
			color: 'white',
			fontWeight: '500',
			fontSize: 20
		}

	})
