import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ReviewContext } from '../contexts/ReviewContext';

const AllReviews = () => {
	const { reviews } = useContext(ReviewContext);

	return (
		<Container fluid className='all-reviews'>
			<Row className='all-reviews__content'>
				{reviews?.items.map((i, k) => (
					<Col xs={12} sm={4} md={3} key={k}>
						<img
							className='img-fluid'
							src={`https:${i.fields.customerAvatar.fields.file.url}`}
							alt={i.fields.customerName}
						/>
						<h4>{i.fields.customerName}</h4>
						<p>{i.fields.customerComment}</p>
						<p>{i.fields.rating}</p>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AllReviews;
