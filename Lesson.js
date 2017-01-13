import React, {Component} from 'react';
import {View, StyleSheet, Text, TabBarIOS, TouchableHighlight, Image} from 'react-native';

export default class Lesson extends Component{
	state = {
		selectedTab :'descTab'
	}
	render(){
		return(
			<View style={{flex:1}}>
			<View style={{flex:1, justifyContent: 'center', backgroundColor: '#292C38', flexDirection:'row'}}>
			<View style={styles.navButtons}>
			<TouchableHighlight onPress={this.props.backButton} underlayColor="#292C38">
			<Text style={styles.backButton}>back</Text>
			</TouchableHighlight>
			</View>
			<View style={styles.navButtons}>
			<TouchableHighlight onPress={this.props.finishedButton} underlayColor="#292C38">
			<Text style={styles.finishButton}>finish</Text>
			</TouchableHighlight>
			</View>
			</View>
			<View style={{flex:10}}>
			<TabBarIOS
			unselectedTintColor="white"
			barTintColor="#292C38"
			tintColor="#EA2E49"
			translucent={false}
			>

			<TabBarIOS.Item
			title="Description"
			selected={this.state.selectedTab === "descTab"}
			icon={require('./assets/images/desc.png')}
			selectedIcon={require('./assets/images/descSelected.png')}
			onPress={() => {
				this.setState({
					selectedTab: 'descTab',
				});
			}}
			>
			<View style={styles.container}>
			<View style={styles.content}>
			<Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin neque nec molestie pretium.</Text>
			<Text style={styles.p}>Morbi vel tempor sapien. Sed felis lorem, tincidunt a ultricies hendrerit, cursus in neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
			<Text style={styles.p}>Nam id suscipit risus. Vestibulum malesuada consequat nulla, sed scelerisque mauris hendrerit sed. Sed molestie viverra odio, sit amet condimentum arcu volutpat vitae. Phasellus pretium sapien nulla, et aliquam nisl efficitur nec. Nullam consequat libero vitae sapien suscipit semper.</Text>
			</View>
			</View>
			</TabBarIOS.Item>

			<TabBarIOS.Item
			title="Steps"
			selected={this.state.selectedTab === "stepsTab"}
			icon={require('./assets/images/steps.png')}
			selectedIcon={require('./assets/images/stepsSelected.png')}
			onPress={() => {
				this.setState({
					selectedTab: 'stepsTab',
				});
			}}
			>
			<View style={styles.container}>
			<View style={styles.content}>
			<View style={styles.stepsContent}>
			<Text style={styles.stepsHeading}>Step 1:</Text>
			<Text style={styles.stepsBody}>Integer vel metus lorem. Nunc eleifend nisi ut lacus aliquet hendrerit. Morbi quis fringilla lacus</Text>
			</View>
			<View style={styles.stepsContent}>
			<Text style={styles.stepsHeading}>Step 2:</Text>
			<Text style={styles.stepsBody}>Integer vel metus lorem. Nunc eleifend nisi ut lacus aliquet hendrerit. Morbi quis fringilla lacus</Text>
			</View>
			<View style={styles.stepsContent}>
			<Text style={styles.stepsHeading}>Step 3:</Text>
			<Text style={styles.stepsBody}>Integer vel metus lorem. Nunc eleifend nisi ut lacus aliquet hendrerit. Morbi quis fringilla lacus</Text>
			</View>
			<View style={styles.stepsContent}>
			<Text style={styles.stepsHeading}>Step 4:</Text>
			<Text style={styles.stepsBody}>Integer vel metus lorem. Nunc eleifend nisi ut lacus aliquet hendrerit. Morbi quis fringilla lacus</Text>
			</View>
			<View style={styles.stepsContent}>
			<Text style={styles.stepsHeading}>Step 5:</Text>
			<Text style={styles.stepsBody}>Integer vel metus lorem. Nunc eleifend nisi ut lacus aliquet hendrerit. Morbi quis fringilla lacus</Text>
			</View>
			</View>
			</View>
			</TabBarIOS.Item>



			<TabBarIOS.Item
			title="Code"
			selected={this.state.selectedTab === "codeTab"}
			icon={require('./assets/images/code.png')}
			selectedIcon={require('./assets/images/codeSelected.png')}
			onPress={() => {
				this.setState({
					selectedTab: 'codeTab',
				});
			}}
			>
			<View style={styles.container}>
			<View style={styles.content}>
			<View style={styles.codeContent}>
			<Image
			source={require('./assets/images/codeSnippet.png')}
			/>
			</View>
			</View>
			</View>
			</TabBarIOS.Item>
			</TabBarIOS>

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

	content: {
		paddingTop:50,
		paddingRight:15,
		paddingLeft:15
	},
	p:{
		marginTop:20,
		color:'white',
		fontSize: 15,
		textAlign:'center',
		fontWeight: '300'
	},
	stepsContent: {
		paddingTop: 20
	},
	stepsHeading:{
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold'
	},
	stepsBody:{
		color: 'white',
		fontSize: 15,
		fontWeight: '300'
	},
	codeContent: {
		backgroundColor: '#1D1F28'
	},
	backButton: {
		color: '#EA2E49',
		paddingLeft: 10,
		marginTop: 20,
		textAlign: 'left'
	},
	finishButton: {
		color: '#EA2E49',
		paddingRight: 10,
		marginTop: 20,
		textAlign: 'right'
	},
	navButtons:{
		flex: 1,
		paddingTop:15
	}
})