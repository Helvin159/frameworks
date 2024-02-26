import { createClient } from 'contentful';
import { createContext, useEffect, useState } from 'react';

export const MenuContext = createContext({
	isOpen: Boolean,
	setIsOpen: () => null,
	logoUrl: String,
	setLogoUrl: () => null,
});

export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [logoUrl, setLogoUrl] = useState(null);

	const getLogo = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const logoRes = await client.getEntries({
			content_type: process.env.REACT_APP_CONTENTFUL_LOGO_CONTENT_TYPE,
		});
		setLogoUrl({
			url: `https:${logoRes?.items[0].fields.logo.fields.file.url}`,
		});
	};

	useEffect(() => {
		getLogo();
	}, []);

	const value = { isOpen, setIsOpen, logoUrl, setLogoUrl };

	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
