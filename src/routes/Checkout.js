import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ExpressCheckout from '../components/ExpressCheckout';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const Checkout = () => {
	return (
		<Fragment>
			<Row>
				<Col xs={12} sm={12} md={6}>
					<ExpressCheckout />
					<CheckoutForm />
				</Col>
				<Col xs={12} sm={12} md={6}>
					<h4>Cart</h4>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Checkout;
