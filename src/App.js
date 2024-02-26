import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';
import { InformationPageContext } from './contexts/InformationPageContext';
import Outlet from './routes/Outlet';
import Home from './routes/Home';
import ProductCollections from './routes/ProductCollections';
import Product from './routes/Product';
import Contact from './routes/Contact';
import TrackOrder from './routes/TrackOrder';
import Checkout from './routes/Checkout';
import InformationalPage from './routes/InformationalPage';
import Loading from './components/Loading';

// Slick Slider styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom styles
import './css/style.css';

const App = () => {
	const { products, productDescription } = useContext(ProductContext);
	const { cart } = useContext(CartContext);
	const { informationPages } = useContext(InformationPageContext);

	if (!products) return <Loading />;

	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home products={products} />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/track-order' element={<TrackOrder />} />
				<Route path='/checkout' element={<Checkout cart={cart} />} />
				<Route path='/cart' element={<Checkout />} />
				<Route
					path='/product-collections'
					element={<ProductCollections products={products} />}
				/>
				<Route
					path='/product-collections/:slug'
					element={
						<Product
							products={products}
							productDescription={productDescription}
						/>
					}
				/>

				{/* Information Pages */}
				{informationPages &&
					informationPages?.items.map((i) => {
						return (
							<Route
								path={`/${i.fields.slug}`}
								element={<InformationalPage content={i.fields.pageContent} />}
								key={i?.sys.id}
							/>
						);
					})}
			</Route>
		</Routes>
	);
};

export default App;
