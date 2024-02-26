import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import { Container } from 'react-bootstrap';

const InformationalPage = ({ content }) => {
	return (
		<Container fluid className='information-page'>
			<Container className='information-page__content'>
				{documentToReactComponents(content)}
			</Container>
		</Container>
	);
};

export default InformationalPage;
