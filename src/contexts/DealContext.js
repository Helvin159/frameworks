import { createClient } from 'contentful';
import { createContext, useEffect, useState } from 'react';

export const DealContext = createContext({
	isDeal: Boolean,
	setIsDeal: () => null,
	deal: null,
	setDeal: () => null,
});

export const DealProvider = ({ children }) => {
	const [isDeal, setIsDeal] = useState(true);
	const [deal, setDeal] = useState(null);

	const getCurrentDeal = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const currentDealRes = await client.getEntries({
			content_type: process.env.REACT_APP_CONTENTFUL_SPECIAL_DEAL_CONTENT_TYPE,
		});

		console.log(currentDealRes.items[0].fields.dealAvailable);

		setIsDeal(currentDealRes.items[0].fields.dealAvailable);
		setDeal(currentDealRes);
	};

	useEffect(() => {
		getCurrentDeal();
	}, []);

	const value = { isDeal, setIsDeal, deal, setDeal };

	return <DealContext.Provider value={value}>{children}</DealContext.Provider>;
};
