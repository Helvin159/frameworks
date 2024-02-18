import React, { Fragment, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import DefaultImg from '../assets/img/IMG_8273.JPG';
import DefaultImg2 from '../assets/img/baby_1_5fcbadbd-bd6c-42a6-9d99-d7c4877be41e.webp';

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const imgStyle = {
		maxWidth: '634px',
		width: '634px',
		height: '634px',
		objectFit: 'cover',
		objectPosition: 'center',
		borderRadius: '15px',
	};

	return (
		<Fragment>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				indicators={false}
				fade>
				<Carousel.Item>
					<img src={DefaultImg} alt='img' style={imgStyle} />
				</Carousel.Item>
				<Carousel.Item>
					<img src={DefaultImg2} alt='img' style={imgStyle} />
				</Carousel.Item>
			</Carousel>
			<Container fluid></Container>
		</Fragment>
	);
};

export default Slider;
