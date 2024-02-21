import { createContext, useState } from 'react';

export const ReviewModalContext = createContext({
	isOpen: null,
	setIsOpen: () => Boolean,
	customerName: null,
	customerReview: null,
	setCustomerName: () => null,
	setCustomerReview: () => null,
});

export const ReviewModalProvider = ({ children }) => {
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
		<ReviewModalContext.Provider value={value}>
			{children}
		</ReviewModalContext.Provider>
	);
};
