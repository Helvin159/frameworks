import React from 'react';
import Container from 'react-bootstrap/Container';

const SiteWideMsg = ({ msg }) => {
	const defaultMsg = 'Loading...';

	return (
		<Container as='section' fluid className='site-wide-msg'>
			<Container className='site-wide-msg__content'>
				<p>{msg ? msg : defaultMsg}</p>
			</Container>
		</Container>
	);
};

export default SiteWideMsg;
