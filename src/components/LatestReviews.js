import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import tempImg from '../assets/img/IMG_8273.JPG';

import timesIcon from '../assets/svg/icon-times.svg';
import starIcon from '../assets/svg/icon-star.svg';

const LatestReviews = () => {
	const {
		isOpen,
		setIsOpen,
		customerName,
		setCustomerName,
		customerReview,
		setCustomerReview,
	} = useContext(ReviewContext);

	const handleClick = (e) => {
		e.preventDefault();

		setIsOpen(!isOpen);
		setCustomerName(e.target.dataset.customer);
		setCustomerReview(e.target.dataset.review);
		document.body.style.overflow = 'hidden';

		console.log(e);
	};
	const handleClose = () => {
		setIsOpen(!isOpen);
		setCustomerName(null);
		setCustomerReview(null);
		document.body.style.overflow = 'auto';
	};

	const reviews = [
		{
			customerName: 'Mia A',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.5,
		},
	];

	return (
		<Container fluid className='latest-reviews'>
			<Row className='latest-reviews__content'>
				{reviews.map((i, k) => (
					<Col
						className='latest-reviews__content__review'
						data-customer={i.customerName}
						data-review={i.customerReview}
						onClick={handleClick}
						md={4}
						lg={4}
						key={k}>
						<Container fluid className='latest-reviews__content__review__img'>
							<img src={tempImg} alt='Temp' />
						</Container>
						<Container className='latest-reviews__content__review__stars'>
							<img src={starIcon} alt='Stars' />
						</Container>
						<Container fluid className='latest-reviews__content__review__copy'>
							<span>{i.customerName}</span>
							<p>{i.customerReview}</p>
						</Container>
					</Col>
				))}
			</Row>
			<Container
				fluid
				className={`latest-reviews__modal ${isOpen ? 'show' : ''}`}>
				<Row className='latest-reviews__modal__dialogue'>
					<Button
						onClick={handleClose}
						className='latest-reviews__modal__close-btn'>
						<img src={timesIcon} alt='close' />
					</Button>
					<Col className='latest-reviews__modal__dialogue__img'>
						<img src={tempImg} alt='temp' width={'100%'} />
					</Col>
					<Col>
						<Container fluid>
							<Row>
								<Col>
									<p>{customerName}.</p>
									<p>stars</p>
								</Col>
								<Col>
									<p>{customerReview}</p>
								</Col>
							</Row>
						</Container>
						<p>{customerReview}</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default LatestReviews;
