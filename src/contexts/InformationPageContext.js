import React, { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const InformationPageContext = createContext({
	informationPages: null,
	setInformationPages: () => null,
});

export const InformationPageProvider = ({ children }) => {
	const [informationPages, setInformationPages] = useState(null);

	const getInfoPages = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const infoPagesRes = await client.getEntries({
			content_type:
				process.env.REACT_APP_CONTENTFUL_INFORMATIONAL_PAGES_CONTENT_TYPE,
		});

		setInformationPages(infoPagesRes);
	};

	useEffect(() => {
		getInfoPages();
	}, []);
	const value = { informationPages, setInformationPages };

	return (
		<InformationPageContext.Provider value={value}>
			{children}
		</InformationPageContext.Provider>
	);
};
