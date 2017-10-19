const lowercaser = require ('../lowercaser')

test('lowercaser deberia retornar un string en lowercaser'/*escribimos el mensaje de lo que esperamos*/, () => {
	const actual = 'LOREM IPSUM'
	const expected = 'lorem ipsum'//este es el valor esperado
	/*expect es un método de js*/
	expect(lowercaser(actual)).toBe(expected)
})

test('deberia fallar cuando ingresamos un numero', () =>{
	const actual = 1
	expect(() => {
		lowercaser(actual)
	}).toThrow()
})

