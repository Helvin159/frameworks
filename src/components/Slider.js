import React, { Fragment, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const Slider = ({ gallery }) => {
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
				{gallery?.map((i, k) => (
					<Carousel.Item className='slider__item' key={k}>
						<img
							src={`https:${i.fields.file.url}`}
							width={i.fields.file.details.image.width}
							height={i.fields.file.details.image.height}
							alt='img'
						/>
					</Carousel.Item>
				))}
			</Carousel>
			<Container fluid></Container>
		</Fragment>
	);
};

export default Slider;
