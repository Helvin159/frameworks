import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CheckoutCartCard = ({ name, image, price }) => {
	return (
		<Container fluid>
			<Container>
				<Row>
					<Col md={3}>
						<img className='img-fluid' src={image} alt={name} />
					</Col>
					<Col md={6}>
						<h4>{name}</h4>
					</Col>
					<Col md={3}>
						<p>{price}</p>
					</Col>
				</Row>
				<Container>
					<Row>
						<Col md={8}>
							<form>
								<input type='text' placeholder='Discount code' />
							</form>
						</Col>
						<Col md={4}>
							<Button>Apply</Button>
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	);
};

export default CheckoutCartCard;
