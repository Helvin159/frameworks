import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import timesIcon from '../../assets/svg/icon-times.svg';

const Cart = () => {
	const { cart, isCartOpen, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const handleClose = () => {
		console.log('cart handler');
		setIsCartOpen(!isCartOpen);
	};

	console.log(cart);

	const navigateHome = () => navigate('/');

	return (
		<Container fluid className={`cart ${cart ? 'show' : ''}`}>
			<Button variant='outline-dark' onClick={handleClose}>
				<img
					src={timesIcon}
					width={'25px'}
					height={'30px'}
					alt='Close button'
				/>
			</Button>
			{cart ? '' : <h1>Your cart is empty</h1>}
			<button onClick={navigateHome}>Continue shopping</button>
		</Container>
	);
};

export default Cart;
