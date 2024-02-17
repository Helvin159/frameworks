import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import ProductPreview from '../components/ProductPreview';
import LatestReviews from '../components/LatestReviews';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<ProductPreview />
			<LatestReviews />
		</Fragment>
	);
};

export default Home;
