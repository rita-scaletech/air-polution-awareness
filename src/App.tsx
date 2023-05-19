import React from 'react';
import { Route, Routes } from 'react-router';

import Layout from 'assets/hoc/layout/layout';

const App: React.FC = () => {

	return (
		<Layout>
			<Routes>
				<Route path='/' />
			</Routes>
		</Layout>
	);

};

export default App;
