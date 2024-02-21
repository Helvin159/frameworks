import React, { useContext, useRef, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import PurchaseOption from './components/PurchaseOption';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '../Slider';
import { Link } from 'react-router-dom';

const ProductPreview = ({ product }) => {
	const [selected, setSelected] = useState(93.99);
	const [selectedOriginal, setSelectedOriginal] = useState(188.0);

	const { cart, setCart } = useContext(CartContext);
	const { purchaseOptions } = useContext(ProductContext);

	const path = window.location.pathname;

	const form = useRef();

	const handleChange = (e) => {
		setSelected(e.target.dataset.price);
		setSelectedOriginal(e.target.dataset.originalprice);
	};

	const HandleAddCart = () => {
		let newObj;

		for (let i = 0; i < form.current.length; i++) {
			if (form.current[i]?.checked === true) {
				newObj = {
					id: form.current[i]?.dataset?.id,
					name: form.current[i]?.dataset?.name,
					quantity: form.current[i].value,
					price: form.current[i]?.dataset.price,
					original_price: form.current[i]?.dataset?.originalprice,
					image: form.current[i]?.dataset?.imgurl,
				};

				if (cart === null) {
					setCart([newObj]);
					return;
				}

				if (cart !== null) {
					setCart([...cart, newObj]);
					return;
				}
			}
		}
	};

	const sortedPurchaseOptions = purchaseOptions?.items.sort((a, b) => {
		const qA = a.fields.quantity;
		const qB = b.fields.quantity;
		if (qA < qB) return -1;
		if (qA > qB) return 1;
		return 0;
	});

	return (
		<Container fluid className='product-preview'>
			<Row className='product-preview__content'>
				<Col md={7} className='product-preview__content__slider'>
					<Slider gallery={product?.fields?.gallery} />
				</Col>
				<Col md={5} className='product-preview__content__copy'>
					<Container className='product-preview__content__copy__header'>
						<h1>
							FrameWorks <br /> Digital Frame
						</h1>
						<p>
							${Math.round(parseInt(selected, 10) * 100 + Number.EPSILON) / 100}{' '}
							USD
							<span>
								$
								{Math.round(
									(selectedOriginal - selected + Number.EPSILON) * 100
								) / 100}
							</span>
						</p>
					</Container>
					<Container fluid className='text-center py-3'>
						Bundle & Save
					</Container>
					<Container className='product-preview__content__copy__options'>
						<form ref={form} onChange={handleChange}>
							{sortedPurchaseOptions?.map((i, k) => (
								<PurchaseOption
									product={product}
									option={i}
									index={k}
									key={k}
								/>
							))}

							<Button onClick={HandleAddCart}>Add to cart</Button>
						</form>
						{path === '/' && (
							<Link
								className='py-3'
								to={`products/product-collections/${product?.fields.slug}`}>
								View this product
							</Link>
						)}
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPreview;