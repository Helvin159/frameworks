import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const ProductContext = createContext({
	products: null,
	setProducts: () => null,
	purchaseOptions: null,
	setPurchaseOptions: () => null,
	productDescription: null,
	setProductDescription: () => null,
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(null);
	const [purchaseOptions, setPurchaseOptions] = useState(null);
	const [productDescription, setProductDescription] = useState(null);

	const getProducts = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const productsRes = await client.getEntries({
			content_type: process.env.REACT_APP_CONTENTFUL_PRODUCT_CONTENT_TYPE,
		});
		const productsDescriptionRes = await client.getEntries({
			content_type:
				process.env.REACT_APP_CONTENTFUL_PRODUCT_DESCRIPTION_CONTENT_TYPE,
		});
		const purchaseOptionsRes = await client.getEntries({
			content_type:
				process.env.REACT_APP_CONTENTFUL_PURCHASE_OPTIONS_CONTENT_TYPE,
		});

		setProducts(productsRes);
		setProductDescription(productsDescriptionRes);
		setPurchaseOptions(purchaseOptionsRes);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const value = {
		products,
		setProducts,
		purchaseOptions,
		setPurchaseOptions,
		productDescription,
		setProductDescription,
	};

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
