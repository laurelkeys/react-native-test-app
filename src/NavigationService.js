import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
	navigator = navigatorRef;
};

const navigate = (routeName, params) => {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params
		})
	);
};

const reset = (routeName, params) => {
	navigator.dispatch(
		StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName,
					params
				})
			],
			key: null
		})
	);
};

const pop = () => {
	navigator.dispatch(
		StackActions.pop()
	);
};

export default {
	pop,
	reset,
	navigate,
	setTopLevelNavigator
};

