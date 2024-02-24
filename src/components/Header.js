import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { SearchContext } from '../contexts/SearchContext';
import { MenuContext } from '../contexts/MenuContext';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import cartIcon from '../assets/svg/icon-cart-shopping.svg';
import searchIcon from '../assets/svg//icon-magnifying-glass.svg';
import hamburger from '../assets/svg/icon-bars.svg';
import timesIcon from '../assets/svg/icon-times.svg';

const Header = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);
	const { isOpen, setIsOpen } = useContext(MenuContext);
	const { logoUrl } = useContext(MenuContext);

	const cartBtnHandler = (e) => {
		e.preventDefault();

		if (isCartOpen === false) {
			document.body.style.overflow = 'hidden';
			setIsCartOpen(!isCartOpen);
			return;
		}
	};

	const handleSearch = () => {
		if (isSearchOpen === false) {
			setIsSearchOpen(!isSearchOpen);
			document.body.style.overflow = 'hidden';
		}
	};

	const handleShow = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = 'hidden';
	};
	const handleClose = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = 'auto';
	};

	return (
		<>
			<Container fluid className='header'>
				<Row className='header__content'>
					<Col xs={2} md={4} className='header__content__mobile-menu-btn'>
						<Button onClick={handleShow}>
							<img src={hamburger} alt='Open menu' />
						</Button>
					</Col>
					<Col md={4} className='header__content__nav'>
						<nav className='header__content__nav__desktop-nav'>
							<ul>
								<li>
									<Link to={'/'}>Home</Link>
								</li>
								<li>
									<Link
										to={
											'/products/product-collections/frameworks-digital-frame'
										}>
										Frame Work
									</Link>
								</li>
								<li>
									<Link to={'/contact'}>Contact</Link>
								</li>
								<li>
									<Link to={'/track-order'}>Track Your Order</Link>
								</li>
							</ul>
						</nav>
					</Col>
					<Col xs={12} sm={4} md={4} className='header__content__logo'>
						<img src={logoUrl?.url} width={'250px'} alt='Logo' />
					</Col>
					<Col md={4} className='header__content__cart'>
						<ul>
							<li
								onClick={handleSearch}
								className='header__content__cart__search-btn'>
								<img src={searchIcon} alt='Search Button' />
							</li>
							<li
								onClick={cartBtnHandler}
								className='header__content__cart__btn'>
								<img src={cartIcon} alt='Shopping cart Button' />
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<nav className={`mobile-nav ${isOpen ? 'show' : ''}`}>
				<Button className='close-icon' onClick={handleClose}>
					<img src={timesIcon} alt='Close buttn' />
				</Button>
				<ul>
					<li>
						<Link onClick={handleClose} to={'/'}>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={handleClose}
							to={'/products/product-collections/frameworks-digital-frame'}>
							Frame Work
						</Link>
					</li>
					<li>
						<Link onClick={handleClose} to={'/contact'}>
							Contact
						</Link>
					</li>
					<li>
						<Link onClick={handleClose} to={'/track-order'}>
							Track Your Order
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
