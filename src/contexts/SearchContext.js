import { createContext, useState } from 'react';

export const SearchContext = createContext({
	isSearchOpen: null,
	setIsSearchOpen: () => null,
});

export const SearchProvider = ({ children }) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const value = { isSearchOpen, setIsSearchOpen };

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
