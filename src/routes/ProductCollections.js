import React, { Fragment } from 'react';
import GenericHero from '../components/GenericHero';
import Products from '../components/Products/Products';

const ProductCollections = () => {
	return (
		<Fragment>
			<GenericHero heading={'Our Products'} />
			<Products />
		</Fragment>
	);
};

export default ProductCollections;
