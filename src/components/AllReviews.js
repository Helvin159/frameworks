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
					<Col
						xs={12}
						sm={4}
						md={3}
						key={k}
						className='all-reviews__content__review'>
						<Container className='all-reviews__content__review__card'>
							<img
								className='img-fluid all-reviews__content__review__card__avatar'
								src={`https:${i?.fields.customerAvatar?.fields.file.url}`}
								alt={i?.fields.customerName}
							/>
							<Container className='header' fluid>
								<h4>{i?.fields.customerName}</h4>
							</Container>
							<Container fluid className='copy'>
								<p>{i?.fields.customerComment}</p>
							</Container>
							<Container className='rating'>
								<p>{i?.fields.rating}</p>
							</Container>
						</Container>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AllReviews;
