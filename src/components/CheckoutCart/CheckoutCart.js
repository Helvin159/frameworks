import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutCartCard from './components/CheckoutCartCard';
import Total from './components/Total';

const CheckoutCart = ({ cart }) => {
	return (
		<Container fluid>
			<Row>
				{cart?.map((i, k) => {
					return (
						<Col data-id={i.id}>
							<CheckoutCartCard
								name={i.name}
								image={i.image}
								price={i.price}
								key={k}
							/>
						</Col>
					);
				})}
			</Row>
			<Total taxes={'0.34'} shipping={'5.99'} />
		</Container>
	);
};

export default CheckoutCart;
