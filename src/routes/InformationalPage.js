import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../components/Loading';

const InformationalPage = ({ content }) => {
	if (!content) return <Loading />;

	return (
		<Container fluid className='information-page'>
			<Container className='information-page__content'>
				{documentToReactComponents(content)}
			</Container>
		</Container>
	);
};

export default InformationalPage;
