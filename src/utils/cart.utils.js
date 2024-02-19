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
