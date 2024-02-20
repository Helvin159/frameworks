import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const ProductContext = createContext({
	products: null,
	setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(null);

	const getProducts = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const res = await client.getEntries({
			content_type: 'product',
		});
		setProducts(res);
		return;
	};

	useEffect(() => {
		getProducts();
	}, []);

	const value = { products, setProducts };

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
