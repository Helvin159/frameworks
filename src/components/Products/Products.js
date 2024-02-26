import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './components/ProductCard';

const Products = ({ products }) => {
	return (
		<Container fluid className='products'>
			<Row className='products__content py-5'>
				{products?.items.map((i, k) => (
					<ProductCard product={i} key={k} />
				))}
			</Row>
		</Container>
	);
};

export default Products;
