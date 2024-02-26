import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import heroImg from '../assets/img/s-l1600.webp';

const style = {
	background: `url(${heroImg})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
};

const Hero = () => {
	const navigate = useNavigate();

	const handleNav = () => navigate('/product-collections');
	return (
		<Container fluid className='hero' style={{ ...style }}>
			<Container className='hero__banner'>
				<Container fluid className='hero__banner__content'>
					<h2>Connect. Upload. Enjoy</h2>
					<Container fluid className='hero__banner__content__text'>
						<p>The Best Digital Video Frame</p>
						<Button onClick={handleNav}>
							Shop now <span>arrow animation</span>
						</Button>
					</Container>
				</Container>
			</Container>
		</Container>
	);
};

export default Hero;
