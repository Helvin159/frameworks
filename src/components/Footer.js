import React, { useContext } from 'react';
import { InformationPageContext } from '../contexts/InformationPageContext';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
	const { informationPages } = useContext(InformationPageContext);

	return (
		<Container fluid className='footer'>
			<Row className='footer__content'>
				<Col xs={12} sm={12} md={4} lg={4} className='footer__content__links'>
					<h2>Our Store</h2>
					<ul>
						<li>
							<Link to={'/product-collections'}>Shop FrameWorks</Link>
						</li>
						<li>
							<Link to={'/track-order'}>Track Your Order</Link>
						</li>
						<li>
							<Link to={'/contact'}>Contact</Link>
						</li>
					</ul>
				</Col>
				<Col xs={12} sm={12} md={4} lg={4} className='footer__content__links'>
					<h2>Policies</h2>
					<ul>
						{informationPages?.items.map((i, k) => (
							<li key={k}>
								<Link to={`/${i.fields.slug}`}>{i.fields.title}</Link>
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
