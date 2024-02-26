import React, { Fragment } from 'react';

import GenericHero from '../components/GenericHero';
import TrackOrderForm from '../components/TrackOrderForm';

const TrackOrder = () => {
	return (
		<Fragment>
			<GenericHero heading={'Track your order'} copy={null} />
			<TrackOrderForm />
		</Fragment>
	);
};

export default TrackOrder;
