import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase'; // this import breaks the app, the next two are a workaround
import firebase from '@firebase/app';
import '@firebase/auth';
import { createAppContainer } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './navigators';
import NavigationService from './NavigationService';
import firebaseConfig from './config/firebase.config.json';

const AppContainer = createAppContainer(RootStack);

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<AppContainer ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
			</Provider>
		);
	}
}

export default App;

