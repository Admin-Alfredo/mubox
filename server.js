const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')
const {getIp} = require('./config')
const app = express()
app.set('port', 3002)
app.use(bodyParser.json())
app.use(express.static('./public'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(cors())
consign()
	.include('./config')
	.then('./controllers/home.js')
	.then('./controllers/musicas.js')
	.then('./routes/router.js')
	.into(app)


app.listen(app.get('port'), ()=>{
	console.log('BoxMusic in port:', app.get('port'))
	console.log('machine ip: ', getIp())
})