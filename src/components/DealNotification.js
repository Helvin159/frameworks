import React from 'react';
import { Container } from 'bootstrap-4-react/lib/components/layout';

const DealNotification = ({ deal }) => {
	return (
		<Container fluid className='deal-notification'>
			<p>{deal}</p>
		</Container>
	);
};

export default DealNotification;
