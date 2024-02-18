import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: Boolean,
	setIsCartOpen: () => null,
	inCart: Array,
	setInCart: () => null,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [inCart, setInCart] = useState({});

	const value = { isCartOpen, setIsCartOpen, inCart, setInCart };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
