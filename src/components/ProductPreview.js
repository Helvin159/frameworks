import React, { useState } from 'react';
// import React, { useRef } from 'react';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import { Button } from 'bootstrap-4-react/lib/components';

const ProductPreview = () => {
	const [selected, setSelected] = useState('93.99');

	const handleClick = (e) => {
		console.log(e.target.dataset.selected);
		const selectedString = e.target.dataset.selected.toString();
		setSelected(selectedString);
	};

	return (
		<Container fluid>
			<Row>
				<Col>Slideshow</Col>
				<Col>
					<Container>
						<h1>
							FrameWorks <br /> Digital Frame
						</h1>
						<p>
							${selected} USD <span>discounted</span>
						</p>
					</Container>
					<Container>
						<Button data-selected={'93.99'} onClick={handleClick}>
							Buy 1 - 93.99
						</Button>
						<Button data-selected={'169.18'} onClick={handleClick}>
							Buy 2 - 169.18
						</Button>
						<Button data-selected={'239.67'} onClick={handleClick}>
							Buy 3 - 239.67
						</Button>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPreview;
