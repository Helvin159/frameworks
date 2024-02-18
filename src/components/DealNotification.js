import React from 'react';
import Container from 'react-bootstrap/Container';

const DealNotification = ({ deal }) => {
	return (
		<Container fluid className='deal-notification'>
			<p>{deal}</p>
		</Container>
	);
};

export default DealNotification;
