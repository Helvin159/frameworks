import React from 'react';
import { Container } from 'react-bootstrap';

const Total = ({ subTotal, taxes, shipping, total }) => {
	return (
		<Container>
			<Container>
				<ul>
					<li>{subTotal ? <span>${subTotal}</span> : <span>$93</span>}</li>
					{taxes && (
						<li>
							<span>{taxes}</span>
						</li>
					)}
					<li>{shipping ? <span>${shipping}</span> : <span>$0.00</span>}</li>
					<li>{total ? total : '$93.99'}</li>
				</ul>
			</Container>
		</Container>
	);
};

export default Total;
