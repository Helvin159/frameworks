import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import trashCanIcon from '../../../assets/svg/icon-trash-can.svg';

const CartItem = ({ name, img, price, currency }) => {
	const handleDelete = (e) => console.log(e.target);
	return (
		<Fragment>
			<Row>
				<Col>
					<img width={'100px'} height={'100px'} src='' alt='Item pic' />
				</Col>
				<Col>
					<Row>
						<Col>
							<h5>{name}</h5>
						</Col>
						<Col>
							<form>
								<input />
							</form>
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
				</Col>
				<Col>CartItem</Col>
			</Row>
		</Fragment>
	);
};

export default CartItem;
