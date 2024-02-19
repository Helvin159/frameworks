import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './components/CartItem';

import timesIcon from '../../assets/svg/icon-times.svg';
import { Col, Row } from 'react-bootstrap';

const Cart = () => {
	const { cart, isCartOpen, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const handleClose = () => {
		// console.log('cart handler');

		if (isCartOpen === true) {
			document.body.style.overflow = 'auto';
			setIsCartOpen(!isCartOpen);
			return;
		}
	};

	// console.log(cart);

	const navigateHome = () => navigate('/');

	return (
		<Container fluid className={`cart ${cart ? 'show' : ''}`}>
			<Row className='w-100'>
				<Col sm={6}>
					<h4>Your cart</h4>
				</Col>
				<Col sm={6}>
					<Button variant='outline-dark' onClick={handleClose}>
						<img
							src={timesIcon}
							width={'25px'}
							height={'30px'}
							alt='Close button'
						/>
					</Button>
				</Col>
			</Row>

			{cart ? '' : <h1>Your cart is empty</h1>}
			{cart?.map((i, k) => (
				<CartItem
					name={i.name}
					img={i.image}
					price={i.price}
					currency={i.currency}
					key={k}
				/>
			))}
			<button onClick={navigateHome}>Continue shopping</button>
		</Container>
	);
};

export default Cart;
