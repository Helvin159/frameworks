import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { filter } from '../utils/cart.utils';
import timesIcon from '../assets/svg/icon-times.svg';

const Search = () => {
	const [searchByName, setSearchByName] = useState(null);
	const [searchByPrice, setSearchByPrice] = useState(null);
	const [searchById, setSearchById] = useState(null);

	const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext);

	const data = [
		{
			id: 1,
			name: 'Frame Works Digital Frame',
			quantity: 1,
			price: 93.99,
			original_price: 188.0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/baby_1_5fcbadbd-bd6c-42a6-9d99-d7c4877be41e.webp?alt=media&token=454da158-b1ed-4cc0-af5d-148a09c214ce',
		},
		{
			id: 2,
			name: 'Frame Works Digital Frame',
			quantity: 2,
			price: 169.18,
			original_price: 376.0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/baby_1_5fcbadbd-bd6c-42a6-9d99-d7c4877be41e.webp?alt=media&token=454da158-b1ed-4cc0-af5d-148a09c214ce',
		},
		{
			id: 3,
			name: 'Frame Works Digital Frame',
			quantity: 3,
			price: 239.67,
			original_price: 564.0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/baby_1_5fcbadbd-bd6c-42a6-9d99-d7c4877be41e.webp?alt=media&token=454da158-b1ed-4cc0-af5d-148a09c214ce',
		},
	];

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			if (isSearchOpen === true) {
				setIsSearchOpen(!isSearchOpen);
				document.body.style.overflow = 'auto';
				return;
			}
		}
	});

	const handleChange = (e) => {
		filter(
			data,
			e.target.value.toString().toLowerCase(),
			setSearchByName,
			setSearchById,
			setSearchByPrice
		);
	};

	const handleClose = (e) => {
		e.preventDefault();

		if (isSearchOpen === true) {
			setIsSearchOpen(!isSearchOpen);
			document.body.style.overflow = 'auto';
		}
	};

	return (
		<Container fluid className={`search ${isSearchOpen ? 'show' : ''}`}>
			<Button className='search__close-btn' onClick={handleClose}>
				<img src={timesIcon} alt='Close button' />
			</Button>
			<form className='search__form'>
				<input
					type='text'
					onChange={handleChange}
					placeholder='Search'
					required
				/>
			</form>
			<Container
				fluid
				className={`search__results ${
					(searchByName || searchById || searchByPrice) !== null ? 'show' : ''
				}`}>
				<h4>Results</h4>
				{searchByPrice?.length >= 0 && (
					<Container fluid className='search__results__category'>
						<Container>
							<h5>By Name</h5>
							{searchByName &&
								searchByName.map((i, k) => (
									<Container
										key={k}
										fluid
										className='search__results__category__item'>
										<Link to={'/'}>{i.name}</Link>
									</Container>
								))}
						</Container>
					</Container>
				)}
				{searchByPrice?.length >= 0 && (
					<Container fluid className='search__results__category'>
						<Container>
							<h5>By Price</h5>
							{searchByPrice &&
								searchByPrice.map((i, k) => (
									<Container
										key={k}
										fluid
										className='search__results__category__item'>
										<Link to={'/'}>{i.name}</Link>
									</Container>
								))}
						</Container>
					</Container>
				)}

				{searchById?.length >= 0 && (
					<Container fluid className='search__results__category'>
						<Container>
							<h5>By ID</h5>
							{searchById &&
								searchById.map((i, k) => (
									<Container
										key={k}
										fluid
										className='search__results__category__item'>
										<Link to={'/'}>{i.name}</Link>
									</Container>
								))}
						</Container>
					</Container>
				)}
			</Container>
		</Container>
	);
};

export default Search;
