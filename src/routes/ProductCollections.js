import React, { Fragment } from 'react';
import Loading from '../components/Loading';
import GenericHero from '../components/GenericHero';
import Products from '../components/Products/Products';

const ProductCollections = ({ products }) => {
	if (!products) return <Loading />;

	return (
		<Fragment>
			<GenericHero heading={'Our Products'} />
			<Products products={products} />
		</Fragment>
	);
};

export default ProductCollections;
