import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';

const Header = () => {
	return (
		<Container fluid>
			<Row>
				<Col md={4}>Header Column</Col>
				<Col md={4}>Header Column</Col>
				<Col md={4}>Header Column</Col>
			</Row>
			Header
		</Container>
	);
};

export default Header;
