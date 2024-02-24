import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './components/ProductCard';
import { ProductContext } from '../../contexts/ProductContext';

const Products = () => {
	const { products } = useContext(ProductContext);

	return (
		<Container fluid className='products'>
			<Row className='products__content py-5'>
				{products?.items.map((i, k) => (
					<ProductCard product={i} key={k} />
				))}
			</Row>
			<style jsx>{`
				.products__content {
					border-radius: 10px;
					padding: 0.5rem 2rem;

					@media (max-width: 575.5px) {
						padding: 0.5rem 1rem;
					}
				}
			`}</style>
		</Container>
	);
};

export default Products;
