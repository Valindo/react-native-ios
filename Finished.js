import React, {Component} from 'react';
import { View, StyleSheet, Text , TouchableHighlight, Image} from 'react-native';

export default class Finished extends Component {
	render(){
		return(
			<View style={{flex: 1}}>
			<View style={{flex:1, justifyContent: 'center', backgroundColor: '#292C38', flexDirection:'row'}}>
			<View style={styles.navButtons}>
			<TouchableHighlight onPress={this.props.backButton} underlayColor="#292C38">
			<Text style={styles.backButton}>back</Text>
			</TouchableHighlight>
			</View>
			<View style={styles.navButtons}>
			<TouchableHighlight onPress={this.props.profileButton} underlayColor="#292C38">
			<Text style={styles.profileButton}>profile</Text>
			</TouchableHighlight>
			</View>
			</View>
			<View style={{flex: 10}}>
			<View style={styles.container}>
			<View style={{flex: 1}}>
			<Image
			source={require('./assets/images/badge256.png')}
			style={{marginTop:40}}
			/>
			</View>
			<View style={{flex: 1, alignItems: 'center'}}>
			<Text style={styles.title}>Hurray Valindo! Now you've mastered the art of basic app making</Text>
			<Text style={styles.p}>We will notify you once the next version is complete</Text>
			<TouchableHighlight style={styles.continueButton}>
			<Text style={styles.continueText}>Continue</Text>
			</TouchableHighlight>
			</View>
			</View>
			</View>
			</View>

			)
	}
}


const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#292C38',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	backButton: {
		color: '#EA2E49',
		paddingLeft: 10,
		marginTop: 20,
		textAlign: 'left'
	},
	profileButton: {
		color: '#EA2E49',
		paddingRight: 10,
		marginTop: 20,
		textAlign: 'right'
	},
	navButtons:{
		flex: 1,
		paddingTop:15
	},
	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: '400',
		textAlign:'center',
		paddingLeft:10,
		paddingRight:10,
		paddingTop: 30

	},
	p:{
		color: 'white',
		fontSize: 12,
		fontWeight: '200',
		textAlign: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 20
	},
	continueButton: {
		backgroundColor: '#EA2E49',
		paddingRight: 60,
		paddingLeft: 60,
		paddingTop: 15,
		paddingBottom: 15,
		marginTop: 30,
		marginBottom: 10
	},
	continueText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 20
	}
})