import React from 'react';

import 'assets/styles/app.scss';
import App from './App';

const Root: React.FC = (props) => {
	return (
		<App {...props} />
	);
};

export default Root;
