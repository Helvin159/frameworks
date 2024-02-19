import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { SearchContext } from '../contexts/SearchContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import cartIcon from '../assets/svg/icon-cart-shopping.svg';
import searchIcon from '../assets/svg//icon-magnifying-glass.svg';

const Header = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);

	const cartBtnHandler = (e) => {
		e.preventDefault();

		if (isCartOpen === false) {
			document.body.style.overflow = 'hidden';
			setIsCartOpen(!isCartOpen);
			return;
		}
	};

	const handleSearch = (e) => {
		// console.log(e);
		if (isSearchOpen === false) {
			setIsSearchOpen(!isSearchOpen);
			document.body.style.overflow = 'hidden';
		}
	};

	return (
		<Container fluid className='header'>
			<Row className='header__content'>
				<Col md={4} className='header__content__nav'>
					<nav>
						<ul>
							<li>
								<Link to={'/'}>Home</Link>
							</li>
							<li>
								<Link to={'/products/product-collections/1'}>Snap Frame</Link>
							</li>
							<li>
								<Link to={'/contact'}>Contact</Link>
							</li>
							<li to={'/track-order'}>
								<Link>Track Your Order</Link>
							</li>
						</ul>
					</nav>
				</Col>
				<Col md={4} className='header__content__logo'>
					Logo
				</Col>
				<Col md={4} className='header__content__cart'>
					<ul>
						<li
							onClick={handleSearch}
							className='header__content__cart__search-btn'>
							<img src={searchIcon} alt='Search Button' />
						</li>
						<li onClick={cartBtnHandler} className='header__content__cart__btn'>
							<img src={cartIcon} alt='Shopping cart Button' />
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
