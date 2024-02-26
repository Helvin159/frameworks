import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './components/CartItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import timesIcon from '../../assets/svg/icon-times.svg';

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
		document.body.style.overflow = 'auto';
	};

	const navigateCheckout = () => {
		navigate('/checkout');
		setIsCartOpen(!isCartOpen);
		document.body.style.overflow = 'auto';
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
								id={i.id}
								key={k}
							/>
						))}
					</Container>
					<Container className='cart__checkout-btn'>
						<Button onClick={navigateCheckout}>Checkout</Button>
					</Container>
				</Fragment>
			) : (
				<Container className='cart__empty-cart'>
					<h3>Your cart is empty</h3>
					<Container className='cart__continue-shopping'>
						<Button onClick={navigateHome}>Continue shopping</Button>
					</Container>
				</Container>
			)}
		</Container>
	);
};

export default Cart;
