var router = require('./routes/main.route')
var express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use("/", router)

app.listen(port, () => {console.log(`Servidor ejecutándose en puerto ${port}`)})