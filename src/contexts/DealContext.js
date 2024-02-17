import { createContext, useState } from 'react';

export const DealContext = createContext({
	isDeal: null,
	deal: null,
	setIsDeal: () => null,
	setDeal: () => null,
});

export const DealProvider = ({ children }) => {
	const [isDeal, setIsDeal] = useState(true);
	const [deal, setDeal] = useState('free worldwide shipping today');

	const value = { isDeal, setIsDeal, deal, setDeal };

	return <DealContext.Provider value={value}>{children}</DealContext.Provider>;
};
