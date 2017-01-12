import React, { Component } from 'react'
import { View, StyleSheet, Text, ListView } from 'react-native'

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
				<Text style={styles.logoText}>APP4APP</Text>
			</View>
			<View style={{flex: 10}}>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={
					(rowData) => {
						return (
							<View style={styles.listItem}>
							<Text style={styles.title}>{rowData} </Text>
							</View>
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
		alignItems: 'flex-start'
	},
	title: {
		fontSize: 15,
		color: 'white',
		fontWeight: '400'
	},
	nav: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5
	},
	logoText: {
		fontSize: 15,
		color: 'white',
		fontWeight: '300'
	}
});