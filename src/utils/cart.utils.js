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
		console.log('run');
		if (e.key === 'Escape') {
			if (isSearchOpen === true) {
				isSearchOpenSetter(!isSearchOpen);
				document.body.style.overflow = 'auto';
				return;
			}
		}
	});
