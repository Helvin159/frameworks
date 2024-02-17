import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router';

const Outlet = () => {
	return (
		<Fragment>
			<header>
				<h1>Header</h1>
			</header>
			<main>
				<Layout />
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</Fragment>
	);
};

export default Outlet;
