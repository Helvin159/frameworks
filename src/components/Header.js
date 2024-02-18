import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {
	const cartBtnHandler = (e) => {
		console.log(e.target);
	};
	return (
		<Container fluid className='header'>
			<Row className='header__content'>
				<Col md={4} className='header__content__nav'>
					<nav>
						<ul>
							<li>
								<Link to={'/'}>Home</Link>
							</li>
							<li>
								<Link to={'/products/product-collections'}>Snap Frame</Link>
							</li>
							<li>
								<Link to={'/contact'}>Contact</Link>
							</li>
							<li to={'/track-order'}>
								<Link>Track Your Order</Link>
							</li>
						</ul>
					</nav>
				</Col>
				<Col md={4} className='header__content__logo'>
					Logo
				</Col>
				<Col md={4} className='header__content__cart'>
					<ul>
						<li>
							<Button>Search</Button>
						</li>
						<li>
							<Button onClick={cartBtnHandler}>Cart</Button>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
