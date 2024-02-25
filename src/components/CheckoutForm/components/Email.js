import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';

const Email = () => {
	const emailForm = useRef;
	return (
		<Container fluid>
			<h3>Email</h3>
			<form ref={emailForm}>
				<input type='email' placeholder='Email' />

				<input type='checkbox' id='emailSubscribe' />
				<label htmlFor='emailSubscribe'>
					Send me live tracking and order updates
				</label>
			</form>
		</Container>
	);
};

export default Email;
