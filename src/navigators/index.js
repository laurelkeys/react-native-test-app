import { createStackNavigator } from 'react-navigation';
import LoginStack from './LoginStack';
import EmployeeStack from './EmployeeStack';

const RootStack = createStackNavigator(
	{
		auth: LoginStack,
		main: EmployeeStack,
	},
	{
		initialRouteName: 'auth',
		headerMode: 'none'
	}
);

export default RootStack;

