import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

const SecureForm = () => {
	const form = useRef();

	return (
		<Container fluid>
			<Container>
				<h2>Secure Checkout</h2>
				<p>
					All transactions are secure and encrypted. Your order includes free
					returns and 24/7 access to our award-winning customer service.
				</p>
			</Container>
			<form ref={form}>
				<Container>
					<input type='text' placeholder='Card number' />
				</Container>
				<Container>
					<input type='date' placeholder='Expiration date' />
					<input type='text' placeholder='Security code' />
				</Container>
				<Container>
					<input type='text' placeholder='Name on card' />
				</Container>
			</form>
			<Container>
				<h5>Paypal</h5>
			</Container>
		</Container>
	);
};

export default SecureForm;
