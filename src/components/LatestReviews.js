import React, { useContext } from 'react';
import { ReviewModalContext } from '../contexts/ReviewModal';
import { ReviewContext } from '../contexts/ReviewContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import tempImg from '../assets/img/IMG_8273.JPG';

import timesIcon from '../assets/svg/icon-times.svg';
import starIcon from '../assets/svg/icon-star.svg';

const LatestReviews = () => {
	const { reviews } = useContext(ReviewContext);
	const {
		isOpen,
		setIsOpen,
		customerName,
		setCustomerName,
		customerReview,
		setCustomerReview,
	} = useContext(ReviewModalContext);

	const handleClick = (e) => {
		e.preventDefault();

		setIsOpen(!isOpen);
		setCustomerName(e.target.dataset.customer);
		setCustomerReview(e.target.dataset.review);
		document.body.style.overflow = 'hidden';
	};
	const handleClose = () => {
		setIsOpen(!isOpen);
		setCustomerName(null);
		setCustomerReview(null);
		document.body.style.overflow = 'auto';
	};

	return (
		<Container fluid className='latest-reviews'>
			<Row className='latest-reviews__content'>
				{reviews?.items.map((i, k) => (
					<Col
						className='latest-reviews__content__review'
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
