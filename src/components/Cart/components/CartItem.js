import React, { Fragment, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import trashCanIcon from '../../../assets/svg/icon-trash-can.svg';

const CartItem = ({ name, img, price, currency, quantity }) => {
	const [itemQuantity, setitemQuantity] = useState(quantity);

	const handleDelete = (e) => console.log(e.target);

	useEffect(() => {
		setitemQuantity(quantity);
	}, [quantity]);

	const incrementQuantity = (e) => {
		e.preventDefault();
		setitemQuantity(itemQuantity + 1);
	};
	const decreaseQuantity = (e) => {
		e.preventDefault();
		setitemQuantity(itemQuantity > 1 ? itemQuantity - 1 : 1);
	};

	return (
		<Fragment>
			<Row>
				<Col sm={3} md={3} style={{ backgroundColor: '#fff', padding: '0' }}>
					<img
						width={'100%'}
						height={'100px'}
						src={img}
						alt='Item pic'
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</Col>
				<Col sm={6} md={6}>
					<Container>
						<Container>
							<h5>{name}</h5>
						</Container>
						<Container>
							<Button
								onClick={decreaseQuantity}
								className='cart-btn'
								style={{ display: 'inline-block' }}>
								-
							</Button>
							<p style={{ width: '3rem', display: 'inline-block' }}>
								{itemQuantity}
							</p>
							<Button
								onClick={incrementQuantity}
								className='cart-btn'
								style={{ display: 'inline-block' }}>
								+
							</Button>
						</Container>
					</Container>
				</Col>
				<Col sm={3} md={3}>
					<h5>${parseInt(price) * parseInt(quantity)}</h5>
					<p>{currency}</p>
					<span onClick={handleDelete}>
						<img
							width={'15px'}
							height={'15px'}
							src={trashCanIcon}
							alt='Delete item'
						/>
					</span>
				</Col>
			</Row>
		</Fragment>
	);
};

export default CartItem;
