import { createStackNavigator } from 'react-navigation';
import LoginForm from '../components/LoginForm';

const LoginStack = createStackNavigator(
	{
		loginForm: LoginForm,
	},
	{
		initialRouteName: 'loginForm',
		headerMode: 'screen'
	}
);

export default LoginStack;

