import { createStackNavigator } from 'react-navigation';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

const EmployeeStack = createStackNavigator(
	{
		employeeList: EmployeeList,
		employeeCreate: EmployeeCreate,
		employeeEdit: EmployeeEdit
	},
	{
		initialRouteName: 'employeeList',
		headerMode: 'screen'
	}
);

export default EmployeeStack;

