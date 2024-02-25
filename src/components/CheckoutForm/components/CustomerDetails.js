import React from 'react';
import Container from 'react-bootstrap/Container';

const CustomerDetails = () => {
	return (
		<Container fluid>
			<Container>
				<h3>
					Delivery (*Double-check your shipping address; we can't refund for
					wrong addresses after shipping*)
				</h3>
			</Container>
			<form>
				<select>
					<option defaultValue={'USA'}>United States</option>
				</select>
			</form>
		</Container>
	);
};

export default CustomerDetails;
