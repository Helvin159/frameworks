import { Outlet, Route, Routes } from 'react-router';
import Home from './routes/Home';

const App = () => {
	return (
		<Routes element={<Outlet />}>
			<Route path='/' element={<Home />}></Route>
		</Routes>
	);
};

export default App;
