import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TrackOrderForm = () => {
	const formByOrderNum = useRef();
	const formByTrackingNum = useRef();

	const handleTrackByOrder = (e) => console.log(formByOrderNum, e);
	const handleTrackByTrackingNum = (e) => console.log(formByTrackingNum, e);
	return (
		<Container fluid as='section' className='track-order-form'>
			<Row className='track-order-form__content'>
				<Col
					xs={12}
					sm={12}
					md={6}
					className='track-order__content__form-group text-center'>
					<form
						ref={formByOrderNum}
						className='track-order__content__form-group__form'>
						<label htmlFor='orderNumber' className='d-block text-left'>
							Order number
						</label>
						<input id='orderNumber' type='text' />
						<label htmlFor='orderEmail' className='d-block text-left'>
							Email
						</label>
						<input id='orderEmail' type='text' required />
						<Button
							className='d-block my-2 mx-auto'
							onClick={handleTrackByOrder}>
							Track
						</Button>
					</form>
				</Col>
				<Col
					xs={12}
					sm={12}
					md={6}
					className='track-order__content__form-group text-center'>
					<form ref={formByTrackingNum}>
						<label className='d-block text-left' htmlFor='trackingNumber'>
							Tracking Number
						</label>
						<input id='trackingNumber' type='text' />
						<Button
							className='d-block my-2 mx-auto'
							onClick={handleTrackByTrackingNum}>
							Track
						</Button>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default TrackOrderForm;
