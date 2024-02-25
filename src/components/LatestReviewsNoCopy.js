import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import SwipeToSlide from './SwipeToSlide/SwipeToSlide';
import ReviewModal from './ReviewModal';

const LatestReviewsNoCopy = () => {
	const { reviews } = useContext(ReviewContext);

	return (
		<Container fluid className='latest-reviews'>
			<Row className='latest-reviews__content'>
				<SwipeToSlide withCopy={false} reviews={reviews?.items} />
			</Row>

			<ReviewModal />
		</Container>
	);
};

export default LatestReviewsNoCopy;
