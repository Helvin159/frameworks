import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ProductCard = ({ product }) => {
	return (
		<Col xs={12} sm={4} md={3} className='products__content__card'>
			<Link to={`/product-collections/${product?.fields.slug}`}>
				<Container className='text-center products__content__card__content'>
					<h3>{product?.fields.title}</h3>
					<img
						src={`https:${product?.fields.featuredImage?.fields.file.url}`}
						alt={product?.fields.title}
						className='img-fluid'
					/>
				</Container>
			</Link>
		</Col>
	);
};

export default ProductCard;
