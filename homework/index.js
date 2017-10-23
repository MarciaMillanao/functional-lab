exports.factorial = (n) => {
	if (n == 0){ 
		return 1; //caso base
	}else{
		return n * exports.factorial (n-1);
	}	
	return exports.factorial
	module.exports = exports.factorial;
}

exports.fibonacci = (n) => {
	if(n===0){
		return 0// caso base
	}
	else if(n===1){
		return 1
	}
	else{
		return (exports.fibonacci(n-2)+exports.fibonacci(n-1))
	}
	return exports.fibonacci
	module.exports = exports.fibonacci
}

exports.divide = (a, b) => {
	if(b > a){
		return 0;//caso base
	} else{
	    return exports.divide(a-b, b) + 1;
	}
	return exports.divide

	module.exports = exports.divide
}

exports.invert = (n) => {
	function recurse(n, resultado) {
		if (!n) {//si es distinto a un numero
			return resultado;//me devuelve el numero que ingreso
		}else{
			resultado = (resultado * 10) + (n % 10);
			return recurse(Math.floor(n / 10), resultado);
		}
	}
	return recurse(n, 0);
	module.exports = exports.invert
}

exports.suma = (n) => {
	const suma = n == 0 ? n : Math.floor(exports.suma(n / 10) + (n % 10))
	return suma
	module.exports = exports.suma
}

exports.multi = (a, b) => {
	let mult
	if (b <= 0) {
		return 0
	}
	if ( mult > exports.multi(a, b/2)) {
		return mul * mult
	}
	return a + exports.multi(a, b - 1)//entendi que siempre uno de los numeros se dividiran por 2 y el otro se multiplicara por dos, pero se sumaran solo los numeros que a su izquierda tengan un numero impar 
}

exports.sumArr = (arr) => {
	if (arr.length == 0) {
		return 0
	} else {
		const[first, ...other] = arr //aca obtengo el primer elemento"asignación por desestructuración: que es una expresión de JavaScript que nos permite extraer los datos de un arreglo, usando la sintaxis que es como la construcción de arreglos literales."
		return first + exports.sumArr(other)
	}
}
