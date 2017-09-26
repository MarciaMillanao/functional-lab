test('no deberia cambiar el contgenido de la variable', () => {
	const str = 'inmutabilidad'

	expect(str.toUpperCase()).toBe('INMUTABILIDAD')
	expect(str).toBe('inmutabilidad')
})