import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import trashCanIcon from '../../../assets/svg/icon-trash-can.svg';

const CartItem = ({ name, img, price, currency }) => {
	const handleDelete = (e) => console.log(e.target);
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
								<input style={{ maxWidth: '95%', margin: '0 auto' }} />
							</form>
						</Col>
					</Row>
				</Col>
				<Col sm={3} md={3}>
					<h5>${price}</h5>
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
