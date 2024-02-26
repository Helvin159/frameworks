import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Description = ({ reversed, img, heading, copy }) => {
	console.log(copy);
	return (
		<Container as='section' className='description' fluid>
			<Row className={`description__content ${reversed ? 'reverse' : ''}`}>
				<Col xs={12} sm={12} md={6} className='description__content__col'>
					<img src={img} alt={heading} />
				</Col>
				<Col
					xs={12}
					sm={12}
					md={6}
					className='description__content__col text-center  py-4 px-3'>
					<h3>{heading}</h3>
					<Container fluid className='px-5 pt-4'>
						{documentToReactComponents(copy)}
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Description;
