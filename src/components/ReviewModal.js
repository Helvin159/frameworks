import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ReviewModalContext } from '../contexts/ReviewModal';

import tempImg from '../assets/img/IMG_8273.JPG';
import timesIcon from '../assets/svg/icon-times.svg';
import starIcon from '../assets/svg/icon-star.svg';

const ReviewModal = () => {
	const {
		isOpen,
		setIsOpen,
		customerName,
		setCustomerName,
		customerReview,
		setCustomerReview,
		customerRating,
		setCustomerRating,
	} = useContext(ReviewModalContext);

	const handleClose = () => {
		setCustomerName(null);
		setCustomerReview(null);
		setCustomerRating(null);
		document.body.style.overflow = 'auto';
		setIsOpen(!isOpen);
	};

	let ratingStars = [];

	for (let i = 0; i < customerRating; i++) {
		ratingStars.push({
			item: <img src={starIcon} alt={`${customerRating} stars`} key={i} />,
		});
	}

	const handleKeyDown = (e) => {
		if (e.keyCode.toString() === '27' || e.keyCode.toString() === '32')
			setIsOpen(!isOpen);

		!isOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	};

	return (
		<Container
			fluid
			className={`latest-reviews__modal ${isOpen ? 'show' : ''}`}
			onKeyDown={handleKeyDown}
			tabIndex={-1}>
			<Row className='latest-reviews__modal__dialogue'>
				<Button
					onClick={handleClose}
					className='latest-reviews__modal__close-btn'>
					<img src={timesIcon} alt='close' />
				</Button>
				<Col className='latest-reviews__modal__dialogue__img'>
					<img src={tempImg} alt='temp' width={'100%'} />
				</Col>
				<Col className='latest-reviews__modal__dialogue__copy'>
					<Container className='latest-reviews__modal__dialogue__copy__content'>
						<Container className='latest-reviews__modal__dialogue__copy__content__header'>
							<h4>{customerName}</h4>
							{ratingStars.map((i) => i.item)}
						</Container>
						<Container className='latest-reviews__modal__dialogue__copy__content__par'>
							<Container className='mobile-image'>
								<img src={tempImg} alt='temp' width={'100%'} />
							</Container>
							<p>{customerReview}</p>
						</Container>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ReviewModal;
