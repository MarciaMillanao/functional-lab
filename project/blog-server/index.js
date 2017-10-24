//archivo con datos
const data = require('./data.json')
//dependencia del web services
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//Nuestra APP (web server)
const app = express()

app.use(cors())//para permitir llamado de cualquier dominio
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())//solo recibe json

const port = process.env.PORT || 8080//este es mi puerto por defecto es el 8080
const router = express.Router()//router es una sublibreria de expres que nos permite acceder a las url

router.get('/posts', (req, res) => {//esta url debe devolverme todos los posts
    // TÚ CÓDIGO VA AQUÍ
    res.json(data)//toma la variable y le da la interpretación de json
})
//http://localhost:8080/api/posts
router.get('/posts/:id', (req, res) => {//esta url debe devolverme solo el posts con el id que yo le de
    // TÚ CÓDIGO VA AQUÍ
    const {id } = req.params
    //'data' necesitamos sacar el objeto que coincida con el id con el dado en la url
    console.log(typeof id)
    const post = data.filter((p)=> {
    	return p.id === parseInt(id, 10)//pido que sea identico al id de la url, con parseInt para que sea numero y la comparacion no sea entre string y numeros
    })[0]//quiero solo un dato, la primera posicion

    //comprobamos si hay algun dato filtrado
    if(typeof post === 'undefined'){
        res.status(404).json({})
        return
    }

    res.json(post)
    //console.log(id)
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)

