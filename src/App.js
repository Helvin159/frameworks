import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Products from './routes/Products';
import ProductCollections from './routes/ProductCollections';
import Product from './routes/Product';
import Contact from './routes/Contact';
import TrackOrder from './routes/TrackOrder';
import Outlet from './routes/Outlet';

import './css/style.css';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/track-order' element={<TrackOrder />} />
				<Route path='/products' element={<Products />} />
				<Route
					path='/products/product-collections'
					element={<ProductCollections />}
				/>
				<Route
					path='/products/product-collections/:slug'
					element={<Product />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
