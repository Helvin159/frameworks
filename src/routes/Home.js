import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import ProductPreview from '../components/ProductPreview/ProductPreview';
import LatestReviews from '../components/LatestReviews';
import Loading from '../components/Loading';

const Home = ({ products }) => {
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
