import React from 'react';
import Container from 'react-bootstrap/Container';

const GenericHero = ({ heading, copy }) => {
	return (
		<Container as='section' fluid className='generic-hero'>
			<Container className='generic-hero__content'>
				<h1>{heading}</h1>
				{copy ? <p>{copy}</p> : ''}
			</Container>
		</Container>
	);
};

export default GenericHero;
