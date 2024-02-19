import React, { Fragment } from 'react';
import GenericHero from '../components/GenericHero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
	return (
		<Fragment>
			<GenericHero
				heading={"Get in touch. We're here to help!"}
				copy={
					'We provide top-notch customer service. Our professional team will get back to you as soon as possible, usually within the next 24-48 hours.'
				}
			/>
			<ContactForm />
		</Fragment>
	);
};

export default Contact;
