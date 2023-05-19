import React from 'react';

import 'assets/styles/app.scss';
import App from './App';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorHandler from 'hoc/withErrorHandler/errorHandler';
import ErrorBoundary from 'shared/components/errorBoundary/errorBoundary';
import store from 'store';


const Root: React.FC = (props) => {
	return (
		// <Router location={''} navigator={undefined}>
		// 	<App {...props} />
		// </Router>

		<Provider store={store}>

			<ErrorHandler />
			<ErrorBoundary>
				<BrowserRouter>
					<App {...props} />
				</BrowserRouter>
			</ErrorBoundary>
		</Provider>
	);
};

export default Root;
