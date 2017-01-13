import React, { Component } from 'react'
import { View, StyleSheet, Text, ListView, TouchableHighlight, Image } from 'react-native'

export default class LessonList extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
		this.state = {
			dataSource: ds.cloneWithRows(['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'])
		};
	}
	render(){
		return(
			<View style={styles.container}>
			<View style={styles.nav}>
			<View style={{flex: 1, flexDirection: 'row', marginTop:15}}>
			<View style={{flex: 3, justifyContent: 'center'}}>
			
			<TouchableHighlight onPress={this.props.backButton} underlayColor="#292C38">
			<Text style={styles.backButton}>back</Text>
			</TouchableHighlight>
			</View>

			<View style={{flex: 3, alignItems: 'center', justifyContent:'center'}}>
			<Text style={styles.logoText}>APP4APP</Text>
			</View>
			<View style={{flex: 3}}>
			</View>
			</View>
			</View>
			<View style={{flex: 10, flexDirection: 'column', paddingTop:10}}>
			<ListView
			dataSource={this.state.dataSource}
			renderRow={
				(rowData) => {
					return (
						<TouchableHighlight 
						onPress={this.props.openLesson}
						underlayColor="#1D1F27"
						>
						<View style={styles.listItem}>
						<View style={{flex:10, paddingLeft: 15}}>
						<Text style={styles.title}>{rowData} </Text>
						<Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
						</View>
						<View style={{flex:2}}>
						<Image
							source={require('./assets/images/checked.png')}
							style={{marginTop:20}}
						/>
						</View>
						</View>
						</TouchableHighlight>
						);
					}
				}
				/>
				</View>
				</View>
				)
				}
			}


			const styles = StyleSheet.create({
				container: {
					flex: 1,
					backgroundColor: '#292C38',
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	listItem: {
		height: 75,
		alignItems: 'flex-start',
		flexDirection: 'row'
	},
	title: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	},
	nav: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5
	},
	logoText: {
		fontSize: 17,
		color: 'white',
		fontWeight: '300',
	},
	backButton: {
		color: '#EA2E49',
		paddingLeft: 10
	},
	description: {
		color: 'white',
		fontSize: 13,
		paddingTop:10
	}
});