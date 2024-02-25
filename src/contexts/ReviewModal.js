import { createContext, useState } from 'react';

export const ReviewModalContext = createContext({
	isOpen: null,
	setIsOpen: () => Boolean,
	customerName: null,
	customerReview: null,
	customerRating: null,
	setCustomerName: () => null,
	setCustomerReview: () => null,
	setCustomerRating: () => null,
});

export const ReviewModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [customerName, setCustomerName] = useState('Helvin');
	const [customerReview, setCustomerReview] = useState('Helvin');
	const [customerRating, setCustomerRating] = useState('Helvin');

	const value = {
		isOpen,
		setIsOpen,
		customerName,
		setCustomerName,
		customerReview,
		setCustomerReview,
		customerRating,
		setCustomerRating,
	};

	return (
		<ReviewModalContext.Provider value={value}>
			{children}
		</ReviewModalContext.Provider>
	);
};
