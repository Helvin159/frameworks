import React, { useContext } from 'react';
import { ReviewModalContext } from '../contexts/ReviewModal';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';

import starIcon from '../assets/svg/icon-star.svg';

const SwipeToSlide = ({ reviews }) => {
	const {
		isOpen,
		setIsOpen,
		customerName,
		setCustomerName,
		customerReview,
		setCustomerReview,
	} = useContext(ReviewModalContext);

	const settings = {
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 4,

		arrows: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 575.5,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerMode: true,
				},
			},
		],
		afterChange: (index) => {
			console.log(`Slider changed to: ${index + 1}`);
		},
	};

	const handleClick = (e) => {
		e.preventDefault();

		setCustomerName(e.target.dataset.customer);
		setCustomerReview(e.target.dataset.review);

		setIsOpen(!isOpen);
		document.body.style.overflow = 'hidden';
	};
	return (
		<Container
			fluid
			className='slider-container latest-reviews__content__slider '>
			<Slider {...settings}>
				{reviews.map((i, k) => (
					<Container
						className='latest-reviews__content__review '
						data-customer={i?.fields.customerName}
						data-review={i?.fields.customerComment}
						onClick={handleClick}
						md={3}
						lg={3}
						key={k}>
						<Container fluid className='latest-reviews__content__review__img'>
							<img
								src={`https:${i?.fields.customerAvatar?.fields.file.url}`}
								alt={i?.fields.customerName}
							/>
						</Container>
						<Container className='latest-reviews__content__review__stars'>
							<img src={starIcon} alt='Stars' />
						</Container>
						<Container fluid className='latest-reviews__content__review__copy'>
							<span>{i?.fields.customerName}</span>
							<p>{i?.fields.customerComment.substring(0, 93)}...</p>
						</Container>
					</Container>
				))}
			</Slider>
		</Container>
	);
};

export default SwipeToSlide;
