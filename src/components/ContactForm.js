import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ContactForm = () => {
	const form = useRef();

	const handleSubmit = (e) => console.log(form, 'form', e);

	return (
		<Container as='section' fluid className='contact-form'>
			<form ref={form} className='contact-form__form'>
				<Container className='contact-form__form__group-one'>
					<Row className='contact-form__form__group__row'>
						<Col className='contact-form__form__group__row__input'>
							<input type='text' name='name' placeholder='Name' />
						</Col>
						<Col className='contact-form__form__group__row__input'>
							<input type='email' name='email' placeholder='Email' />
						</Col>
					</Row>
				</Container>
				<Container className='contact-form__form__group'>
					<input type='text' name='phone-number' placeholder='Phone number' />
				</Container>
				<Container className='contact-form__form__group'>
					<textarea placeholder='Comment' name='comment' />
				</Container>
				<Button onClick={handleSubmit}>Send</Button>
			</form>
		</Container>
	);
};

export default ContactForm;
