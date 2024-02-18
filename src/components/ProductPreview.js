import React, { Fragment, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './Slider';

const ProductPreview = () => {
	const [selected, setSelected] = useState('93.99');
	const form = useRef();

	const products = [
		{
			quantity: 1,
			price: 93.99,
			originalPrice: 188.0,
		},
		{
			quantity: 2,
			price: 169.18,
			originalPrice: 376.0,
		},
		{
			quantity: 3,
			price: 239.67,
			originalPrice: 564.0,
		},
	];

	const handleChange = (e) => {
		// console.log(form);
		setSelected(e.target.dataset.price);
	};

	return (
		<Container fluid className='product-preview'>
			<Row className='product-preview__content'>
				<Col md={7} className='product-preview__content__slider'>
					<Slider />
				</Col>
				<Col md={5} className='product-preview__content__copy'>
					<Container className='product-preview__content__copy__header'>
						<h1>
							FrameWorks <br /> Digital Frame
						</h1>
						<p>
							${selected} USD <span>discounted</span>
						</p>
					</Container>
					<Container className='product-preview__content__copy__options'>
						<form ref={form} onChange={handleChange}>
							{products.map((i, k) => (
								<Fragment>
									<input
										type='radio'
										data-price={i.price}
										name='quantity'
										id={`quantity${k}`}
										value={1}
									/>
									<label htmlFor={`quantity${k}`}>
										<Row>
											<Col>
												<h5>Buy {i.quantity.toString()}</h5>
												<p>
													You save ${Math.floor(i.originalPrice - i.price)}.00
													USD
												</p>
											</Col>
											<Col>
												<h5>{i.price}</h5>
												<h6>USD</h6>
												<p>${i.originalPrice}.00 USD</p>
											</Col>
										</Row>
									</label>
								</Fragment>
							))}
						</form>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPreview;
