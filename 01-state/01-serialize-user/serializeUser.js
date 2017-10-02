const serializeUser = user => {
	const newObj = Object.assign({}, user);
	//una sintaxis distinta a la del primer ejercicio para aplicar assign para copiar los valores
	newObj.name = (newObj.name.length > 10) ? `${newObj.name.slice(0, 7)}...` : newObj.name;
	newObj.date = newObj.date.toJSON();
	return JSON.stringify(newObj);
};

module.exports = serializeUser;