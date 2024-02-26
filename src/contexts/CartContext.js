import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: Boolean,
	setIsCartOpen: () => null,
	cart: null,
	setCart: () => null,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState(null);

	const value = { isCartOpen, setIsCartOpen, cart, setCart };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
