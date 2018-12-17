// import firebase from 'firebase'; // this import breaks the app, the next two are a workaround
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/database';
import {
	EMPLOYEE_CLEAR,
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS,
	EMPLOYEE_DELETE_SUCCESS
} from './types';
import NavigationService from '../NavigationService';

export const employeeClear = () => {
	return {
		type: EMPLOYEE_CLEAR
	};
};

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ 
					type: EMPLOYEES_FETCH_SUCCESS,
					payload: snapshot.val()
				});
			});
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATE });
				NavigationService.pop();
			});
	};
};

export const employeeSave = ({ name, phone, shift, uid }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
				NavigationService.pop();
			});
	};
};

export const employeeDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database()
			.ref(`/users/${currentUser.uid}/employees/${uid}`)
			.remove()
			.then(() => {
				dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
				NavigationService.pop();
			});
	};
};

