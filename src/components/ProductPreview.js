import React, { Fragment, useContext, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './Slider';
import { CartContext } from '../contexts/CartContext';

const ProductPreview = () => {
	const [selected, setSelected] = useState('93.99');
	const [selectedOriginal, setSelectedOriginal] = useState('93.99');

	const { inCart, setInCart } = useContext(CartContext);

	const form = useRef();

	const products = [
		{
			id: 1,
			quantity: 1,
			price: 93.99,
			original_price: 188.0,
		},
		{
			id: 2,
			quantity: 2,
			price: 169.18,
			original_price: 376.0,
		},
		{
			id: 3,
			quantity: 3,
			price: 239.67,
			original_price: 564.0,
		},
	];

	const handleChange = (e) => {
		// console.log(form);
		setSelected(e.target.dataset.price);
		setSelectedOriginal(e.target.dataset.originalprice);
	};

	const handleAddCart = () => {
		console.log(form);

		let selected = [];

		for (let i = 0; i < form.current.length; i++) {
			if (form.current[i]?.checked === true) {
				const newObj = {
					id: form.current[i]?.dataset?.productid,
					price: form.current[i]?.dataset.price,
					original_price: form.current[i]?.dataset?.originalprice,
				};

				selected.push(newObj);
			}
		}
		setInCart({ ...selected });
		console.log(inCart, 'incart');
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
							${selected} USD
							<span>
								${Math.round((selectedOriginal - selected) * 100) / 100}
							</span>
						</p>
					</Container>
					<Container fluid className='text-center py-3'>
						Bundle & Save
					</Container>
					<Container className='product-preview__content__copy__options'>
						<form ref={form} onChange={handleChange}>
							{products.map((i, k) => (
								<Fragment key={k}>
									<input
										type='radio'
										data-price={i.price}
										data-originalprice={i.original_price}
										data-productid={i.id}
										name='quantity'
										id={`quantity${i.id}`}
										value={k}
									/>
									<label htmlFor={`quantity${i.id}`}>
										<Row>
											<Col>
												<h5>Buy {i.quantity.toString()}</h5>
												<p>
													You save $
													{Math.round((i.original_price - i.price) * 100) / 100}
													USD
												</p>
											</Col>
											<Col>
												<h5>${i.price}</h5>
												<h6>USD</h6>
												<p>${i.original_price}.00 USD</p>
											</Col>
										</Row>
									</label>
								</Fragment>
							))}
							<Button onClick={handleAddCart}>Add to cart</Button>
						</form>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPreview;
