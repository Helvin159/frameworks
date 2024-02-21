import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PurchaseOption = ({ product, option, index }) => {
	return (
		<Fragment key={index}>
			<input
				type='radio'
				name='quantity'
				data-id={product?.sys.id}
				data-price={product?.fields.price}
				data-name={product?.fields.title}
				data-originalprice={product?.fields.originalPrice}
				data-imgurl={`https:${product?.fields.file?.url}`}
				id={`quantity=${option.quantity}-${product?.sys.id}`}
				value={1}
				defaultChecked={option.fields.quantity === 1 ? true : false}
			/>
			<label htmlFor={`quantity=${option.fields.quantity}-${product?.sys.id}`}>
				<Row>
					<Col>
						<h5>Buy {`${option.fields.quantity}`}</h5>
						<p>
							You save $
							{Math.round(
								(product?.fields.originalPrice * option.fields.quantity -
									product?.fields.price * option.fields.quantity) *
									100 +
									Number.EPSILON
							) / 100}
							<span> USD</span>
						</p>
					</Col>
					<Col>
						<h5>
							$
							{Math.round(
								product?.fields.price * option.fields.quantity + Number.EPSILON
							)}
						</h5>
						<h6>USD</h6>
						<p>
							$
							{Math.round(
								product?.fields.originalPrice * option.fields.quantity +
									Number.EPSILON
							)}
							.00 USD
						</p>
					</Col>
				</Row>
			</label>
		</Fragment>
	);
};

export default PurchaseOption;
