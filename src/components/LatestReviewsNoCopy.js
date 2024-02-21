import React, { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import { ReviewModalContext } from '../contexts/ReviewModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import tempImg from '../assets/img/IMG_8273.JPG';

import timesIcon from '../assets/svg/icon-times.svg';
import starIcon from '../assets/svg/icon-star.svg';

const LatestReviewsNoCopy = () => {
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
				{reviews?.items.slice(0, 4).map((i, k) => (
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
							<p style={{ color: '#000' }}>{i?.fields.customerName}</p>
							<img src={starIcon} alt='Stars' />
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

export default LatestReviewsNoCopy;
