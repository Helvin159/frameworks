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

	return (
		<Fragment>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				indicators={false}
				className='slider'
				fade>
				<Carousel.Item className='slider__item'>
					<img src={DefaultImg} alt='img' />
				</Carousel.Item>
				<Carousel.Item className='slider__item'>
					<img src={DefaultImg2} alt='img' />
				</Carousel.Item>
			</Carousel>
			<Container fluid></Container>
		</Fragment>
	);
};

export default Slider;
