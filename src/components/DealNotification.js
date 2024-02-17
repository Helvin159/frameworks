import React from 'react';
import { Container } from 'bootstrap-4-react/lib/components/layout';

const DealNotification = ({ deal }) => {
	return (
		<Container fluid>
			<h2>{deal}</h2>
		</Container>
	);
};

export default DealNotification;
