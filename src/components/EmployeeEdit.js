import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	static navigationOptions = {
		title: 'Edit Employee'
	}

	state = { showModal: false }

	componentWillMount() {
		_.each(this.getEmployee(), (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({ name, phone, shift, uid: this.getEmployee().uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onFirePress() {
		this.setState({ showModal: !this.state.showModal });
	}

	onAccept() {
		this.props.employeeDelete({ uid: this.getEmployee().uid });
		this.setState({ showModal: false });
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	getEmployee() {
		return this.props.navigation.getParam('employee');	
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onFirePress.bind(this)}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm 
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to fire this employee?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);

