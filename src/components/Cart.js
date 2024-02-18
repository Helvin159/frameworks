import React from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const navigate = useNavigate();

	return (
		<Container fluid>
			<h1>Your cart is empty</h1>
			<button onClick={navigate('/')}>Continue shopping</button>
		</Container>
	);
};

export default Cart;
