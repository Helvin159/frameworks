import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import Container from 'react-bootstrap/Container';
import SwipeToSlide from './SwipeToSlide/SwipeToSlide';
import ReviewModal from './ReviewModal';

const LatestReviews = () => {
	const { reviews } = useContext(ReviewContext);

	return (
		<Container fluid className='latest-reviews'>
			<Container fluid className='latest-reviews__content'>
				{reviews && <SwipeToSlide withCopy={true} reviews={reviews?.items} />}
			</Container>
			<ReviewModal />
		</Container>
	);
};

export default LatestReviews;
