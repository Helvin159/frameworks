import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Container fluid className='footer'>
			<Row className='footer__content'>
				<Col xs={12} sm={12} md={6} lg={6}>
					<h2>Our Store</h2>
					<ul>
						<li>
							<Link to={'/products/product-collections'}>Shop Snap Frame</Link>
						</li>
						<li>
							<Link to={'/track-order'}>Track Your Order</Link>
						</li>
						<li>
							<Link to={'/contact'}>Contact</Link>
						</li>
					</ul>
				</Col>
				<Col xs={12} sm={12} md={6} lg={6}>
					<h2>Policies</h2>
					<ul>
						<li>
							<Link to={'/'}>Refund Policy</Link>
						</li>
						<li>
							<Link to={'/'}>Shipping Policy</Link>
						</li>
						<li>
							<Link to={'/'}>Terms of Service</Link>
						</li>
						<li>
							<Link to={'/'}>Privacy Policy</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
