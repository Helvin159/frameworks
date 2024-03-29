import React, { useContext } from 'react';
import { ReviewModalContext } from '../../contexts/ReviewModal';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';
import Card from './components/Card';
import CardNoCopy from './components/CardNoCopy';

const SwipeToSlide = ({ reviews, withCopy }) => {
	const {
		isOpen,
		setIsOpen,
		setCustomerName,
		setCustomerReview,
		setCustomerRating,
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
					draggable: true,
					dots: false,
					centerMode: 1,
				},
			},
			{
				breakpoint: 575.5,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					draggable: true,
					centerMode: 1,
					arrows: false,
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
		setCustomerRating(e.target.dataset.rating);

		setIsOpen(!isOpen);
		document.body.style.overflow = 'hidden';
	};

	return (
		<Container
			fluid
			className='slider-container latest-reviews__content__slider '>
			<Slider {...settings}>
				{withCopy
					? reviews.map((i, k) => (
							<Card review={i} handleClick={handleClick} key={k} />
					  ))
					: reviews.map((i, k) => (
							<CardNoCopy review={i} handleClick={handleClick} key={k} />
					  ))}
			</Slider>
		</Container>
	);
};

export default SwipeToSlide;
