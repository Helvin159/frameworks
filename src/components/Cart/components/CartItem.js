import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import trashCanIcon from '../../../assets/svg/icon-trash-can.svg';

const CartItem = ({ name, img, price, currency, quantity }) => {
	const handleDelete = (e) => console.log(e.target);
	const incrementQuantity = (e) => console.log(e);
	const decreaseQuantity = (e) => console.log(e);

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
					<Row>
						<Col>
							<h5>{name}</h5>
						</Col>
						<Col>
							<form>
								<Button
									onClick={decreaseQuantity}
									style={{ display: 'inline-block' }}>
									-
								</Button>
								<input
									type='number'
									defaultValue={quantity ? quantity : null}
									style={{
										maxWidth: '40%',
										padding: '.15rem 0 .15rem .5rem',
										margin: '0 auto',
										textAlign: 'center',
										display: 'inline-block',
									}}
								/>
								<Button
									onClick={incrementQuantity}
									style={{ display: 'inline-block' }}>
									+
								</Button>
							</form>
						</Col>
					</Row>
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
