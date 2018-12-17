import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import { HeaderButton } from './common';
import NavigationService from '../NavigationService';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
	static navigationOptions = {
		title: 'Employees',
		headerRight: (
			<HeaderButton 
				title="Add"
				onPress={() => NavigationService.navigate('employeeCreate')}
			/>
		)
	}

	componentWillMount() {
		this.props.employeesFetch();
	}

	renderItem(employee) {
		return <EmployeeListItem employee={employee} />;
	}

	render() {
		console.log(this.props);

		return (
			<FlatList
				data={this.props.employees}
				renderItem={({ item }) => this.renderItem(item)}
				keyExtractor={employee => employee.uid}
			/>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

