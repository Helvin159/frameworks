import React from 'react';
import Container from 'react-bootstrap/Container';
import Email from './components/Email';
import CustomerDetails from './components/CustomerDetails';
import SecureForm from './components/SecureForm';

const CheckoutForm = () => {
	return (
		<Container fluid>
			<Email />
			<CustomerDetails />
			<SecureForm />
		</Container>
	);
};

export default CheckoutForm;
