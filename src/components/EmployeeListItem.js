import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import NavigationService from '../NavigationService';

class EmployeeListItem extends Component {
	onItemPress() {
		NavigationService.navigate('employeeEdit', { employee: this.props.employee });
	}

	render() {
		const { name } = this.props.employee;

		return (
			<TouchableWithoutFeedback onPress={this.onItemPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>
							{name}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default EmployeeListItem;

