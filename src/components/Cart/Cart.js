import React, { Fragment, useContext } from 'react';
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
		if (isCartOpen === true) {
			document.body.style.overflow = 'auto';
			setIsCartOpen(!isCartOpen);
			return;
		}
	};

	const navigateHome = () => {
		navigate('/');
		setIsCartOpen(!isCartOpen);
	};

	return (
		<Container fluid className={`cart ${isCartOpen ? 'show' : ''}`}>
			<Row className='cart__header'>
				<Col sm={8} className='cart__header__heading'>
					<h4>Your cart</h4>
				</Col>
				<Col sm={4} className='cart__header__close'>
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

			{cart ? (
				<Fragment>
					<Container className='cart__items'>
						{cart?.map((i, k) => (
							<CartItem
								name={i.name}
								img={i.image}
								price={i.price}
								currency={i.currency}
								quantity={i.quantity}
								key={k}
							/>
						))}
					</Container>
					<Container className='cart__checkout-btn'>
						<Button>Checkout</Button>
					</Container>
				</Fragment>
			) : (
				<Fragment>
					<h3>Your cart is empty</h3>
					<Container className='cart__continue-shopping'>
						<Button onClick={navigateHome}>Continue shopping</Button>
					</Container>
				</Fragment>
			)}
		</Container>
	);
};

export default Cart;
