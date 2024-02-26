import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Outlet from './routes/Outlet';
import Home from './routes/Home';
import ProductCollections from './routes/ProductCollections';
import Product from './routes/Product';
import Contact from './routes/Contact';
import TrackOrder from './routes/TrackOrder';
import Checkout from './routes/Checkout';

// Slick Slider styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom styles
import './css/style.css';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/track-order' element={<TrackOrder />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/cart' element={<Checkout />} />
				<Route path='/product-collections' element={<ProductCollections />} />
				<Route path='/product-collections/:slug' element={<Product />} />
			</Route>
		</Routes>
	);
};

export default App;
