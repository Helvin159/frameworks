import React, { Fragment, useContext } from 'react';
import Hero from '../components/Hero';
import ProductPreview from '../components/ProductPreview/ProductPreview';
import LatestReviews from '../components/LatestReviews';
import { ProductContext } from '../contexts/ProductContext';
import Loading from '../components/Loading';

const Home = () => {
	const { products } = useContext(ProductContext);

	if (!products) return <Loading />;

	return (
		<Fragment>
			<Hero />
			<ProductPreview product={products?.items[0]} />
			<LatestReviews />
		</Fragment>
	);
};

export default Home;
