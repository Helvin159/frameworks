import React, { Fragment, useContext } from 'react';
import { Outlet as Layout } from 'react-router-dom';

import { DealContext } from '../contexts/DealContext';
import { CartContext } from '../contexts/CartContext';
import DealNotification from '../components/DealNotification';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Outlet = () => {
	const { isDeal, deal } = useContext(DealContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<Fragment>
			{isDeal && <DealNotification deal={deal} />}
			{isCartOpen && <Cart />}
			<Header />
			<main>
				<Layout />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Outlet;
