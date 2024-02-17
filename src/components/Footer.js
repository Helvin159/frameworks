import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';

const Footer = () => {
	return (
		<Container fluid>
			<Row>
				<Col xs={12} sm={12} md={6} lg={6}>
					Footer Column
				</Col>
				<Col xs={12} sm={12} md={6} lg={6}>
					Footer Column
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
