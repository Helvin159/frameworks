import { createClient } from 'contentful';

export const handleAddCart = ({ form, cart, setCart }) => {
	let newObj;

	for (let i = 0; i < form.current.length; i++) {
		if (form.current[i]?.checked === true) {
			newObj = {
				id: form.current[i]?.dataset?.id,
				quantity: form.current[i].value,
				price: form.current[i]?.dataset.price,
				original_price: form.current[i]?.dataset?.originalprice,
				image: '',
			};

			if (cart === null) {
				setCart([newObj]);
				return;
			}

			if (cart !== null) {
				setCart([...cart, newObj]);
				return;
			}
		}
	}
};

export const filter = (arr, query, nameSetter, idSetter, priceSetter) => {
	let filteredByName = arr.filter((el) =>
		el.name.toLowerCase().includes(query.toLowerCase())
	);

	let filteredById = arr.filter((el) =>
		el.id.toString().toLowerCase().includes(query.toString().toLowerCase())
	);
	let filteredByPrice = arr.filter((el) =>
		el.price.toString().toLowerCase().includes(query.toString().toLowerCase())
	);

	nameSetter(filteredByName);
	idSetter(filteredById);
	priceSetter(filteredByPrice);
	return filteredByName;
};

export const addKeyDownListener = ({ isSearchOpen, isSearchOpenSetter }) =>
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			if (isSearchOpen === true) {
				isSearchOpenSetter(!isSearchOpen);
				document.body.style.overflow = 'auto';
				return;
			}
		}
	});

export const getData = async (contentType, setter) => {
	const client = createClient({
		space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
		accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({
		content_type: contentType,
	});

	setter(res);
};
