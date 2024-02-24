import React from 'react';
import Container from 'react-bootstrap/Container';

import starIcon from '../../../assets/svg/icon-star.svg';

const Card = ({ review, handleClick }) => {
	let ratingStars = [];

	for (let c = 0; c < review?.fields.rating; c++) {
		ratingStars.push({ item: <img src={starIcon} alt='Star' /> });
		console.log(ratingStars);
	}
	return (
		<Container
			className='latest-reviews__content__review '
			data-customer={review?.fields.customerName}
			data-review={review?.fields.customerComment}
			onClick={handleClick}
			md={3}
			lg={3}>
			<Container fluid className='latest-reviews__content__review__img'>
				<img
					src={`https:${review?.fields.customerAvatar?.fields.file.url}`}
					alt={review?.fields.customerName}
				/>
			</Container>
			<Container className='latest-reviews__content__review__stars'>
				<Container
					fluid
					className='latest-reviews__content__review__stars__rating'>
					{ratingStars.map((i) => i.item)}
				</Container>
			</Container>
			<Container fluid className='latest-reviews__content__review__copy'>
				<span>{review?.fields.customerName}</span>
				<p>{review?.fields.customerComment.substring(0, 85)}...</p>
			</Container>
		</Container>
	);
};

export default Card;
