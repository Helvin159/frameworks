import React from 'react';
import Container from 'react-bootstrap/Container';

const Loading = () => {
	return (
		<Container fluid className='loading'>
			<Container className='loading__content'>
				<h1>Loading</h1>
			</Container>
		</Container>
	);
};

export default Loading;
