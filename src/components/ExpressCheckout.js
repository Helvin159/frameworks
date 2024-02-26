import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const ExpressCheckout = () => {
	return (
		<Container fluid className='text-center'>
			<Container>
				<p>Express Checkout</p>
			</Container>
			<Row>
				<Col xs={12} sm={6} md={6}>
					<Button>Vendor</Button>
				</Col>
				<Col xs={12} sm={6} md={6}>
					<Button>Vendor</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default ExpressCheckout;
