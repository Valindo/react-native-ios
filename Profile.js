import React, {Component} from 'react';
import { View , Text, StyleSheet, TouchableHighlight, Image} from 'react-native'


export default class Profile extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.logoText}>APP4APP</Text>
				</View>
				<View style={{flex: 10}}>
					<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
						<View>
						<Image
							source={require('./assets/images/profile.jpg')}
							style={styles.image}
						/>
						</View>
						<View>
							<Text style={styles.welcomeText}>Welcome back Valindo!</Text>
						</View>
					</View>
					<View style={{flex:1}}>
						<View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
							<Image source={require('./assets/images/badge32.png')}/>
							<Image source={require('./assets/images/badge32.png')}/>
							<Image source={require('./assets/images/badge32.png')}/>
							<Image source={require('./assets/images/badge32.png')}/>
							<Image source={require('./assets/images/badge32.png')}/>
						</View>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={styles.p}>You've completed all the lessons!</Text>
							<TouchableHighlight style={styles.homeButton} onPress={this.props.homeButton}>
								<Text style={styles.homeText}>Home</Text>
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
		justifyContent: 'center'
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoText: {
		fontSize: 17,
		color: 'white',
		fontWeight: '300',
		paddingTop: 20
	},

	image:{
		width: 128,
		height: 128,
		borderRadius: 64
	},
	homeButton: {
		backgroundColor: '#EA2E49',
		paddingRight: 60,
		paddingLeft: 60,
		paddingTop: 15,
		paddingBottom: 15,
		marginTop: 30,
		marginBottom: 10
	},
	homeText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 20
	},
	welcomeText: {
		fontSize: 30,
		color:'white',
		paddingTop: 35
	},

	p:{
		fontSize: 15,
		color: 'white',
		paddingTop:20
	}
})