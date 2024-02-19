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
				<Col className='track-order__content__form-group'>
					<form
						ref={formByOrderNum}
						className='track-order__content__form-group__form'>
						<label htmlFor='orderNumber' className='d-block'>
							Order number
						</label>
						<input id='orderNumber' type='text' />
						<label htmlFor='orderEmail' className='d-block'>
							Email
						</label>
						<input id='orderEmail' type='text' required />
						<Button className='d-block my-2' onClick={handleTrackByOrder}>
							Track
						</Button>
					</form>
				</Col>
				<Col className='track-order__content__form-group'>
					<form ref={formByTrackingNum}>
						<label className='d-block' htmlFor='trackingNumber'>
							Tracking Number
						</label>
						<input id='trackingNumber' type='text' />
						<Button className='d-block my-2' onClick={handleTrackByTrackingNum}>
							Track
						</Button>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default TrackOrderForm;
