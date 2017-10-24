export const getPosts = () => new Promise((resolve, reject) => {
	fetch('http://localhost:8080/api/posts')
		.then(resp => resp.json())
		.then(resp =>resolve(resp))
		.catch(err => reject(err))
})

export const getPost = (id) => new Promise((resolve, reject) => {
	fetch(`http://localhost:8080/api/posts/${id}`)
		.then(resp => {
			const statusCode = resp.status
			if(statusCode === 404){
				return Promise.reject({
					message: 'Post no encontrado',
					status: 'error'
				})
			}
			return resp.json()
		})
		.then(resp =>resolve(resp))
		.catch(err => reject(err))
})

/*export const getPosts = () => new Promise((resolve, reject) =>{
	fetch('http://localhost:8080/api/posts')//esto nos devuelve una promesa
	// TÚ CÓDIGO VA AQUÍ
	.then(res => resp.json())//aca nos devuelve una respuesta positiva

	.then(res => resolve(resp)//aca nos devuelve una respuesta positiva
		//console.log(resp)
	.catch(err =>{//esto nos devuelve el error
		console.log(err.error)
	})
}) */


/*export const getPost = (id) => fetch(`http://localhost:8080/api/posts/${id}`)
// TÚ CÓDIGO VA AQUÍ
	.then(resp =>{//aca nos devuelve una respuesta positiva
		console.log(resp)
	})
	.catch(err =>{//esto nos devuelve el error
		console.log(err)
	})*/

