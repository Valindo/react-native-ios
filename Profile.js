import React, {Component} from 'react';
import { View , Text, StyleSheet} from 'react-native'


export default class Profile extends Component {
	render(){
		return(
			<View style={{flex: 1}}>
				<View style={{flex:1}}>
					<Text>Navbar</Text>
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
	}
})