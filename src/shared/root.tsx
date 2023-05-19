import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'shared/components/errorBoundary/errorBoundary';


import 'assets/styles/app.scss';
import App from 'App';

const Root: React.FC = (props) => {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<App {...props} />
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default Root;
