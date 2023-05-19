import React from 'react';
import { Route, Routes } from 'react-router';

import Layout from 'hoc/layout/layout';
import Dashboard from 'features/dashboard/container/dashboard';
import { Navigate } from 'react-router-dom';

const App: React.FC = () => {

	return (
		<Layout>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='*' element={<Navigate replace to='/dashboard' />} />
			</Routes>
		</Layout>
	);

};

export default App;
