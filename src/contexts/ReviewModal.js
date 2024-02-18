import { createContext, useState } from 'react';

export const ReviewContext = createContext({
	isOpen: null,
	setIsOpen: () => Boolean,
	customerName: null,
	customerReview: null,
	setCustomerName: () => null,
	setCustomerReview: () => null,
});

export const ReviewProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [customerName, setCustomerName] = useState('Helvin');
	const [customerReview, setCustomerReview] = useState('Helvin');

	const value = {
		isOpen,
		setIsOpen,
		customerName,
		setCustomerName,
		customerReview,
		setCustomerReview,
	};

	return (
		<ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
	);
};
