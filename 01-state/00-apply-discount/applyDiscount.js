const discount = .2;

const applyDiscount = (cart, discount) => {
	if (!cart.length) {
		return [];
	}

	const current = Object.assign({}, cart[0],{
		price : cart[0].price * (1-discount)
	})
	return [current].concat(applyDiscount(cart.slice(1), discount));
};

module.exports = applyDiscount;