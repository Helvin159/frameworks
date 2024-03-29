import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import iconStar from '../assets/svg/icon-star.svg';

const AllReviews = () => {
	const { reviews } = useContext(ReviewContext);

	return (
		<Container fluid className='all-reviews'>
			<Row className='all-reviews__content'>
				{reviews?.items.map((i, k) => {
					let ratingStars = [];

					for (let c = 0; c < i.fields.rating; c++) {
						let index = `${c}-${
							Math.floor(Math.random() * (Math.floor(10) - Math.ceil(3) + 1)) +
							Math.ceil(3)
						}`;
						ratingStars.push({
							item: <img src={iconStar} alt='Star' key={index} />,
						});
					}

					return (
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
									{ratingStars.map((i) => i.item)}
								</Container>
							</Container>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default AllReviews;
