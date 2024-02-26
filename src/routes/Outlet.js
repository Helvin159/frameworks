import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router-dom';
import DealNotification from '../components/DealNotification';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';

const Outlet = ({ isDeal, deal, isSearchOpen }) => {
	return (
		<Fragment>
			{isDeal && (
				<DealNotification deal={deal.items[0].fields.dealDescription} />
			)}
			{isSearchOpen && <Search />}

			<Cart />
			<Header />
			<main>
				<Layout />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Outlet;
