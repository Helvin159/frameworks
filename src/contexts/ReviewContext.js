import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const ReviewContext = createContext({
	reviews: null,
	setReviews: () => null,
});

export const ReviewProvider = ({ children }) => {
	const [reviews, setReviews] = useState(null);

	const getReviews = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const res = await client.getEntries({
			content_type: 'reviews',
		});
		setReviews(res);
		return;
	};

	useEffect(() => {
		getReviews();
	}, []);

	const value = { reviews, setReviews };

	return (
		<ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
	);
};
