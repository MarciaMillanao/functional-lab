/*function lowercaser (input){
	return input.toLowerCase()
}*/

//lowercaser recibe input y lo transforma a lowercase
//para que me funcione también en numeros puedo agregar toString(), pero ya no sería pura, pues estoy cambiando el valor de entrada
const lowercaser = (input) => {
	if(typeof input !== 'string'){
		throw ('input is not a valid string')
	}
	return input.toLowerCase()
}

/*const  lowercaser (input) => {
	return input.toLowerCase()
}*/

module.exports = lowercaser//asi exporto mi variable (funcion que quiero ejecutar)