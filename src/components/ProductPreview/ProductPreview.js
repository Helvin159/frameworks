import React, { useContext, useRef, useState } from 'react';

// Context
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';

// Components
import { Link } from 'react-router-dom';
import PurchaseOption from './components/PurchaseOption';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '../Slider';

// Assets
import rightArrowIcon from '../../assets/svg/icon-arrow-right-alt.svg';

const ProductPreview = ({ product }) => {
	const [selected, setSelected] = useState(93.99);
	const [selectedOriginal, setSelectedOriginal] = useState(188.0);
	const [showArrow, setShowArrow] = useState(false);

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
					for (let i = 0; i < cart.length; i++) {
						if (cart[i].id.toString() === newObj.id.toString()) {
							newObj.quantity =
								parseInt(newObj.quantity) + parseInt(cart[i].quantity);
							setCart([newObj]);
						} else {
							setCart([...cart, newObj]);
						}
					}
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

	const handleShowArrow = () => {
		setShowArrow(!showArrow);
	};

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

							<Button className='add-to-cart' onClick={HandleAddCart}>
								Add to cart
							</Button>
						</form>
						{path === '/' && (
							<Link
								className='py-3 view-more-link'
								onMouseEnter={handleShowArrow}
								onMouseOut={handleShowArrow}
								to={`products/product-collections/${product?.fields.slug}`}>
								View this product{' '}
								<span className={`${showArrow ? 'show' : ''}`}>
									<img src={rightArrowIcon} alt='Arrow' />
								</span>
							</Link>
						)}
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPreview;
