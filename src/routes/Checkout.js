import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../components/Loading';
import ExpressCheckout from '../components/ExpressCheckout';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import CheckoutCart from '../components/CheckoutCart/CheckoutCart';

const Checkout = ({ cart }) => {
	if (!cart) return <Loading />;

	return (
		<Fragment>
			<Row>
				<Col xs={12} sm={12} md={6}>
					<ExpressCheckout />
					<CheckoutForm />
				</Col>
				<Col xs={12} sm={12} md={6}>
					<CheckoutCart cart={cart} />
				</Col>
			</Row>
		</Fragment>
	);
};

export default Checkout;
