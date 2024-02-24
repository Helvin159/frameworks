import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	return (
		<Col xs={12} sm={4} md={3} className='products__content__card'>
			<Container className='text-center products__content__card__content'>
				<h3>
					<Link to={`/products/product-collections/${product?.fields.slug}`}>
						{product?.fields.title}
					</Link>
				</h3>
				<img
					src={`https:${product?.fields.featuredImage?.fields.file.url}`}
					alt={product?.fields.title}
					className='img-fluid'
				/>
			</Container>

			<style jsx>{`
				.products__content__card__content {
					border-radius: 10px;
					box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
					padding: 2rem 2.5rem;
				}
				.products__content__card__content img {
					border-radius: 10px;
				}
			`}</style>
		</Col>
	);
};

export default ProductCard;
