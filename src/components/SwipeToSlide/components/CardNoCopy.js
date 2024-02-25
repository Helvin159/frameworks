import React from 'react';
import Container from 'react-bootstrap/Container';

import starIcon from '../../../assets/svg/icon-star.svg';

const CardNoCopy = ({ review, handleClick }) => {
	let ratingStars = [];

	for (let c = 0; c < review?.fields.rating; c++) {
		let index = `${c}-${
			Math.floor(Math.random() * (Math.floor(10) - Math.ceil(3) + 1)) +
			Math.ceil(3)
		}`;
		ratingStars.push({
			item: (
				<img
					src={starIcon}
					data-customer={review?.fields.customerName}
					data-review={review?.fields.customerComment}
					data-rating={review?.fields.rating}
					alt='Star'
					key={index}
				/>
			),
		});
	}
	return (
		<Container
			className='latest-reviews__content__review'
			data-customer={review?.fields.customerName}
			data-review={review?.fields.customerComment}
			data-rating={review?.fields.rating}
			onClick={handleClick}
			md={3}
			lg={3}>
			<Container
				data-customer={review?.fields.customerName}
				data-review={review?.fields.customerComment}
				data-rating={review?.fields.rating}
				fluid
				className='latest-reviews__content__review__img'>
				<img
					data-customer={review?.fields.customerName}
					data-review={review?.fields.customerComment}
					data-rating={review?.fields.rating}
					src={`https:${review?.fields.customerAvatar?.fields.file.url}`}
					alt={review?.fields.customerName}
				/>
			</Container>
			<Container
				data-customer={review?.fields.customerName}
				data-review={review?.fields.customerComment}
				data-rating={review?.fields.rating}
				className='latest-reviews__content__review__stars'>
				<p
					data-customer={review?.fields.customerName}
					data-review={review?.fields.customerComment}
					data-rating={review?.fields.rating}
					style={{ color: '#000' }}>
					{review?.fields.customerName}
				</p>
				<Container
					data-customer={review?.fields.customerName}
					data-review={review?.fields.customerComment}
					data-rating={review?.fields.rating}
					fluid
					className='latest-reviews__content__review__stars__rating'>
					{ratingStars.map((i) => i.item)}
				</Container>
			</Container>
		</Container>
	);
};

export default CardNoCopy;
